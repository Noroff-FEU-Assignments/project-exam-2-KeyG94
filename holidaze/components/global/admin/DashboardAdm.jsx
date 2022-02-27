import React from "react";
import AdminNav from "../../layout/AdminNav";
import Head from "../../layout/Head";
import Dashboard from "../../continents/Dashboard";

export default function DashboardAdm() {
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
