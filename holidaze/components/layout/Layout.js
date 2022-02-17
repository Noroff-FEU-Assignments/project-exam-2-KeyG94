import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/results">Results</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}
