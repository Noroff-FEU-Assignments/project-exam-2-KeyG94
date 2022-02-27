import React from "react";
import Image from "next/image";
import Link from "next/link";

// Change for a placeholder
import placeholder from "../../public/placeholder.jpeg";

// Navigation elements
export default function AdminNav({ current }) {
	const navigation = [
		{ name: "Dashboard", href: "admin", current: false },
		{ name: "Accomodations", href: "accomodations", current: false },
		{ name: "Add new", href: "add", current: false },
	];

	//  for every i in navigation
	for (let i in navigation) {
		// if prop.current string is equal to navigation.name
		if (current === navigation[i].name.toLowerCase()) {
			// set current to true
			navigation[i].current = true;
		} else {
			// set current to false
			navigation[i].current = false;
		}
	}

	// hide menubar when click
	const closeMenu = () => {
		const x = document.getElementById("mobile-menu");
		const y = document.getElementById("mobile-menu-std");

		if ((x.style.display = "hidden")) {
			x.style.display = "none";
			y.style.display = "flex";
		} else {
			x.style.display = "flex";
			y.style.display = "none";
		}
	};

	// open navigation bar
	const openMenu = () => {
		const x = document.getElementById("mobile-menu");
		const y = document.getElementById("mobile-menu-std");

		if ((y.style.display = "hidden")) {
			y.style.display = "none";
			x.style.display = "block";
		} else {
			y.style.display = "flex";
			x.style.display = "none";
		}
	};

	return (
		<>
			{/* mobile menu, hidden from small screens +  */}
			<div className='sm:hidden bg-grey' id='mobile-menu'>
				<div className='text-center border-b-[1px] border-lightBlack border-opacity-40 p-2 w-[90%] mx-auto'>
					<h3 className='text-center text-white font-bold'>holidaze</h3>
					<div
						className='w-28 mx-auto my-4 border-[1px] border-lightBlack rounded-full overflow-hidden'
						onClick={closeMenu}
					>
						<Image src={placeholder} layout='responsive' objectFit='cover' alt='profile picture' />
					</div>
					<div>
						<h4 className='text-xl font-bold text-lightBlack'>Name Nameson</h4>
					</div>
					<button className='bg-black hover:bg-lightBlack px-6 py-1 my-4 text-white'>Logout</button>
				</div>
				<div className='flex flex-col w-32 mx-auto mt-4'>
					{navigation.map(({ name, href, current }) => {
						return (
							<Link href={href} passHref key={href}>
								<button
									className={
										!current
											? "bg-lightBlack text-white hover:bg-white hover:text-black text-center p-2 my-3"
											: "bg-white text-lightBlack text-center p-2 my-3"
									}
								>
									{name}
								</button>
							</Link>
						);
					})}
				</div>
			</div>

			{/* Menu bar for small devices, standard show */}
			<div className='hidden sm:hidden justify-between px-8 bg-white' id='mobile-menu-std'>
				<div className='content-center p-4 mt-6 text-darkBlack'>
					<h2 className='text-lg font-bold'>holidaze</h2>
				</div>
				<div
					className='w-16  my-4 border-[1px] border-lightBlack rounded-full overflow-hidden'
					onClick={openMenu}
				>
					<Image src={placeholder} layout='responsive' objectFit='cover' alt='profile picture' />
				</div>
			</div>

			<div className='hidden sm:flex min-h-screen bg-grey sm:max-w-1/6 '>
				<nav className=''>
					<div className='text-center border-b-[1px] border-lightBlack border-opacity-40 p-6 w-[90%] mx-auto'>
						<div className='w-32 mx-auto my-4 border-[1px] hover:border-2 border-lightBlack rounded-full overflow-hidden'>
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
						<button className='bg-black hover:bg-lightBlack px-6 py-1 my-4 text-white'>
							Logout
						</button>
					</div>

					<div className='flex flex-col w-32 mx-auto mt-4'>
						{navigation.map(({ name, href, current }) => {
							return (
								<Link href={href} passHref key={name}>
									<button
										className={
											!current
												? "bg-lightBlack text-white hover:bg-white hover:text-black text-center p-2 my-3"
												: "bg-white text-lightBlack text-center p-2 my-3"
										}
									>
										{name}
									</button>
								</Link>
							);
						})}
					</div>
				</nav>
			</div>
		</>
	);
}