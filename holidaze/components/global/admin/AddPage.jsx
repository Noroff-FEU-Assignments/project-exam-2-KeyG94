import { useEffect, useContext, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import Router from "next/router";
import Head from "../../layout/Head";
import AdminNav from "../../layout/AdminNav";
import Dashboard from "../../continents/Dashboard";

export default function AddPage() {
	//get state of the authentication provider
	const [auth] = useContext(AuthContext);
	const [sideBar, toggleSideBar] = useState(false);

	const setSideBar = () => {
		toggleSideBar(!sideBar);
	};

	useEffect(() => {
		if (!auth) Router.push("/login");
	}, []);

	if (!auth) {
		return <div />;
	}
	return (
		<>
			<Head title='Add new' />
			<div className='md:flex'>
				<AdminNav current='add new' showSideBar={sideBar} setSideBar={setSideBar} />
				<Dashboard dashboard='add' setSideBar={setSideBar} showSideBar={sideBar} />
			</div>
		</>
	);
}
