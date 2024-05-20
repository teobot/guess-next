// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// fs and path
import fs from "fs";
import path from "path";

import LevelDataClass from "@/common/interfaces/LevelDataClass";

type Data = LevelDataClass[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const levels = fs.readdirSync(path.join(process.cwd(), "levels"));

  let levelData = levels.map((level) => {
    const levelData = fs.readFileSync(
      path.join(process.cwd(), "levels", level, "data.json"),
      "utf-8"
    );
    return JSON.parse(levelData);
  });

  res.status(200).json(levelData);
}
