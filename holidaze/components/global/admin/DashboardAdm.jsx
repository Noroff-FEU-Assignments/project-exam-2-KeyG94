import React from "react";
import Head from "../../layout/Head";
import Image from "next/image";

// Change for a placeholder
import placeholder from "../../../public/placeholder.jpeg";

export default function DashboardAdm() {
	return (
		<>
			<Head title='Dashboard' />
			<div className='flex'>
				<div className='min-h-screen bg-grey  w-1/6'>
					<nav className=''>
						<div className='text-center border-b-[1px] border-lightBlack border-opacity-40 p-6 w-[90%] mx-auto'>
							<div className='w-32 mx-auto my-4 bg-white rounded-full overflow-hidden'>
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
						<div></div>
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
