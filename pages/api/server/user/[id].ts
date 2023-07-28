import type { NextApiRequest, NextApiResponse } from "next";

import db from "../db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .json(db.users.find((user) => user.id === Number(req.query.id)));
}
