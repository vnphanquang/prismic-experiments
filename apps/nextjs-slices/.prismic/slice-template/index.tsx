import React from 'react';

export type TemplateSliceProps = {
  // replace prismicT.SharedSlice with associated generated type
  // import type { GettingHereSlice } from '.prismic.types.generated'
  // ex: GettingHereSlice;
  slice: import('@prismicio/types').SharedSlice,

  // additional props defined for slice
  // must be passed from SliceZone
  // @ref: https://github.com/prismicio/slice-machine/tree/master/packages/next-slicezone#slicezone
}

export const TemplateSliceComponent: React.FC<TemplateSliceProps> = ({ slice }) => (
  <section>
    <p> {slice.variation} </p>
    <pre> {JSON.stringify(slice.primary, null, 2)} </pre>
    <p> {slice.items} </p>
  </section>
);

export default TemplateSliceComponent;
