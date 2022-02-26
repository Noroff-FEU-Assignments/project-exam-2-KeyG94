import React from "react";
import Head from "../../layout/Head";
import Image from "next/image";
import Link from "next/link";

// Change for a placeholder
import placeholder from "../../../public/placeholder.jpeg";

// Navigation elements
const navigation = [
	{name: "Dashboard", href="admin"},
	{name: "Accomodations", href="accomodations"},
	{name: "Add new", href="add"},
];

export default function DashboardAdm() {

	console.log(navigation)
	const toggleBar = () => {
		const clickTarget = document.querySelector("something");

		console.log(clickTarget);
	};

	return (
		<>
			<Head title='Dashboard' />
			<div className='sm:flex'>
				<div className='sm:hidden bg-grey something'>
					<div className='text-center border-b-[1px] border-lightBlack border-opacity-40 p-2 w-[90%] mx-auto'>
						<h3 className='text-center text-white font-bold'>holidaze</h3>
						<div
							className='w-28 mx-auto my-4 border-[1px] border-lightBlack rounded-full overflow-hidden'
							onClick={toggleBar}
						>
							<Image
								src={placeholder}
								layout='responsive'
								objectFit='cover'
								alt='profile picture'
							/>
						</div>
						<div>
							<h4 className='text-xl font-bold text-lightBlack'>Name Nameson</h4>
						</div>
						<button className='bg-black px-6 py-1 my-4 text-white'>Logout</button>
					</div>
					<div className='flex flex-col w-32 mx-auto mt-4'>
						{navigation.map((element) => {
							
							return (
								<Link href={element.href} passHref key={element.href}>
									<button className='bg-lightBlack text-white text-center p-2 my-3'>
										{element.name}
									</button>
								</Link>
							);
						})}
					</div>
				</div>

				<div className='hidden sm:flex min-h-screen bg-grey sm:max-w-1/6 '>
					<nav className=''>
						<div className='text-center border-b-[1px] border-lightBlack border-opacity-40 p-6 w-[90%] mx-auto'>
							<div className='w-32 mx-auto my-4 border-[1px] border-lightBlack rounded-full overflow-hidden'>
								<Image
									src={placeholder}
									layout='responsive'
									objectFit='cover'
									alt='profile picture'
								/>
							</div>
							<div>
								<h3 className='text-xl font-bold text-lightBlack'>Name Nameson</h3>
							</div>
							<button className='bg-black px-6 py-1 my-4 text-white'>Logout</button>
						</div>

						<div className='flex flex-col w-32 mx-auto mt-4'>
							{navigation.map((element) => {
								return (
									<Link href={element.href} passHref key={element.name}>
										<button className='bg-lightBlack hover:bg-white hover:text-black text-white text-center p-2 my-3'>
											{element.name}
										</button>
									</Link>
								);
							})}
						</div>
					</nav>
				</div>
				<div className='container bg-white min-h-screen w-5/6'>
					<header>
						<h1>Dashboard</h1>
						<span>Logo</span>
					</header>
					<main>Dasboard</main>
				</div>
			</div>
		</>
	);
}
