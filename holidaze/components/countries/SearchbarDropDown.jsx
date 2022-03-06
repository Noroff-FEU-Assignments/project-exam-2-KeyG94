import { useState } from "react";
import BookNow from "./BookNow.jsx";

export default function SearchbarDropDown({ data, search }) {
	const [show, setShow] = useState(false);
	const [modalId, setModalId] = useState(null);
	console.log(show);

	data.map(({ attributes }) => {
		if (attributes.hotel_id === modalId) {
			console.log(attributes.hotel_name);
			return <BookNow show={show} data={attributes.hotel_name} />;
		}
	});

	// Remove the modal from inside the .map
	// Have another state to store the index or the data from the card
	// Only display in the modal the data from the selected card

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
							<div key={index}>
								<div className='flex justify-between p-3 border-b-2 hover:bg-lightBlack hover:cursor-pointer'>
									<span>{hotel_name}</span>
									<span>{hotel_location}</span>
									<button
										onClick={() => {
											setShow(true);
											setModalId(hotel_id);
										}}
									>
										Book now
									</button>
								</div>

								{/* Modal */}
								{/* <BookNow show={show} data={(hotel_id, hotel_name, hotel_location)} /> */}
							</div>
						);
					}
				})
			}
		</ul>
	);
}
