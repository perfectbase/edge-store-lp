import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex h-14 w-full items-center justify-between">
      <div className="ml-16">
        <Link href="/">EDGE STORE</Link>
      </div>
    </header>
  );
};

export default Header;
