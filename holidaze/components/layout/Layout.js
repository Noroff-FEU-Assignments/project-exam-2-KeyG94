import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Asset 6.svg";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className="container">
      <nav className="flex pt-6 pb-6 justify-between">
        {/* Company log  */}
        <div className="w-1/3">
          <div className="w-32">
            <Image src={logo} layout="responsive" alt="holidaze logo" />
          </div>
        </div>

        <div className="w-1/3">
          <div className="flex justify-around bg-white w-32 pt-2 ">
            <Link href="/">Home</Link>
            <Link href="/results">Results</Link>
          </div>
        </div>

        {/* display hidden on small devices, this is in footer  */}
        <div className={styles.linksContainer}>
          <div className="flex justify-around w-36 pt-2">
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
