import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image src="/logo.svg" width={116} height={32} alt="Logo" />
      </Link>
    </>
  );
};
