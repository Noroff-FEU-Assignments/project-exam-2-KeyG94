import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Router from "next/router";

// Change for a placeholder
import placeholder from "../../public/placeholder.jpeg";

// Navigation elements
export default function AdminNav({ current }) {
	const [auth, setAuth] = useContext(AuthContext);
	const user = auth.user.username;

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

	const popDownMenu = document.getElementById("mobile-menu");
	const mobileMenu = document.getElementById("mobile-menu-std");

	// hide menubar when click
	const closeMenu = () => {
		if (mobileMenu.classList.contains("hidden")) {
			mobileMenu.classList.remove("hidden");
			popDownMenu.classList.add("hidden");
		}
	};

	// open navigation bar
	const openMenu = () => {
		if (popDownMenu.classList.contains("hidden")) {
			popDownMenu.classList.remove("hidden");
			mobileMenu.classList.add("hidden");
		}
	};

	return (
		<>
			{/* Menu bar for small devices, standard show */}
			<div className='sm:hidden flex justify-between px-5 bg-silver py-5' id='mobile-menu-std'>
				<div className='content-center my-auto text-darkBlack'>
					<h2 className='text-lg font-bold'>holidaze</h2>
				</div>
				<div className='w-16 rounded-full overflow-hidden' onClick={openMenu}>
					<Image src={placeholder} layout='responsive' objectFit='cover' alt='profile picture' />
				</div>
			</div>

			{/* mobile menu, hidden from small screens +  */}
			<div className='hidden sm:hidden bg-grey' id='mobile-menu'>
				<div className='text-center border-b-[1px] border-lightBlack border-opacity-40 p-2 w-[90%] mx-auto'>
					<h3 className='text-center text-white font-bold'>holidaze</h3>
					<div
						className='w-28 mx-auto my-4 border-[1px] border-lightBlack rounded-full overflow-hidden'
						onClick={closeMenu}
					>
						<Image src={placeholder} layout='responsive' objectFit='cover' alt='profile picture' />
					</div>
					<div>
						<h4 className='text-xl font-bold text-lightBlack'>{user}</h4>
					</div>
					<Link href='/index' passHref>
						<button className='bg-black hover:bg-lightBlack px-6 py-1 my-4 text-white'>
							Logout
						</button>
					</Link>
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
							<h3 className='text-xl font-bold text-lightBlack'>{user}</h3>
						</div>
						<Link href='/' passHref>
							<button
								className='bg-black hover:bg-lightBlack px-6 py-1 my-4 text-white'
								onClick={() => {
									setAuth(null);
									Router.push("/");
								}}
							>
								Logout
							</button>
						</Link>
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
