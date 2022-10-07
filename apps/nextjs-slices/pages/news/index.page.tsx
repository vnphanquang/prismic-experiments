import type { GetStaticProps } from 'next';
import NewsCard from '../../components/NewsCard';
import { NewsDocument } from '../../prismic.types.generated';
import { createClient } from '../../prismicio';

export interface NewsLandingPageProps {
  newsList: NewsDocument[];
}

export const NewsLandingPage: React.FC<NewsLandingPageProps> = ({ newsList }) => {
  return (
    <div className="page">
      <h1 className="text-2xl font-bold text-center">News Listing</h1>
      <ul className="grid grid-cols-1 gap-5 mt-5 justify-items-center">
        {newsList.map(news => (
          <li key={news.id} className="w-80">
            <NewsCard news={news} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData, params }) => {
  const client = createClient({ previewData })
  const newsList = await client.getAllByType('news');
  return {
    props: {
      newsList,
    },
  }
}

export default NewsLandingPage;
