import React, { useContext, useEffect, useState } from "react";
import AdminNav from "../../layout/AdminNav";
import Head from "../../layout/Head";
import Dashboard from "../../continents/Dashboard.jsx";
import AuthContext from "../../../context/AuthContext";
import Router from "next/router";

export default function DashboardAdm() {
  const [auth] = useContext(AuthContext);
  const [sideBar, toggleSideBar] = useState(false);

  const setSideBar = () => {
    toggleSideBar(!sideBar);
  };
  useEffect(() => {
    if (!auth) Router.push("/login");
  });

  // Handle auth checking while loading
  if (!auth) {
    return <div />;
  }

  if (auth) {
    return (
      <>
        <Head title="Dashboard" />
        <div className="md:flex">
          <AdminNav
            current="dashboard"
            showSideBar={sideBar}
            setSideBar={setSideBar}
          />
          <Dashboard
            dashboard="admin"
            setSideBar={setSideBar}
            showSideBar={sideBar}
          />
        </div>
      </>
    );
  }
}
