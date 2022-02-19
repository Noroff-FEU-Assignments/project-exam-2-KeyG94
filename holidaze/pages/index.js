import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import { useState } from "react";
import SearchIcon from "../components/SearchIcon";
import SearchbarDropDown from "../components/SearchbarDropDown";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <Layout>
      <Head title="home" />
      <div className="grid place-items-center h-screen">
        <div className="flex flex-col text-center text-white">
          <h1 className="text-5xl font-bold">Find your reservation today!</h1>
          <div className="flex relative py-4 px-2 my-4 bg-lightBlack mx-auto w-2/3">
            <SearchIcon />
            <input
              className="outline-none text-[20px] bg-lightBlack"
              placeholder="Search"
              onChange={(e) => handleChange(e)}
              value={search}
            />
            {/* add prop from data from api  */}
            {!search ? "" : <SearchbarDropDown />}
          </div>
          <p>Some Long descriptive text or catch phrace</p>
        </div>
      </div>
    </Layout>
  );
}
