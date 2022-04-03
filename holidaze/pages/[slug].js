import { useState } from "react";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { BASE_URL, HOTELS } from "../constants/baseUrl";
import Image from "next/image";
import axios from "axios";
import BookNow from "../components/countries/BookNow";
import placeholder from "../public/placeholder.jpeg";
// import Router from "next/router";

export const getStaticPaths = async () => {
	// in case there is an error in the API call
	// we'll send an empty array in as the prop
	const url = BASE_URL + HOTELS;
	let hotel = [];

	try {
		const response = await axios.get(url);
		// the log here will happen on the server, you can check the console in your editor
		if (response.statusText !== "OK") {
			console.log(`Status: ${response.status} \n Status text: ${response.statusText}`);
		}
		// the array is on the response.data.data property
		hotel = response.data.data;

		const paths = hotel.map(({ id }) => {
			const ID = id.toString();
			return {
				params: {
					slug: ID,
				},
			};
		});
		return {
			paths,
			fallback: false,
		};
	} catch (err) {
		console.log(err);
	}
};

export const getStaticProps = async ({ params }) => {
	//destructured context into params for shorter syntax
	// in case there is an error in the API call
	// we'll send an empty array in as the prop
	const url = BASE_URL + HOTELS;
	let hotel = [];
	try {
		const id = params.slug;
		const { data } = await axios.get(`${url}/${id}`);
		hotel = data.data.attributes;
		return {
			props: {
				hotel,
				id,
			},
		};
	} catch (err) {
		console.log(err);
	}
};

export default function Hotel({ hotel, id }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalProduct, setModalProduct] = useState(undefined);

	const name = hotel.hotel_name;
	const location = hotel.hotel_location;
	const description = hotel.hotel_description;
	const image = hotel.hotel_image;

	return (
		<Layout>
			<Head title={name} />
			<div className='container flex flex-col justify-center items-center min-h-screen'>
				{isModalOpen && (
					<BookNow
						product={modalProduct}
						closeModal={() => {
							setIsModalOpen(false);
							setModalProduct(undefined);
						}}
					/>
				)}
				<h2 className='text-white font-bold text-2xl py-4 text-center lg:text-left'>{name}</h2>
				<div className='lg:bg-silver w-full flex-wrap lg:flex'>
					<div className='flex-1 bg-white'>
						<Image
							src={image}
							placeholder='blur'
							blurDataURL={placeholder}
							height={2}
							width={3}
							layout='responsive'
							alt='placeholder'
							objectFit='cover'
							className='object-center hover:scale-105 transition'
						/>
					</div>
					<div className='flex-1 bg-darkBlack bg-opacity-95 shadow-2xl text-white lg:bg-opacity-0 lg:text-black lg:shadow-none'>
						<div className='lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:p-4 lg:min-h-[60%]'>
							<div className='lg:max-h-36 lg:overflow-scroll mb-2'>
								<h3 className='text-lg font-bold'>Details</h3>
								<p>{description}</p>
							</div>
							<div className='lg:max-h-36 lg:overflow-scroll'>
								<h3 className='text-lg font-bold'>Location</h3>
								<p>{location}</p>
							</div>
						</div>
						<div className='flex justify-center relative mx-auto  my-10 pb-10 lg:pb-0'>
							<button
								className='bg-orange text-white font-bold py-3 px-14 lg:absolute lg:right-12 lg:top-12'
								onClick={() => {
									setIsModalOpen(true);
									setModalProduct({ id, name, location, image });
								}}
							>
								Book
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
