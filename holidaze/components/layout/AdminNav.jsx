import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthContext from "../../context/AuthContext";
import Router from "next/router";

// Change for a placeholder
import placeholder from "../../public/placeholder.jpeg";

// Navigation elements
export default function AdminNav({ current, showSideBar, setSideBar }) {
  const [auth, setAuth] = useContext(AuthContext);
  const user = auth.user.username;

  const navigation = [
    { name: "Dashboard", href: "admin", current: false },
    { name: "Accomodations", href: "accomodations", current: false },
    { name: "Add new", href: "add", current: false },
  ];

  //  for every i in navigation
  for (let i in navigation) {
    // if prop.current string is equal to navigation.name
    if (current === navigation[i].name.toLowerCase()) {
      // set current to true
      navigation[i].current = true;
    } else {
      // set current to false
      navigation[i].current = false;
    }
  }

  return (
    <div className="bg-grey md:max-w-max">
      {/* Menu bar for small devices, standard show */}
      {showSideBar && (
        <div className="flex md:hidden justify-between px-5 bg-orange py-5">
          <div className="content-center my-auto text-darkBlack">
            <Link href={"/"} passHref>
              <h2 className="text-lg font-bold cursor-pointer">holidaze</h2>
            </Link>
          </div>
          <div
            className="w-16 rounded-full overflow-hidden"
            onClick={setSideBar}
          >
            <Image
              src={placeholder}
              layout="responsive"
              objectFit="cover"
              alt="profile picture"
            />
          </div>
        </div>
      )}

      {/* mobile menu, hidden from small screens +  */}
      {!showSideBar && (
        <div className="md:hidden bg-orange">
          <div className="text-center border-b-[1px] border-lightBlack border-opacity-40 p-2 w-[90%] mx-auto">
            <Link href={"/"} passHref>
              <h3 className="text-center text-white font-bold cursor-pointer">
                holidaze
              </h3>
            </Link>
            <div
              className="w-28 mx-auto my-4 border-[1px] border-lightBlack rounded-full overflow-hidden"
              onClick={setSideBar}
            >
              <Image
                src={placeholder}
                layout="responsive"
                objectFit="cover"
                alt="profile picture"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-lightBlack">{user}</h4>
            </div>
            <Link href="/" passHref>
              <button
                className="bg-black hover:bg-lightBlack px-6 py-1 my-4 text-white"
                onClick={() => {
                  setAuth(null);
                  Router.push("/");
                }}
              >
                Logout
              </button>
            </Link>
          </div>
          <div className="flex flex-col w-32 mx-auto mt-4">
            {navigation.map(({ name, href, current }) => {
              return (
                <Link href={href} passHref key={href}>
                  <button
                    className={
                      !current
                        ? "bg-lightBlack text-white hover:bg-white hover:text-black text-center p-2 my-3"
                        : "bg-white text-lightBlack text-center p-2 my-3"
                    }
                  >
                    {name}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      )}
      {/* Larger screens  */}
      {!showSideBar && (
        <nav
          className={`hidden md:block md:fixed transition-all ease-in duration-300 bg-orange min-h-screen md:min-w-1/6 md:w-56 ${
            showSideBar ? "md:-left-[100%]" : "left-0"
          }`}
        >
          <div className="text-center border-b-[1px] border-lightBlack border-opacity-40 p-6 w-[90%] mx-auto">
            <div
              className="w-32 mx-auto my-4 border-[1px] hover:border-2 border-lightBlack rounded-full overflow-hidden"
              onClick={setSideBar}
            >
              <Image
                src={placeholder}
                layout="responsive"
                objectFit="cover"
                alt="profile picture"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-lightBlack">{user}</h3>
            </div>
            <Link href="/" passHref>
              <button
                className="bg-black hover:bg-lightBlack px-6 py-1 my-4 text-white"
                onClick={() => {
                  setAuth(null);
                  Router.push("/");
                }}
              >
                Logout
              </button>
            </Link>
          </div>

          <div className="flex flex-col w-32 mx-auto mt-4">
            {navigation.map(({ name, href, current }) => {
              return (
                <Link href={href} passHref key={name}>
                  <button
                    className={
                      !current
                        ? "bg-lightBlack text-white hover:bg-white hover:text-black text-center p-2 my-3"
                        : "bg-white text-lightBlack text-center p-2 my-3"
                    }
                  >
                    {name}
                  </button>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
