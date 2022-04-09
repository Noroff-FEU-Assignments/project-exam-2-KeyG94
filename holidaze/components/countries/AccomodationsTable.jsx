import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL, HOTELS } from "../../constants/baseUrl.js";
import AuthContext from "../../context/AuthContext";
import Editmodal from "./EditModal.jsx";

export default function AccomodationsTable() {
	const [auth] = useContext(AuthContext);
	const [hotels, setHotels] = useState(false);
	const [modal, setModal] = useState(false);
	const [modalProduct, setModalProduct] = useState({});

	useEffect(() => {
		if (auth) {
			// Appears unused but is used by getMessages
			const CONFIG = {
				method: "GET",
				url: BASE_URL + HOTELS,
				headers: {
					Authorization: `Bearer ${auth.jwt}`,
				},
			};
		}

		const getMessages = async () => {
			try {
				const res = await axios(CONFIG);
				setHotels(res.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		getMessages();
	}, []);

	const handleDelete = async (id) => {
		const config = {
			method: "DELETE",
			url: BASE_URL + HOTELS + "/" + id,
			headers: {
				Authorization: `Bearer ${auth.jwt}`,
			},
		};
		try {
			await axios(config);
			alert("Hotel was succesfully removed");
		} catch (error) {
			console.log(error);
		}
	};

	const handleClickOutsideModal = ({ target }) => {
		if (!target.parentElement.matches(".modal") && modal) {
			setModal(false);
			setModalProduct(null);
		}
	};

	return (
		<div onClick={handleClickOutsideModal} className='flex flex-col'>
			<div className='sm:-mx-6 lg:-mx-8'>
				{modal && (
					<Editmodal
						auth={auth.jwt}
						product={modalProduct}
						closeModal={() => {
							setModal(false);
							setModalProduct(null);
						}}
					/>
				)}
				<div className='py-2 align-middle inline-block w-full sm:px-6 lg:px-8'>
					<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
						<table className='bg-orange w-full divide-y divide-gray-200'>
							<thead>
								<tr>
									<th
										scope='col'
										className='px-6 py-1 text-left text-tiny font-medium text-gray-500 uppercase tracking-wider'
									>
										ID:
									</th>
									<th
										scope='col'
										className='px-6 py-1 text-left text-tiny font-medium text-gray-500 uppercase tracking-wider'
									>
										Title
									</th>

									<th
										scope='col'
										className='hidden md:block px-6 py-1 text-left text-tiny font-medium text-gray-500 uppercase tracking-wider'
									>
										Location
									</th>
								</tr>
							</thead>
							<tbody className='bg-white divide-y divide-gray-200'>
								{!hotels ? (
									<div>Loading..</div>
								) : (
									hotels.map(({ attributes, id }) => {
										const HOTEL = attributes.hotel_name;
										const LOCATION = attributes.hotel_location;
										const IMAGE = attributes.hotel_image;
										const DESCRIPTION = attributes.hotel_description;
										const ID = id;

										return (
											<tr key={ID} className='hover:bg-orange transition duration-200'>
												<td className='px-6 py-2 whitespace-nowrap'>
													<div className='flex items-center'>
														<div className='ml-4'>
															<div className=' text-tiny font-medium text-gray-900'>{ID}</div>
														</div>
													</div>
												</td>
												<td className='px-6 py-2 whitespace-nowrap'>
													<div className='text-tiny text-gray-900'>{HOTEL}</div>
												</td>
												<td className='hidden md:block px-6 py-4 whitespace-nowrap'>
													<div className='text-tiny text-gray-900'>{LOCATION}</div>
												</td>
												<td className='px-6 py-2 whitespace-nowrap text-right text-tiny font-medium'>
													<span
														onClick={() => {
															setModalProduct({
																HOTEL,
																LOCATION,
																IMAGE,
																DESCRIPTION,
																ID,
															});
															setModal(true);
														}}
														className='text-indigo-600 hover:text-silver cursor-pointer'
													>
														Edit
													</span>
												</td>
												<td className='px-4 py-2 whitespace-nowrap text-right text-tiny font-medium hover:cursor-pointer'>
													<span
														className='text-red hover:text-silver'
														onClick={() => {
															// TODO, better ui
															const result = prompt("Are you sure you want to delete this?");
															if (result != null) {
																handleDelete(ID);
																setHotels(hotels.filter((hotel) => hotel.id != ID));
															}
														}}
													>
														Delete
													</span>
												</td>
											</tr>
										);
									})
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
