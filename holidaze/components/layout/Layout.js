import Link from "next/link";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <footer className="backdrop-blur-sm backdrop-brightness-[.25] text-[#A1A1A1] p-8">
        <div className="container flex flex-col sm:flex sm:flex-row sm:justify-between ">
          <span>© 2022 Glenn Key. All Rights Reserved.</span>
          <span>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}
