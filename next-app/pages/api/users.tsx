import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
  id: number
}

const users = (req: NextApiRequest, res: NextApiResponse<Array<Data>>) => {
  res.send([
    {
      name: "Imron",
      id: 1,
    },
    {
      name: "nur",
      id: 2,
    },
  ])
}
export default users
