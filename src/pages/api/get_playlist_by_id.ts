// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// fs and path
import { promises as fs } from "fs";

import LevelDataClass from "@/common/interfaces/LevelDataClass";

type Data = LevelDataClass;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  const file = await fs.readFile(
    process.cwd() + `/data/playlists/${id}.json`,
    "utf8"
  );

  const data = JSON.parse(file);

  res.status(200).json(data);
}
