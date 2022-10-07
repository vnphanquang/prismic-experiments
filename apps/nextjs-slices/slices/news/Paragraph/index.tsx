import React from "react";
import type { ImageField } from "@prismicio/types";
import { asImageSrc, isFilled } from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { ParagraphSlice } from "../../../prismic.types.generated";
import Image from "next/image";

export type ParagraphSliceProps = {
  slice: ParagraphSlice;
};

export const ParagraphSliceComponent: React.FC<ParagraphSliceProps> = ({
  slice,
}) => {
  let image: ImageField<never>;

  if (slice.variation !== "default") {
    image = slice.primary.image;
  }

  return (
    <section className="w-full flex">
      {slice.variation === "withImageBefore" &&
        isFilled.image(slice.primary.image) && (
          <div className="self-start">
            <Image
              src={asImageSrc(slice.primary.image)}
              alt={slice.primary.image.alt ?? ""}
              height="192" width="256"
            />
          </div>
        )}
      <div className="flex-1">
        <PrismicRichText field={slice.primary.content} />
      </div>
      {slice.variation === "withImageAfter" &&
        isFilled.image(slice.primary.image) && (
          <div className="self-start">
            <Image
              src={asImageSrc(slice.primary.image)}
              alt={slice.primary.image.alt ?? ""}
              height="192" width="256"
            />
          </div>
        )}
    </section>
  );
};

export default ParagraphSliceComponent;
