import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PostShare } from "./components/post-share";

export type PostPageProps = {
  post: Post;
};

export const PostPage = ({ post }: PostPageProps) => {
  const publishedDate = new Date(post?.date).toLocaleDateString("pt-BR");
  const postUrl = `https://site.set/blog/${post.slug}`;

  return (
    <main className="py-20 text-gray-100">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-action-sm text-blue-200">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
          <article className="overflow-hidden rounded-lg border-[1px] border-gray-400 bg-gray-600">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                className="object-cover"
              />
            </figure>

            <header className="mt-8 p-4 pb-0 md:mt-12 md:p-6 lg:p-12">
              <h1 className="text-heading-lg md:text-heading-xl lg:text-heading-xl mb-8 text-balance">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar}
                  alt={post?.title}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em {""}
                    <time dateTime={post?.date}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert mt-12 max-w-none px-4 md:px-6 lg:px-12">
              <Markdown content={post?.body.raw} />
            </div>
          </article>

          <PostShare
            url={postUrl}
            title={post?.title}
            description={post?.description}
          />
        </div>
      </div>
    </main>
  );
};
