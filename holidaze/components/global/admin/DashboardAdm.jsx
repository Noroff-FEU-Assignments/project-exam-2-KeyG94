import React, { useContext } from "react";
import AdminNav from "../../layout/AdminNav";
import Head from "../../layout/Head";
import Dashboard from "../../continents/Dashboard.jsx";
import AuthContext from "../../../context/AuthContext";
import Router from "next/router";

export default function DashboardAdm() {
  //get state of the authentication provider
  const [auth, setAuth] = useContext(AuthContext);

  if (auth) {
    return (
      <>
        <Head title="Dashboard" />
        <div className="sm:flex">
          <AdminNav current="dashboard" />
          <Dashboard dashboard="admin" />
        </div>
      </>
    );
  }

  if (!auth) {
    Router.push("login");
  }
}
