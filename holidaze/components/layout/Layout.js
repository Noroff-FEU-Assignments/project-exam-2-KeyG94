import Link from "next/link";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className="container">
      <nav className="flex pt-4 pb-4 justify-between">
        {/* Company log  */}
        <div className="w-1/3">HOLIDAZE</div>

        <div className="text-center w-1/3">
          <div className="flex justify-around bg-white w-32 ">
            <Link href="/">Home</Link>
            <Link href="/results">Results</Link>
          </div>
        </div>

        {/* display hidden on small devices, this is in footer  */}
        <div className={styles.linksContainer}>
          <div className="flex justify-around w-36">
            <Link href="/contact">Contact</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
        {/* End of display hidden */}
      </nav>

      <div className="container">{children}</div>
    </div>
  );
}
