import react from "react";
import Link from "next/link";

function PostPreview({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="post_card">
        <h2>{post.attributes.title}</h2>
        <p>{post.attributes.description}</p>
      </div>
    </Link>
  );
}

export default PostPreview;
