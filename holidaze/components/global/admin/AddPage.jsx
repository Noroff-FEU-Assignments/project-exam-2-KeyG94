import Head from "../../layout/Head";
import AdminNav from "../../layout/AdminNav";
import Dashboard from "../../continents/Dashboard";

export default function AddPage() {
	return (
		<>
			<Head title='Add new' />
			<div className='sm:flex'>
				<AdminNav current='add new' />
				<Dashboard dashboard='edit' />
			</div>
		</>
	);
}
