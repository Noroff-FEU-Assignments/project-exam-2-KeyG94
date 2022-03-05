import React from "react";
import Dashboard from "../../continents/Dashboard";
import AdminNav from "../../layout/AdminNav";
import Head from "../../layout/Head";

export default function EditPage() {
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
