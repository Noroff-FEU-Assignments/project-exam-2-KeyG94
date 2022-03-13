import Image from "next/image";
import placeholder from "../../public/placeholder.jpeg";
import { Formik } from "formik";
import * as yup from "yup";

// yup imported from yup using npm install yup
const reviewSchema = yup.object({
	// object keys to refer for validation
	hotel: yup.string().min(3).required("Hotel name is required"),
	location: yup.string().min(3).required("Location is required"),
	id: yup.string().min(10).required("A message is required"),
});

export default function BookNow({ product, closeModal }) {
	return (
		<div
			id='booking-modal'
			className='fixed z-10 left-0 top-20 p-5 w-80 bg-silver bg-opacity-95 text-black flex justify-center'
		>
			<span
				onClick={closeModal}
				className='text-red font-bold absolute right-5 hover:cursor-pointer border-2 px-2'
			>
				Close
			</span>
			<Formik
				// initial values that is used instead of state. Formik handles state, yup uses these references for validation
				initialValues={{
					// These values are whatever is passed in the param
					id: `${product.hotel_id || product.id}`,
					hotel: `${product.hotel_name || product.name}`,
					location: `${product.hotel_location || product.location}`,
					name: "",
					email: "",
				}}
				// validation schema is run, if return is true it will handle onSubmit
				validationSchema={reviewSchema}
				// this is ran if validation is successful

				//onSubmit prop runs a function that takes in (values, actions). I've destructured setSubmitting and resetForm ref: https://formik.org/docs/api/formik
				onSubmit={(values, { setSubmitting, resetForm }) => {
					// this function takes in Formik childrens values.

					// Im using a setTimeout for the sake of simulating a submit as if it was submitting to an api
					// TODO: submit the form with a POST request to the correct path at the api:
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
						resetForm({
							// These values are whatever is passed in the param
							id: `${product.hotel_id || product.id}`,
							hotel: `${product.hotel_name || product.name}`,
							location: `${product.hotel_location || product.location}`,
							name: "",
							email: "",
						});
					}, 400);
				}}
			>
				{({ values, handleChange, handleSubmit, handleBlur, isSubmitting, errors, touched }) => (
					<div className='grid w-56'>
						<form onSubmit={handleSubmit}>
							<fieldset>
								<h2 className=' text-xl font-bold text-center'>Enquiry</h2>
								<span>
									<b>Hotel Name:</b> {product.hotel_name || product.name}
								</span>
								<Image
									src={product.hotel_image || product.image}
									placeholder='blur'
									blurDataURL={placeholder}
									layout='responsive'
									width={1}
									height={1}
									objectFit='cover'
									alt='product picture from api'
								/>
								<div className='flex justify-between'>
									<span>
										<b>ID:</b> {product.hotel_id || product.id}
									</span>
									<span>
										<b>Location:</b> {product.hotel_location || product.location}
									</span>
								</div>
								<div className='grid mt-5'>
									<div>
										<span className='text-red opacity-0'>
											{errors.name && touched.name && errors.name}
										</span>
										<div>
											<label htmlFor='name'>
												Name: <span className='text-orange'>*</span>
											</label>
											<input
												type='text'
												id='name'
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.name}
												className='my-2 py-2 px-1 outline-orange w-full'
												placeholder='name'
											/>
										</div>
									</div>
									<div>
										<span className='text-red opacity-0'>
											{errors.email && touched.email && errors.email}
										</span>
										<div>
											<label htmlFor='email'>
												Email: <span className='text-orange'>*</span>
											</label>
											<input
												type='text'
												id='email'
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.email}
												className='my-2 py-2 px-1 outline-orange w-full'
												placeholder='email'
											/>
										</div>
									</div>
									<button
										type='submit'
										className={
											!isSubmitting
												? "bg-orange py-3 my-5 text-white"
												: "bg-grey py-3 my-5 text-white"
										}
										disabled={isSubmitting}
									>
										{isSubmitting ? "Booking..." : "Send Booking"}
									</button>
								</div>
							</fieldset>
						</form>
					</div>
				)}
			</Formik>
		</div>
	);
}
