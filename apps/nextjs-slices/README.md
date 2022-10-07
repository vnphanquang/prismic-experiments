# Prismic Experiment - Slice Machine in NextJS

Stack: NextJS, Typescript, Tailwind

Pages:

- Home
- News landing (listing all news)
- News details (for each news)

CustomTypes:

- News

Slices:

- Paragraph, with variants:
  - Just text (rich text) (default)
  - Text with image that comes before (left)
  - Text with image that comes after (right)

- Media, with variants:
  - Image (default)
  - Link to another news
  - Video (link to internal document in Prismic media gallery)
  - Embedded content (youtube link, for example)

Features Used:

- Custom Types
- Slice Machine
- Slice Custom Template
- Typescript codegen
- Prismic's `graphQuery`

See [package.json](./package.json) for necessary scripts.

Future improvements:

- [ ] Get tailwind to work with slice machine preview
- [ ] Fetch deep nested fields for `Media` slice that links to another news
