import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hook/use-share";

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string | undefined;
  const post = allPosts.find(
    (post) => post.slug?.toLowerCase() === slug?.toLowerCase()
  )!;
  const postImageSrc = post?.image || "/assets/primeiro-post.png";
  const authorAvatarSrc = post?.author?.avatar || "/customer-01.png";
  const authorName = post?.author?.name || "Autor desconhecido";
  const publishedDate = new Date(post?.date).toLocaleDateString("pt-BR");

  const postUrl = `https://site.set/blog/${slug}`;

  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description,
  });

  return (
    <main className="mt-32 text-gray-100">
      <div className="container space-y-12 px-4 md:px-8">
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
          <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-600">
            <figure className="relative aspect-16/10 w-full overflow-hidden rounded-lg">
              <Image
                src={postImageSrc}
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
                  src={authorAvatarSrc}
                  alt={authorName}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{authorName}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em {""}
                    <time dateTime={post?.date ?? ""}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert mt-12 max-w-none px-4 md:px-6 lg:px-12">
              <Markdown content={post?.body.raw ?? ""} />
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700">
              <h2 className="text-heading-xs mb-4 text-gray-100">
                Compartilhar
              </h2>

              <div className="space-y-3">
                {shareButtons.map((provider) => (
                  <Button
                    key={provider.provider}
                    onClick={() => provider.action()}
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    {provider.icon}
                    {provider.name}
                  </Button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
