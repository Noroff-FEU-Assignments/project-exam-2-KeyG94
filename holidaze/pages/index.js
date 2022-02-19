import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
  console.log(search);

  return (
    <Layout>
      <Head title="home" />
      <div className="grid place-items-center h-screen">
        <div className="flex flex-col text-center text-white">
          <h1 className="text-5xl font-bold ">Find your reservation today!</h1>
          <div className="flex py-4 px-2 my-4 bg-lightBlack mx-auto w-2/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="outline-none text-[20px] bg-lightBlack"
              placeholder="Search"
              onChange={(e) => handleChange(e)}
              value={search}
            />
          </div>
          <p>Some Long descriptive text or catch phrace</p>
        </div>
      </div>
    </Layout>
  );
}
