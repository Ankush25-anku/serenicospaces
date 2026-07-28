"use client";

import { useEffect, useState } from "react";

import "./instagram.css";

export default function InstagramPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())

      .then((data) => {
        setPosts(data.data || []);
      });
  }, []);

  return (
    <section className="instagram-page">
      <div className="instagram-header">
        <h1>Serenico Spaces</h1>

        <p>Follow our latest interior inspirations</p>
      </div>

      <div className="instagram-grid">
        {posts.map((item) => (
          <a
            key={item.id}
            href={item.permalink}
            target="_blank"
            className="instagram-card"
          >
            {item.media_type === "VIDEO" ? (
              <video
                src={item.media_url}
                poster={item.thumbnail_url}
                muted
                autoPlay
                loop
              />
            ) : (
              <img src={item.media_url} alt="Instagram Post" />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
