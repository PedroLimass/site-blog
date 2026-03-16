import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const router = useRouter();
  const isActive =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(rest.as as string);
  return (
    <Link
      href={href}
      className={cn(
        "text-action-sm transition-colors hover:text-blue-200",
        isActive ? "text-blue-500" : "text-gray-100"
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
