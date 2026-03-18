import Image from "next/image";
import Link from "next/link";

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
};

export const PostCard = ({
  slug,
  title,
  description,
  image,
  date,
  author,
}: PostCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl overflow-hidden rounded-[12px] border-[1px] border-gray-400 bg-gray-600 transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      {/* Post Content */}
      <div className="overflow-hidden rounded-md p-2">
        {/* Imagem Container */}
        <div className="relative">
          {/* Date Container */}
          <div className="absolute top-0 right-0 rounded-bl-[10px] bg-gray-600 px-3 py-1 backdrop-blur-sm">
            <span className="text-body-xs text-gray-300">{date}</span>
          </div>
          <Image
            src={image}
            alt=""
            width={288}
            height={144}
            className="h-40 w-full rounded-[8px] object-cover object-center"
          />
        </div>

        {/* Post info */}
        <div className="my-4 space-y-4 px-2">
          <h2 className="text-heading-sm line-clamp-3 text-gray-100">
            {title}
          </h2>

          <p className="text-body-sm line-clamp-3 text-gray-300">
            {description}
          </p>
        </div>

        {/* Post footer */}
        <div className="flex items-center gap-3 border-t border-gray-400 py-4">
          <div className="relative h-5 w-5 overflow-hidden rounded-full border-[1px] border-blue-200 md:h-6 md:w-6">
            <Image
              src={author.avatar}
              alt=""
              fill
              className="rounded-md object-cover"
            />
          </div>
          <span className="text-body-sm text-gray-300">{author.name}</span>
        </div>
      </div>
    </Link>
  );
};
