import CustomBadge from "./custom-badge";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  status: "idea" | "draft" | "review" | "final";
  author: Author;
};

export function PostHeader({ title, coverImage, date, author, status }: Props) {
  return (
    <>
      <div className="mb-10 flex flex-col items-center justify-center">
        <PostTitle>{title}</PostTitle>
        <CustomBadge type={status} />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="font-cutive tracking-tighter mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
