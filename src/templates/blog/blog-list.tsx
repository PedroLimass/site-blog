import { Search } from "@/components/search";
import { PostCard } from "@/components/post-card";
import { useRouter } from "next/router";
import { PostGridCard } from "@/components/post-grid-card/post-grid-card";
import { Post } from "contentlayer/generated";
import { Inbox } from "lucide-react";

export type BlogListProps = {
  posts: Post[];
};

export function BlogList({ posts }: BlogListProps) {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const postsList = query
    ? posts.filter((post) =>
        post.title.toLocaleLowerCase()?.includes(query.toLocaleLowerCase())
      )
    : posts;

  const hasPosts = postsList?.length > 0;

  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <header className="">
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="text-body-tag w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-cyan-100 md:text-left">
              BLOG
            </span>

            {/* Titulo */}
            <h1 className="text-heading-lg md:text-heading-xl max-w-2xl text-start text-balance text-gray-100 md:text-left">
              {pageTitle}
            </h1>
          </div>
          {/* Search */}
          <Search />
        </div>
      </header>

      {/* Listagem de posts */}
      {hasPosts && (
        <PostGridCard>
          {postsList.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              description={post.description}
              date={new Date(post.date).toLocaleDateString("pt-BR")}
              slug={post.slug}
              image={post.image}
              author={{
                avatar: post.author?.avatar ?? "/customer-01.png",
                name: post.author?.name ?? "Autor desconhecido",
              }}
            />
          ))}
        </PostGridCard>
      )}

      {!hasPosts && (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 rounded-lg border-2 border-dashed border-gray-300 p-8 md:p-12">
            <Inbox className="h-12 w-12 text-cyan-100" />

            <p className="text-center text-gray-100">Nenhum post encontrado.</p>
          </div>
        </div>
      )}
    </div>
  );
}
