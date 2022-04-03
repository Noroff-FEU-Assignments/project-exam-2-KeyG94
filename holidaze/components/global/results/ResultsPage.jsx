import SearchIcon from "../../icons/SearchIcon";
import { useState } from "react";
import ResultCard from "../../countries/ResultCard.jsx";

export default function ResultsPage({ data }) {
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [hotels, setHotels] = useState([]);
	const [foundHotels, setFoundHotels] = useState([]);

	console.log(hotels);

	if (hotels.length === 0) {
		// Set hotels from the prop if hotels.length is empty
		setHotels(
			data.map(({ attributes, id }) => {
				return { id, attributes };
			})
		);
		// Set found hotels empty so that it always displays the hotels when search is empty
		setFoundHotels(
			data.map(({ attributes, id }) => {
				return { id, attributes };
			})
		);
		// Set the loading to false so we can display our hotels
		setIsLoading(false);
	}

	// The search result
	const filter = ({ target }) => {
		const { value } = target;

		if (value !== "") {
			const results = hotels.filter(({ attributes, id }) => {
				// Find name, location or id matches
				return (
					attributes.hotel_name.toLowerCase().includes(value.toLowerCase()) ||
					attributes.hotel_location.toLowerCase().includes(value.toLowerCase()) ||
					id.toString().startsWith(value.toLowerCase())
				);
				// Use the toLowerCase() method to make it case-insensitive
			});
			setFoundHotels(results);
		} else {
			setFoundHotels(hotels);
			// If the text field is empty, show all hotels
		}
		setSearch(value);
	};

	return (
		<div className='container min-h-screen'>
			{/* Top section */}
			<div className='mx-auto my-4'>
				<h1 className='text-4xl text-white font-semibold text-center'>Results</h1>
				<div className='flex w-2/4 mx-auto bg-darkBlack text-white p-2'>
					<SearchIcon />
					<input
						className='outline-none text-[20px] w-full bg-darkBlack'
						type='search'
						onChange={filter}
						value={search}
						placeholder='Search'
					/>
				</div>
			</div>
			{/* Card section */}
			<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
				{isLoading && <ResultCard />}

				{!isLoading && foundHotels && foundHotels.length > 0 ? (
					foundHotels.map(({ attributes, id }) => {
						const name = attributes.hotel_name;
						const location = attributes.hotel_location;
						const imageURL = attributes.hotel_image;

						return <ResultCard name={name} id={id} location={location} image={imageURL} key={id} />;
					})
				) : (
					<h1 className='text-white text-xl'>No matching results found</h1>
				)}
			</div>
		</div>
	);
}
