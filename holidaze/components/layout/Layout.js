import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <div className="container relative">
        <Nav />
        <div className="body-container">{children}</div>
      </div>
      <footer className=" backdrop-blur-sm backdrop-brightness-[.25] text-[#A1A1A1] p-8">
        <div className="container flex justify-between flex-wrap ">
          <span>© 2022 Glenn Key. All Rights Reserved.</span>
          <span>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
