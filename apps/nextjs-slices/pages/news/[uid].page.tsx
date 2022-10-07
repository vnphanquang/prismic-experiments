import { asImageSrc, asLink, isFilled } from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import NewsCard from '../../components/NewsCard';
import { NewsDocument } from '../../prismic.types.generated';
import { createClient } from '../../prismicio';
import { components as NewsSlicesComponents } from '../../slices/news';

export interface NewsPageProps {
  news: NewsDocument;
};

export const NewsPage: React.FC<NewsPageProps> = ({ news }) => {
  const { data, last_publication_date, first_publication_date } = news;
  const { relatedNews, slices, thumbnail, title } = data;
  return (
    <div className="page grid gird-cols-1 gap-14">
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <p className="text-right">Published at {new Date(first_publication_date).toLocaleDateString()}</p>
      {isFilled.image(thumbnail) && (
        <div className="flex justify-center">
          <Image
            src={asImageSrc(thumbnail)}
            alt={thumbnail.alt ?? ''}
            height="256" width="384"
          />
        </div>
      )}
      {first_publication_date !== last_publication_date && (
        <p>Updated at {new Date(last_publication_date).toLocaleDateString()}</p>
      )}
      <SliceZone components={NewsSlicesComponents} slices={slices} />
      {relatedNews.length && (
        <div>
          <h2 className="text-xl font-bold">Related News</h2>
          <ul className="mt-5 flex flex-wrap gap-5">
            {relatedNews.map((doc) => (
              <li key={(doc.news as unknown as NewsDocument).id}>
                <NewsCard news={doc.news as unknown as NewsDocument} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  const news = await client.getAllByType('news');
  const paths = news.reduce((nPaths, doc) => {
    const link = asLink(doc);
    if (link) {
      nPaths.push(link);
    }
    return nPaths;
  }, [] as string[]);
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ previewData, params }) => {
  const client = createClient({ previewData })
  if (!params?.uid) {
    return {
      notFound: true,
    };
  }
  const news = await client.getByUID('news', params.uid as string, {
    orderings: [{
      field: 'document.last_publication_date',
      direction: 'desc',
    }],
    graphQuery: `{
      news {
        ...newsFields
        relatedNews {
          news {
            ...newsFields
          }
        }
      }
    }`
  });
  return {
    props: {
      news,
    },
  }
}

export default NewsPage;
