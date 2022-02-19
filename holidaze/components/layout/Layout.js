import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <div className="container">
      <Nav />
      <div className="body-container">{children}</div>
      <footer className="">Footer</footer>
    </div>
  );
}
