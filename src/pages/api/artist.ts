import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
    name: string
  }
  
  export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
        const result = netlifyGraph.ArtistQuery({query: "Metallica"});
        result.data.json()
        res.status(200)

  }
  