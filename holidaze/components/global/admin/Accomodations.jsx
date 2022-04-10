import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import Router from "next/router";
import Head from "../../layout/Head";
import AdminNav from "../../layout/AdminNav";
import Dashboard from "../../continents/Dashboard";

export default function AccomodationsPage() {
	const [auth] = useContext(AuthContext);
	const [sideBar, toggleSideBar] = useState(false);

	const setSideBar = () => {
		toggleSideBar(!sideBar);
	};

	useEffect(() => {
		if (!auth) Router.push("/login");
	}, [auth]);

	if (!auth) {
		return <div />;
	}
	return (
		<>
			<Head title='Accomodations' />
			<div className='md:flex'>
				<AdminNav current='accomodations' showSideBar={sideBar} setSideBar={setSideBar} />
				<Dashboard dashboard='accomodations' setSideBar={setSideBar} showSideBar={sideBar} />
			</div>
		</>
	);
}
