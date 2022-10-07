// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for News documents */
interface NewsDocumentData {
    /**
     * Title field in *News*
     *
     * - **Field Type**: Text
     * - **Placeholder**: News title goes here
     * - **API ID Path**: news.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Thumbnail field in *News*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: news.thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumbnail: prismicT.ImageField<never>;
    /**
     * Publication Date field in *News*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: news.publishedAt
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    publishedAt: prismicT.DateField;
    /**
     * Related News field in *News*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: news.relatedNews[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    relatedNews: prismicT.GroupField<Simplify<NewsDocumentDataRelatedNewsItem>>;
    /**
     * Slice Zone field in *News*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: news.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NewsDocumentDataSlicesSlice>;
}
/**
 * Item in News → Related News
 *
 */
export interface NewsDocumentDataRelatedNewsItem {
    /**
     * news field in *News → Related News*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: news.relatedNews[].news
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    news: prismicT.RelationField<"news">;
}
/**
 * Slice for *News → Slice Zone*
 *
 */
type NewsDocumentDataSlicesSlice = MediaSlice | ParagraphSlice;
/**
 * News document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NewsDocumentData>, "news", Lang>;
export type AllDocumentTypes = NewsDocument;
/**
 * Primary content in Media → Primary
 *
 */
interface MediaSliceDefaultPrimary {
    /**
     * Media field in *Media → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: media.primary.media
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    media: prismicT.ImageField<never>;
    /**
     * description field in *Media → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: media.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Media Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MediaSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<MediaSliceDefaultPrimary>, never>;
/**
 * Primary content in Media → Primary
 *
 */
interface MediaSliceVideoPrimary {
    /**
     * Media field in *Media → Primary*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: media.primary.media
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media: prismicT.LinkToMediaField;
    /**
     * description field in *Media → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: media.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Video variation for Media Slice
 *
 * - **API ID**: `video`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MediaSliceVideo = prismicT.SharedSliceVariation<"video", Simplify<MediaSliceVideoPrimary>, never>;
/**
 * Primary content in Media → Primary
 *
 */
interface MediaSliceEmbeddedPrimary {
    /**
     * Media field in *Media → Primary*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: media.primary.media
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    media: prismicT.EmbedField;
    /**
     * description field in *Media → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: media.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Embedded variation for Media Slice
 *
 * - **API ID**: `embedded`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MediaSliceEmbedded = prismicT.SharedSliceVariation<"embedded", Simplify<MediaSliceEmbeddedPrimary>, never>;
/**
 * Primary content in Media → Primary
 *
 */
interface MediaSliceAnotherNewsPrimary {
    /**
     * Media field in *Media → Primary*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: media.primary.media
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media: prismicT.RelationField<"news">;
    /**
     * description field in *Media → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: media.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Another News variation for Media Slice
 *
 * - **API ID**: `anotherNews`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MediaSliceAnotherNews = prismicT.SharedSliceVariation<"anotherNews", Simplify<MediaSliceAnotherNewsPrimary>, never>;
/**
 * Slice variation for *Media*
 *
 */
type MediaSliceVariation = MediaSliceDefault | MediaSliceVideo | MediaSliceEmbedded | MediaSliceAnotherNews;
/**
 * Media Shared Slice
 *
 * - **API ID**: `media`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MediaSlice = prismicT.SharedSlice<"media", MediaSliceVariation>;
/**
 * Primary content in Paragraph → Primary
 *
 */
interface ParagraphSliceDefaultPrimary {
    /**
     * Content field in *Paragraph → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: paragraph.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Default variation for Paragraph Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Paragraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ParagraphSliceDefaultPrimary>, never>;
/**
 * Primary content in Paragraph → Primary
 *
 */
interface ParagraphSliceWithImageBeforePrimary {
    /**
     * Content field in *Paragraph → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: paragraph.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Image field in *Paragraph → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: paragraph.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * With Image Before variation for Paragraph Slice
 *
 * - **API ID**: `withImageBefore`
 * - **Description**: `Paragraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSliceWithImageBefore = prismicT.SharedSliceVariation<"withImageBefore", Simplify<ParagraphSliceWithImageBeforePrimary>, never>;
/**
 * Primary content in Paragraph → Primary
 *
 */
interface ParagraphSliceWithImageAfterPrimary {
    /**
     * Content field in *Paragraph → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: paragraph.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Image field in *Paragraph → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: paragraph.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * With Image After variation for Paragraph Slice
 *
 * - **API ID**: `withImageAfter`
 * - **Description**: `Paragraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSliceWithImageAfter = prismicT.SharedSliceVariation<"withImageAfter", Simplify<ParagraphSliceWithImageAfterPrimary>, never>;
/**
 * Slice variation for *Paragraph*
 *
 */
type ParagraphSliceVariation = ParagraphSliceDefault | ParagraphSliceWithImageBefore | ParagraphSliceWithImageAfter;
/**
 * Paragraph Shared Slice
 *
 * - **API ID**: `paragraph`
 * - **Description**: `Paragraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSlice = prismicT.SharedSlice<"paragraph", ParagraphSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { NewsDocumentData, NewsDocumentDataRelatedNewsItem, NewsDocumentDataSlicesSlice, NewsDocument, AllDocumentTypes, MediaSliceDefaultPrimary, MediaSliceDefault, MediaSliceVideoPrimary, MediaSliceVideo, MediaSliceEmbeddedPrimary, MediaSliceEmbedded, MediaSliceAnotherNewsPrimary, MediaSliceAnotherNews, MediaSliceVariation, MediaSlice, ParagraphSliceDefaultPrimary, ParagraphSliceDefault, ParagraphSliceWithImageBeforePrimary, ParagraphSliceWithImageBefore, ParagraphSliceWithImageAfterPrimary, ParagraphSliceWithImageAfter, ParagraphSliceVariation, ParagraphSlice };
    }
}