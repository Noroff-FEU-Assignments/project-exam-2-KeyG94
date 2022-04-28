import React from "react";
import AccomodationsTable from "../countries/AccomodationsTable";
import AddForm from "../countries/AddForm";
import CardTableEnquiries from "../countries/CardTableEnquiries";
import CardTableMessages from "../countries/CardTableMessages";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import Link from "next/link";

export default function Dashboard({ dashboard, setSideBar, showSideBar }) {
  // if admin return this
  switch (dashboard) {
    case "admin":
      return (
        <div className="bg-white min-h-screen flex-1 pb-10">
          <header className="flex justify-center">
            <div
              onClick={setSideBar}
              className={
                !showSideBar
                  ? "hidden"
                  : "hidden md:block p-5 min-h-screen fixed left-0"
              }
            >
              <FaIcons.FaBars />
            </div>
            <div
              onClick={setSideBar}
              className={
                !showSideBar
                  ? "hidden md:block p-5 min-h-screen fixed left-0"
                  : "hidden"
              }
            >
              <GrIcons.GrClose />
            </div>
            <h1 className="font-bold text-2xl text-center">Dashboard</h1>
            <Link href={"/"} passHref>
              <span className="font-bold hidden md:block fixed left-20 cursor-pointer">
                holidaze
              </span>
            </Link>
          </header>
          <div
            className={`flex justify-center flex-wrap overflow-scroll ${
              !showSideBar && "md:ml-60"
            }`}
          >
            <div className="sm:my-5 sm:mx-5">
              <h4 className="font-bold text-center my-4">New Enquiries</h4>
              <CardTableEnquiries />
            </div>
            <div className="sm:my-5 mx-2 sm:mx-5">
              <h4 className="font-bold text-center my-4">New Messages</h4>
              <CardTableMessages />
            </div>
          </div>
        </div>
      );

    // if accomodations return this
    case "accomodations":
      return (
        <div className="bg-white min-h-screen flex-1 pb-10">
          <header className="flex justify-center">
            <div
              onClick={setSideBar}
              className={
                !showSideBar
                  ? "hidden"
                  : "hidden md:block p-5 min-h-screen fixed left-0"
              }
            >
              <FaIcons.FaBars />
            </div>
            <div
              onClick={setSideBar}
              className={
                !showSideBar
                  ? "hidden md:block p-5 min-h-screen fixed left-0"
                  : "hidden"
              }
            >
              <GrIcons.GrClose />
            </div>
            <h1 className="font-bold text-2xl text-center">Dashboard</h1>
            <Link href={"/"} passHref>
              <span className="font-bold hidden md:block fixed left-20 cursor-pointer">
                holidaze
              </span>
            </Link>
          </header>
          <div className={`my-5 ${!showSideBar && "md:ml-60"}`}>
            <h2 className="text-xl font-bold text-center my-5">
              Accomodations
            </h2>
            <AccomodationsTable />
          </div>
        </div>
      );
    case "add":
      return (
        <div className="bg-white min-h-screen flex-1 pb-10">
          <header className="flex justify-center">
            <div
              onClick={setSideBar}
              className={
                !showSideBar
                  ? "hidden"
                  : "hidden md:block p-5 min-h-screen fixed left-0"
              }
            >
              <FaIcons.FaBars />
            </div>
            <div
              onClick={setSideBar}
              className={
                !showSideBar
                  ? "hidden md:block p-5 min-h-screen fixed left-0"
                  : "hidden"
              }
            >
              <GrIcons.GrClose />
            </div>
            <h1 className="font-bold text-2xl text-center">Dashboard</h1>
            <Link href={"/"} passHref>
              <span className="font-bold hidden md:block fixed left-20 cursor-pointer">
                holidaze
              </span>
            </Link>
          </header>
          <div className={`my-5 ${!showSideBar && "md:ml-60"}`}>
            <h2 className="text-xl font-bold text-center">Add new listing</h2>
            <AddForm />
          </div>
        </div>
      );

    // if something else, fallback with an error
    default:
      return (
        <div className="bg-white min-h-screen w-full">
          <div
            onClick={setSideBar}
            className={
              !showSideBar ? "hidden" : "hidden md:block p-5 min-h-screen fixed"
            }
          >
            <FaIcons.FaBars />
          </div>
          <div
            onClick={setSideBar}
            className={
              !showSideBar
                ? "hidden md:block p-5 min-h-screen fixed z-10"
                : "hidden"
            }
          >
            <GrIcons.GrClose />
          </div>
          <header>
            <h1>Looks like theres an error, please contact support</h1>
            <Link href={"/"} passHref>
              <span className="font-bold hidden md:block fixed left-20 cursor-pointer">
                holidaze
              </span>
            </Link>
          </header>
          <main>Dashboard</main>
        </div>
      );
  }
}
