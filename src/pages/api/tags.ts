// Mock API for sidebar data — returns menu, apps and footer data
import type { NextApiRequest, NextApiResponse } from "next";

const mock = [
  { name: "#music", views: 1200 },
  { name: "#gaming", views: 1200 },
  { name: "#art", views: 1200 },
  { name: "#technology", views: 1200 },
  { name: "#science", views: 1200 },
  { name: "#travel", views: 1200 },
  { name: "#food", views: 1200 },
  { name: "#fitness", views: 1200 },
  { name: "#photography", views: 1200 },
  { name: "#fashion", views: 1200 },
  { name: "#education", views: 1200 },
  { name: "#health", views: 1200 },
  { name: "#sports", views: 1200 },
  { name: "#movies", views: 1200 },
  { name: "#books", views: 1200 },
  { name: "#history", views: 1200 },
  { name: "#nature", views: 1200 },
  { name: "#diy", views: 1200 },
  { name: "#gaming", views: 1200 },
  { name: "#comics", views: 1200 },
  { name: "#memes", views: 1200 },
  { name: "#outdoors", views: 1200 },
  { name: "#outdoors", views: 1200 },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // small delay to simulate network (optional)
  setTimeout(() => res.status(200).json(mock), 120);
}
