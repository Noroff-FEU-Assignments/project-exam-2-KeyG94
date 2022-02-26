import Layout from "../../components/layout/Layout";
import Head from "../../components/layout/Head";
import SearchIcon from "../../components/icons/SearchIcon";
import { useState } from "react";
import Image from "next/image";
import placeholder from "../../public/image-blur-placeholder.png";

export default function index() {
  const [search, setSearch] = useState("");
  return (
    <Layout>
      <Head title="Results" />
      <div className="container">
        {/* //top section */}
        <div className="mx-auto my-4">
          <h1 className="text-4xl text-white font-semibold text-center">
            Results
          </h1>
          <div className="flex w-2/4 mx-auto bg-darkBlack text-white p-2">
            <SearchIcon />
            <input
              className="outline-none text-[20px] w-full bg-darkBlack"
              placeholder="Search"
              onChange={({ target }) => setSearch(target.value)}
              value={search}
            />
          </div>
        </div>
        {/* card section */}
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* map this  */}

          <div key="id" className="group relative">
            <div className="mt-4 flex justify-between text-white">
              <p>Name</p>
              <p>ID</p>
            </div>
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <Image
                src={placeholder}
                alt="placeholder"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <p className="text-white">Location</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
