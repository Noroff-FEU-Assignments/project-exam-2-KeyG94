import React from "react";
import AccomodationsTable from "../countries/AccomodationsTable";
import AddForm from "../countries/AddForm";
import CardTableEnquiries from "../countries/CardTableEnquiries";
import CardTableMessages from "../countries/CardTableMessages";

export default function Dashboard({ dashboard }) {
	// if admin return this
	switch (dashboard) {
		case "admin":
			return (
				<div className='bg-white min-h-screen w-full'>
					<header className='flex justify-around max-w-7xl'>
						<h1 className='font-bold text-2xl text-center'>Dashboard</h1>
						<span className='font-bold hidden sm:block'>holidaze</span>
					</header>
					<div className='flex justify-around flex-wrap overflow-auto '>
						<div className='my-5'>
							<h4 className='font-bold pb-5'>New Enquiries</h4>
							<CardTableEnquiries />
						</div>
						<div className='my-5'>
							<h4 className='font-bold pb-5'>New Messages</h4>
							<CardTableMessages />
						</div>
					</div>
				</div>
			);

		// if accomodations return this
		case "accomodations":
			return (
				<div className='bg-white min-h-screen w-full'>
					<header className='flex justify-around max-w-7xl mx-auto'>
						<h1 className='font-bold text-2xl text-center'>Dashboard</h1>
						<a className='font-bold hidden sm:block'>holidaze</a>
					</header>
					<div className='my-5 mx-auto max-w-7xl'>
						<h2 className='text-xl font-bold'>Accomodations</h2>
						<AccomodationsTable />
					</div>
				</div>
			);
		case "add":
			return (
				<div className='bg-white min-h-screen w-full'>
					<header>
						<header className='flex justify-around max-w-7xl mx-auto'>
							<h1 className='font-bold text-2xl text-center'>Dashboard</h1>
							<a className='font-bold hidden sm:block'>holidaze</a>
						</header>
					</header>
					<div className='my-5 mx-auto max-w-7xl'>
						<h2 className='text-xl font-bold ml-20'>Add new listing</h2>
						<AddForm />
					</div>
				</div>
			);

		case "edit":
			return (
				<div className='bg-white min-h-screen w-full'>
					<header>
						<header className='flex justify-around max-w-7xl mx-auto'>
							<h1 className='font-bold text-2xl text-center'>Dashboard</h1>
							<a className='font-bold hidden sm:block'>holidaze</a>
						</header>
					</header>
					<div className='my-5 mx-auto max-w-7xl'>
						<h2 className='text-xl font-bold ml-20'>Edit listing</h2>
						<AddForm editForm={true} />
					</div>
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
