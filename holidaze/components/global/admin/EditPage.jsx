import { useEffect, useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import Router from "next/router";
import React from "react";
import Dashboard from "../../continents/Dashboard";
import AdminNav from "../../layout/AdminNav";
import Head from "../../layout/Head";

export default function EditPage() {
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
			<Head title='Edit' />
			<div className='sm:flex'>
				<AdminNav />
				<Dashboard dashboard='edit' />
			</div>
		</>
	);
}
