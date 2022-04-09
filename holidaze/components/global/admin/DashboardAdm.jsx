import React, { useContext, useEffect } from "react";
import AdminNav from "../../layout/AdminNav";
import Head from "../../layout/Head";
import Dashboard from "../../continents/Dashboard.jsx";
import AuthContext from "../../../context/AuthContext";
import Router from "next/router";

export default function DashboardAdm() {
	const [auth] = useContext(AuthContext);

	useEffect(() => {
		if (!auth) Router.push("/login");
	}, []);

	// Handle auth checking while loading
	if (!auth) {
		return <div />;
	}

	if (auth) {
		return (
			<>
				<Head title='Dashboard' />
				<div className='sm:flex'>
					<AdminNav current='dashboard' />
					<Dashboard dashboard='admin' />
				</div>
			</>
		);
	}
}
