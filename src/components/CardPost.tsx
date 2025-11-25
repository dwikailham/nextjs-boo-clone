import React from "react";

interface BooCardProps {
  avatar: string;
  name: string;
  time: string;
  badges: string[];
  countBadge?: number;
  awardCount?: number;
  text: React.ReactNode;
  likes: number;
  notifications: number;
}

export default function BooCard({
  avatar,
  name,
  time,
  badges,
  countBadge,
  awardCount = 0,
  text,
  likes,
  notifications,
}: BooCardProps) {
  return (
    <div className="bg-black text-white p-4 rounded-2xl shadow-2xl border border-zinc-800 max-w-xl">
      {/* Header */}
      <div className="flex items-start gap-3">
        <img
          src={avatar}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">{name}</h2>
            <span className="text-gray-400 text-xs">{time}</span>
          </div>

          {/* Badges */}
          <div className="mt-1 flex gap-2 flex-wrap">
            {badges.map((b, i) => (
              <span
                key={i}
                className="px-2 py-1 text-black text-xs bg-teal-300/95 border border-zinc-600 rounded-full"
              >
                {b}
              </span>
            ))}

            {countBadge && (
              <span className="px-2 py-1 text-xs bg-teal-700/30 border border-teal-600 rounded-full flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                {countBadge}
              </span>
            )}
          </div>

          {/* Award */}
          {awardCount > 0 && (
            <div className="mt-2 flex items-center gap-1 text-xs text-gray-300">
              🏅 <span>{awardCount} Award</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mt-3 text-sm leading-relaxed">{text}</div>

      {/* Footer reactions */}
      <div className="mt-4 flex items-center gap-5 text-gray-300 text-sm">
        {/* Like */}
        <button className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
          {likes}
        </button>

        {/* Notification */}
        <button className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {notifications}
        </button>

        {/* Share */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>

        {/* Favorite */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.047 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z"
            />
          </svg>
        </button>

        <button className="ml-auto text-xs">Reply</button>
      </div>
    </div>
  );
}
