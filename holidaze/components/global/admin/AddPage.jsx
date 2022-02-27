import React from "react";
import Head from "../../layout/Head";
import AdminNav from "../../layout/AdminNav";

export default function AddPage() {
	return (
		<>
			<Head title='Add new' />
			<AdminNav current='add new' />
		</>
	);
}
