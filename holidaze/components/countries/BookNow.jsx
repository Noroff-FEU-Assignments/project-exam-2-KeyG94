import { Formik } from "formik";
import Image from "next/image";
import placeholder from "../../public/placeholder.jpeg";

export default function BookNow({ product, closeModal }) {
	console.log(product);
	console.log(closeModal);

	return (
		<div
			id='booking-modal'
			className='fixed left-0 top-1/4 p-5 w-80 bg-silver bg-opacity-95 text-black flex justify-center'
		>
			<span
				onClick={closeModal}
				className='text-red font-bold absolute right-5 hover:cursor-pointer border-2 px-2'
			>
				Close
			</span>
			<Formik>
				<div className='grid w-56'>
					<h2 className=' text-xl font-bold text-center'>Enquiry</h2>
					<span>
						<b>Hotel Name:</b> {product.hotel_name}
					</span>
					<Image
						src={product.hotel_image ? product.hotel_image : placeholder}
						layout='responsive'
						width={350}
						height={350}
						objectFit='cover'
						alt='product picture from api'
					/>
					<div className='flex justify-between'>
						<span>
							<b>ID:</b> {product.hotel_id}
						</span>
						<span>
							<b>Location:</b> {product.hotel_location}
						</span>
					</div>
					<button className='bg-orange py-3 my-5'>Send Booking</button>
				</div>
			</Formik>
		</div>
	);
}
