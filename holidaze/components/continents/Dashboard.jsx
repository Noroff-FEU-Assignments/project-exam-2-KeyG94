import React from "react";
import AccomodationsTable from "../countries/AccomodationsTable";
import CardTable from "../countries/CardTable";

export default function Dashboard(props) {
	const dashboard = props.dashboard;

	// return different dashboards based on props

	// if admin return this
	switch (dashboard) {
		case "admin":
			// do this
			console.log("this is the admin page");
			return (
				<div className='bg-white min-h-screen w-full '>
					<header className='flex justify-around max-w-7xl'>
						<h1 className='font-bold text-2xl text-center'>Dashboard</h1>
						<span className='font-bold hidden sm:block'>holidaze</span>
					</header>
					<div className='flex justify-around flex-wrap overflow-auto max-w-7xl'>
						<div className='my-5'>
							<h4 className='font-bold'>New Enquiries</h4>
							<CardTable type='enquiries' />
						</div>
						<div className='my-5'>
							<h4 className='font-bold'>New Messages</h4>
							<CardTable type='messages' />
						</div>
					</div>
				</div>
			);

		// if accomodations return this
		case "accomodations":
			// do this
			console.log("this is the accomodations");
			return (
				<div className='bg-white min-h-screen w-full'>
					<header className='flex justify-around max-w-7xl'>
						<h1 className='font-bold text-2xl text-center'>Dashboard</h1>
						<span className='font-bold hidden sm:block'>holidaze</span>
					</header>
					<h2 className='text-xl font-bold'>Accomodations</h2>
					<div>
						<AccomodationsTable />
					</div>
				</div>
			);

		// if add return this
		case "add":
			// do this
			console.log("this is the add new");
			return (
				<div className='bg-white min-h-screen w-full'>
					<header>
						<h1>Dashboard Add</h1>
						<span>Logo</span>
					</header>
					<main>Dasboard</main>
				</div>
			);

		// if something else, fallback with an error
		default:
			console.log("something wrong");
			return (
				<div className='bg-white min-h-screen w-full'>
					<header>
						<h1>Looks like theres an error, please contact support</h1>
						<span>Logo</span>
					</header>
					<main>Dasboard</main>
				</div>
			);
	}
}
