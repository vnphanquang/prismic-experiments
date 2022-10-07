import { asImageSrc, asLink, isFilled } from "@prismicio/helpers";
import Image from "next/image";
import Link from "next/link";
import { NewsDocument } from "../prismic.types.generated";

export interface NewsCardProps {
  news: NewsDocument;
}
export const NewsCard: React.FC<NewsCardProps> = ({ news }) => (
  <article className="p-4 bg-blue-200 shadow-md rounded flex items-center hover:shadow-lg">
    {isFilled.image(news.data.thumbnail) && (
      <div>
        <Image src={asImageSrc(news.data.thumbnail)} alt={news.data.thumbnail.alt ?? ''} height="96" width="128" />
      </div>
    )}
    <div className="flex-1 grid grid-cols-1 gap-2 justify-items-start ml-4">
      <h2>{news.data.title}</h2>
      <p>Date: {new Date(news.last_publication_date).toLocaleDateString()}</p>
      <Link href={asLink(news) ?? ''}>
        <a className="btn-link">See more</a>
      </Link>
    </div>
  </article>
)

export default NewsCard
