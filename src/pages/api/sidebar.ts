// Mock API for sidebar data — returns menu, apps and footer data
import type { NextApiRequest, NextApiResponse } from "next";

const mock = {
  menu: [
    { id: "home", label: "Home", href: "/", icon: "home", active: true },
    { id: "match", label: "Match", href: "/match", icon: "heart" },
    { id: "messages", label: "Messages", href: "/messages", icon: "chat" },
    { id: "profile", label: "Profile", href: "/profile", icon: "user" },
    {
      id: "database",
      label: "Personality Database",
      href: "/database",
      icon: "list",
    },
    {
      id: "tests",
      label: "Personality Tests",
      href: "/tests",
      icon: "clipboard",
    },
    { id: "resources", label: "Resources", href: "/resources", icon: "stack" },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // small delay to simulate network (optional)
  setTimeout(() => res.status(200).json(mock), 120);
}
