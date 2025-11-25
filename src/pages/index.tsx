import { Layout } from "@/components";
import { useEffect, useState } from "react";
import { CardPost, Universes } from "@/components";
import { BooCardProps } from "@/pages/api/posts";

export default function Home() {
  /** States */
  const [posts, setPosts] = useState<Array<BooCardProps>>([]);

  /** Side Effects */
  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((d) => setPosts(d))
      .catch(() => setPosts([]));
  }, []);

  return (
    <Layout>
      <div className="flex gap-2">
        <Universes />

        <div className="flex flex-col gap-2">
          {posts.map((post, index) => (
            <CardPost
              key={index}
              avatar={post.avatar}
              name={post.name}
              time={post.time}
              badges={post.badges}
              countBadge={post.countBadge}
              awardCount={post.awardCount}
              likes={post.likes}
              notifications={post.notifications}
              text={
                <>
                  {post.text.split(" ").map((word, i) =>
                    ["healthy", "adventure", "peace"].includes(
                      word.replace(/[^a-zA-Z]/g, "")
                    ) ? (
                      <span key={i} className="text-cyan-400">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </>
              }
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
