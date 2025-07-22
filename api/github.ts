// api/github.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { username, type = "user" } = req.query;

  let url = "";
  switch (type) {
    case "repos":
      url = `https://api.github.com/users/${username}/repos?per_page=6&page=1&sort=updated_at&direction=desc`;
      break;
    default:
      url = `https://api.github.com/users/${username}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  const data = await response.json();
  res.status(200).json(data);
}
