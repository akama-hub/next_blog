import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div className="text-2xl font-extrabold">
        <Link href="/">Blog</Link>
      </div>
      <div>
        <nav className="text-sm foot-medium">
          <Link href="/articles/new" className="bg-orange-300 px-3  py-3 rounded-md">
            記事を書く
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;