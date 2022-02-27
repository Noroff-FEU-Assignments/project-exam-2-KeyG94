import React from "react";
import Head from "../../layout/Head";
import AdminNav from "../../layout/AdminNav";
import Dashboard from "../../continents/Dashboard";

export default function AccomodationsPage() {
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
