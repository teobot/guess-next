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
  const playlists = fs.readdirSync(
    path.join(process.cwd(), "data", "playlists")
  );

  let playlistReturn = playlists.map((playlist) => {
    const playlistData = fs.readFileSync(
      path.join(process.cwd(), "data", "playlists", playlist),
      "utf-8"
    );

    const playlistJson = JSON.parse(playlistData) as {
      id: string;
      title: string;
      levels: string[];
    };

    return {
      id: playlist.replace(".json", ""),
      title: playlistJson.title,
      levels: playlistJson.levels.map((level: any) => {
        const file = fs.readFileSync(
          process.cwd() + `/data/levels/${level}.json`,
          "utf8"
        );

        const data = JSON.parse(file);

        return {
          id: level.replace(".json", ""),
          title: data.title,
        };
      }),
    };
  });

  res.status(200).json(playlistReturn);
}
