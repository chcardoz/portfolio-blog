import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight font-mate">
        Read more
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-8 lg:gap-x-10 gap-y-8 md:gap-y-10 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
