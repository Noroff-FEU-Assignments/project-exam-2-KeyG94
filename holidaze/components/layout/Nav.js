import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Asset 6.svg";
import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className="flex pt-6 pb-6 justify-between">
      {/* Company log  */}
      <div className="w-2/3 sm:w-1/3">
        <div className="w-36 hover:cursor-pointer">
          <Link href="/" passHref>
            <Image src={logo} layout="responsive" alt="holidaze logo" />
          </Link>
        </div>
      </div>

      <div className="w-1/3">
        <div className={styles.navigationLinks}>
          <div className="flex justify-around w-36 pt-2">
            <Link href="/">Home</Link>
            <Link href="/results">Results</Link>
          </div>
        </div>
      </div>

      {/* display hidden on small devices, this is in footer  */}
      <div className={styles.linksContainer}>
        <div className="hidden sm:flex justify-around w-36 pt-2">
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
      {/* End of display hidden */}
    </nav>
  );
}
