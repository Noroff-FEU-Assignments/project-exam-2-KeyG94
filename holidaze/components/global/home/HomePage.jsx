import React from "react";
import Link from "next/link";
import SearchIcon from "../../icons/SearchIcon";
import SearchbarDropDown from "../../countries/SearchbarDropDown.jsx";
import styles from "./Home.module.scss";
import { useState } from "react";

export default function HomePage({ api }) {
	const [search, setSearch] = useState("");
	const [data, setData] = useState(api);

	return (
		<div className='flex justify-center items-center min-h-screen'>
			<div className='flex flex-col text-center text-white mx-auto'>
				<div className=' w-3/4 mx-auto'>
					<h1 className='text-3xl sm:text-5xl font-bold'>Find your reservation today!</h1>
					<div className='w-3/4 mx-auto'>
						<div className='flex relative py-4 px-2 my-4 bg-darkBlack'>
							<SearchIcon />
							<input
								className='outline-none text-[20px] w-full bg-darkBlack'
								placeholder='Search'
								onChange={({ target }) => setSearch(target.value)}
								value={search}
							/>

							{!search ? "" : <SearchbarDropDown data={data} search={search} />}
						</div>
						<p className={styles.descriptiveP}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						{/* add 2 buttons here */}
						<div className={styles.linksContainer}>
							<div className='flex-wrap flex justify-around mt-8'>
								<Link href='/contact'>Contact</Link>
								<Link href='/login'>Login</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
