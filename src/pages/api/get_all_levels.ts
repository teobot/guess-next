// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// fs and path
import fs from "fs";
import path from "path";

type Data = {
  id: string;
  title: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const levels = fs.readdirSync(path.join(process.cwd(), "data", "levels"));

  let levelData = levels.map((level) => {
    const levelData = fs.readFileSync(
      path.join(process.cwd(), "data", "levels", level),
      "utf-8"
    );
    const levelDataJson = JSON.parse(levelData);
    return {
      id: level.replace(".json", ""),
      title: levelDataJson.title,
    };
  });
  
  res.status(200).json(levelData);
}
