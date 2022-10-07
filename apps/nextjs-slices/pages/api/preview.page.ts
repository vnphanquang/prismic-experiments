import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'
import { createClient } from '../../prismicio'
import type { NextApiRequest, NextApiResponse } from 'next';

async function preview(req: NextApiRequest, res: NextApiResponse) {
  const client = createClient({ req });

  await setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client });
}

export default preview;
