import type { NextApiRequest, NextApiResponse } from "next";

import db from "./db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  setTimeout(() => {
    res.status(200).json(db.users);
  }, 1000);
}
