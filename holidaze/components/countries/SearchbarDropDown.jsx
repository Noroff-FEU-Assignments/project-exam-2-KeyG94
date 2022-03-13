import { useState } from "react";
import BookNow from "./BookNow.jsx";

export default function SearchbarDropDown({ data, search }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalProduct, setModalProduct] = useState(undefined);

	return (
		<ul className='absolute w-full -ml-2 mt-12 text-left bg-darkBlack '>
			{isModalOpen && (
				<BookNow
					product={modalProduct}
					closeModal={() => {
						setIsModalOpen(false);
						setModalProduct(undefined);
					}}
				/>
			)}
			{
				/* loop through results  */
				data.map(({ attributes }, index) => {
					const { hotel_name, hotel_description, hotel_location, hotel_id, hotel_image } =
						attributes;
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
											setIsModalOpen(true);
											setModalProduct({ hotel_id, hotel_name, hotel_location, hotel_image });
										}}
									>
										Book now
									</button>
								</div>
							</div>
						);
					}
				})
			}
		</ul>
	);
}
