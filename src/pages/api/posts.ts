// Mock API for sidebar data — returns menu, apps and footer data
import type { NextApiRequest, NextApiResponse } from "next";

export interface BooCardProps {
  avatar: string;
  name: string;
  time: string;
  badges: string[];
  countBadge?: number;
  awardCount?: number;
  text: string;
  likes: number;
  notifications: number;
}

const mock: BooCardProps[] = [
  {
    avatar: "/avatar.jpg",
    name: "Phoebe",
    time: "18d",
    badges: ["INFJ", "Aquarius"],
    countBadge: 21,
    awardCount: 1,
    text: "A healthy relationship requires both adventure and peace. 💕",
    likes: 291,
    notifications: 19,
  },
  {
    avatar: "/avatar2.jpg",
    name: "Monica",
    time: "5d",
    badges: ["ENFP", "Gemini"],
    countBadge: 15,
    awardCount: 2,
    text: "Cooking is an art, but all art requires knowing something about the techniques and materials.",
    likes: 150,
    notifications: 10,
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // small delay to simulate network (optional)
  setTimeout(() => res.status(200).json(mock), 120);
}
