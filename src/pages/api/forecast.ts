// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { ok: boolean; [k: string]: any }>
) {
  try {
    const { params, interval } = req.query
    const d = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/${interval}/${params}?apikey=${process.env.ACCU_WX_API_KEY}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'cross-site',
        },
      }
    ).then((res) => res.json())

    res.status(200).json({ ok: true, data: d })
  } catch (e) {
    res.status(500).json({ ok: false, error: 'Something went wrong' })
  }
}
