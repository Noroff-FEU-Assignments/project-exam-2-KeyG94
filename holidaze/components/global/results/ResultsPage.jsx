import SearchIcon from "../../icons/SearchIcon";
import { useState } from "react";
import ResultCard from "../../countries/ResultCard.jsx";

export default function ResultsPage({ data }) {
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [hotels, setHotels] = useState([]);

	// Search results
	const [foundProduct, setFoundProduct] = useState("");

	if (hotels.length === 0) {
		setIsLoading(false);
		setHotels(data);
	}

	// const filter = () => {
	// 	const keyword = search;
	// 	console.log(search);

	// 	if (keyword !== "") {
	// 		const results = hotels.map(({ attributes }) => {
	// 			const name = attributes.hotel_name;
	// 			return name;
	// 		});
	// 		// const filtered = results.filter((result) => {
	// 		// 	return result.name.toLowerCase().startsWith(keyword.toLowerCase());
	// 	// 	});
	// 	// 	setFoundProduct(filtered);
	// 	// } else {
	// 	// 	setFoundProduct(hotels);
	// 	// }
	// };

	// console.log(foundProduct);

	return (
		<div className='container min-h-screen'>
			{/* //top section */}
			<div className='mx-auto my-4'>
				<h1 className='text-4xl text-white font-semibold text-center'>Results</h1>
				<div className='flex w-2/4 mx-auto bg-darkBlack text-white p-2'>
					<SearchIcon />
					<input
						className='outline-none text-[20px] w-full bg-darkBlack'
						placeholder='Search'
						onChange={({ target }) => {
							setSearch(target.value);
							filter();
						}}
						value={search}
					/>
				</div>
			</div>
			{/* card section */}
			<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
				{isLoading && <ResultCard />}
				{!isLoading &&
					hotels.map(({ attributes }) => {
						const name = attributes.hotel_name;
						const id = attributes.hotel_id;
						const location = attributes.hotel_location;
						const imageURL = attributes.hotel_image;

						return <ResultCard name={name} id={id} location={location} image={imageURL} key={id} />;
					})}
			</div>
		</div>
	);
}
