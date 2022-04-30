import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Asset 6.svg";
import styles from "./Nav.module.scss";
import AuthContext from "../../context/AuthContext";
import GKLoadingModal from "../global/utills/GKLoadingModal";

const Nav = () => {
  const [auth] = useContext(AuthContext);
  const [name, setName] = useState("Login");
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const navbar = document.querySelector(".navbar");

      if (scrolled) {
        navbar.classList.add("bg-darkBlack");
      } else {
        navbar.classList.remove("bg-darkBlack");
      }
    }
  });

  useEffect(() => {
    if (auth) {
      setName(auth.user.username);
    }
  });

  return (
    <nav
      className={`py-2 px-5 sticky top-0 z-50 transition-all duration-200 navbar ${
        scrolled && "bg-opacity-95"
      }`}
    >
      {/* Company log  */}
      <div className="container flex justify-between">
        <div className="w-2/3 sm:w-1/3">
          <div className="hover:cursor-pointer py-5 xs:py-1 w-36">
            <Link href="/" passHref>
              <a>
                <Image src={logo} layout="responsive" alt="holidaze logo" />
              </a>
            </Link>
          </div>
        </div>

        <div className="w-1/3">
          <div className={styles.navigationLinks}>
            <div className="flex flex-wrap xs:flex-nowrap justify-around sm:w-1/3 pt-2 ">
              <Link href="/">Home</Link>
              <Link href="/results">Results</Link>
            </div>
          </div>
        </div>

        {/* display hidden on small devices, this is in footer  */}
        <div className={styles.linksContainer}>
          <div className="hidden sm:flex sm:justify-around sm:w-36 sm:pt-2">
            <Link href="/contact">Contact</Link>
            <Link href="/admin">{name}</Link>
          </div>
        </div>
        {/* End of display hidden */}
      </div>
    </nav>
  );
};

export default Nav;
