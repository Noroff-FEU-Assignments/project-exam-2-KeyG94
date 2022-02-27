import React from "react";

export default function Dashboard(props) {
	const dashboard = props.dashboard;

	// return different dashboards based on props

	// if admin return this
	switch (dashboard) {
		case "admin":
			// do this
			console.log("this is the admin page");
			return (
				<div className='bg-white min-h-screen w-full'>
					<header>
						<h1>Dashboard Admin</h1>
						<span>Logo</span>
					</header>
					<main>Dasboard</main>
				</div>
			);

		// if accomodations return this
		case "accomodations":
			// do this
			console.log("this is the accomodations");
			return (
				<div className='bg-white min-h-screen w-full'>
					<header>
						<h1>Dashboard Accomodations</h1>
						<span>Logo</span>
					</header>
					<main>Dasboard</main>
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
