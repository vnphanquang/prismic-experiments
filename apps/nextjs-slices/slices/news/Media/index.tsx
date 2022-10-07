import { asImageSrc, asLink, isFilled } from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import React from 'react';
import { MediaSlice } from '../../../prismic.types.generated';
import Image from "next/image";

export type MediaSliceProps = {
  slice: MediaSlice;
}

export const MediaSliceComponent: React.FC<MediaSliceProps> = ({ slice }) => {
  switch (slice.variation) {
    case 'anotherNews': {
      return isFilled.contentRelationship(slice.primary.media) ? (
        <Link href={asLink(slice.primary.media) || ''}>
          <PrismicRichText field={slice.primary.description} />
        </Link>
      ) : null;
    }
    case 'embedded': {
      return isFilled.embed(slice.primary.media) ? (
        <div>
          <div
            className="embedded-media mb-2"
            dangerouslySetInnerHTML={{ __html: slice.primary.media.html ?? '' }}
          />
          <PrismicRichText field={slice.primary.description} />
        </div>
      ) : null;
    }
    case 'video': {
      return isFilled.linkToMedia(slice.primary.media) ? (
        <div>
          <video src={asLink(slice.primary.media) ?? ''} className="mb-2" />
          <PrismicRichText field={slice.primary.description} />
        </div>
      ) : null;
    }
    case 'default':
    default: {
      return isFilled.image(slice.primary.media) ? (
        <div>
          <Image
            src={asImageSrc(slice.primary.media)}
            alt={slice.primary.media.alt ?? ''}
            height="96" width="128"
            className="mb-2"
          />
          <PrismicRichText field={slice.primary.description} />
        </div>
      ) : null;
    }
  }
};

export default MediaSliceComponent;
