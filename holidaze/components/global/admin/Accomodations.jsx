import React, { useContext, useEffect } from "react";
import AuthContext from "../../../context/AuthContext";
import Router from "next/router";
import Head from "../../layout/Head";
import AdminNav from "../../layout/AdminNav";
import Dashboard from "../../continents/Dashboard";

export default function AccomodationsPage() {
	//get state of the authentication provider
	const [auth, setAuth] = useContext(AuthContext);

	useEffect(() => {
		if (!auth) Router.push("/login");
	}, [auth]);

	if (!auth) {
		return <div />;
	}
	return (
		<>
			<Head title='Accomodations' />
			<div className='sm:flex'>
				<AdminNav current='accomodations' />
				<Dashboard dashboard='accomodations' />
			</div>
		</>
	);
}
