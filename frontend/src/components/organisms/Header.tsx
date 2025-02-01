import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 style={{ cursor: "pointer" }}>
        <Link href="/dashboard">Header</Link>
      </h1>
      hello
    </header>
  );
};

export default Header;
