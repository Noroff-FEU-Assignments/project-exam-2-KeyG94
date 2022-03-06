export default function SearchbarDropDown({ data, search }) {
	return (
		<ul className='absolute w-full -ml-2 mt-12 text-left bg-darkBlack '>
			{
				/* loop through results  */
				data.map(({ attributes }, index) => {
					const { hotel_name, hotel_description, hotel_location, hotel_id } = attributes;
					if (
						hotel_name.toLowerCase().includes(search.toLowerCase()) ||
						hotel_location.toLowerCase().includes(search.toLowerCase())
					) {
						return (
							<div className='flex justify-between p-3 border-b-2' key={index}>
								<span>{hotel_name}</span>
								<span>{hotel_location}</span>
								<span>Book now</span>
							</div>
						);
					}
				})
			}
		</ul>
	);
}
