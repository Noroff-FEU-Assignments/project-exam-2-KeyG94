import React from "react";
import AdminNav from "../../layout/AdminNav";
import Head from "../../layout/Head";

export default function DashboardAdm() {
  return (
    <>
      <Head title="Dashboard" />
      <AdminNav current="dashboard" />
    </>
  );
}
