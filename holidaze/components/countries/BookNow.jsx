import Image from "next/image";
import { Formik, Form } from "formik";
import * as yup from "yup";
import axios from "axios";
import { BASE_URL, ENQUIRE } from "../../constants/baseUrl";

// yup imported from yup using npm install yup
const reviewSchema = yup.object({
	// object keys to refer for validation
	enquiry_hotel: yup.string().min(2).required("Hotel name is required"),
	enquiry_location: yup.string().min(2).required("Location is required"),
	enquiry_id: yup.string().min(1).required("A message is required"),
	enquiry_name: yup.string().min(3).required("Name is required"),
	enquiry_email: yup.string().min(3).required("Email is required"),
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
					enquiry_id: `${product.hotel_id || product.id}`,
					enquiry_hotel: `${product.hotel_name || product.name}`,
					enquiry_location: `${product.hotel_location || product.location}`,
					enquiry_name: "",
					enquiry_email: "",
				}}
				// validation schema is run, if return is true it will handle onSubmit
				validationSchema={reviewSchema}
				// this is ran if validation is successful

				//onSubmit prop runs a function that takes in (values, actions). I've destructured setSubmitting and resetForm ref: https://formik.org/docs/api/formik
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					// this function takes in Formik childrens values.
					const data = JSON.stringify({
						data: {
							hotel: parseInt(values.enquiry_id),
							enquiry_hotel: values.enquiry_hotel,
							enquiry_location: values.enquiry_location,
							enquiry_name: values.enquiry_name,
							enquiry_email: values.enquiry_email,
						},
					});

					const CONFIG = {
						method: "POST",
						url: BASE_URL + ENQUIRE,
						data,
						headers: {
							Accept: "*/*",
							"Content-Type": "application/json",
						},
					};

					try {
						const response = await axios(CONFIG);
						console.log(response);
						if (response.status !== 200) {
							alert(response.statusText);
						}
					} catch (error) {
						console.log(error);
					} finally {
						setSubmitting(false);
						resetForm({
							// These values are whatever is passed in the param
							enquiry_id: `${product.hotel_id || product.id}`,
							enquiry_hotel: `${product.hotel_name || product.name}`,
							enquiry_location: `${product.hotel_location || product.location}`,
							enquiry_name: "",
							enquiry_email: "",
						});
						// Todo: Better ux confirming success
						alert("Your booking has been recieved!");
					}
				}}
			>
				{({ values, handleChange, handleSubmit, handleBlur, isSubmitting, errors, touched }) => {
					return (
						<div className='grid'>
							<Form onSubmit={handleSubmit} method='POST'>
								<h2 className=' text-lg font-bold text-center'>Enquiry</h2>
								<span>
									<b>Hotel Name:</b> {values.enquiry_hotel}
								</span>

								<Image
									src={product.hotel_image || product.image}
									layout='responsive'
									width={1}
									height={1}
									objectFit='cover'
									alt='product picture from api'
								/>

								<div className='flex justify-between'>
									<span>
										<b>ID:</b> {values.enquiry_id}
									</span>
									<span>
										<b>Location:</b> {values.enquiry_location}
									</span>
								</div>
								<div className='grid mt-1'>
									<div>
										<p className={Object.keys(errors).length === 0 ? "opacity-0" : "text-red"}>
											{Object.keys(errors).length === 0
												? "empty"
												: errors.enquiry_name && touched.enquiry_name && errors.enquiry_name}
										</p>
										<div>
											<label htmlFor='enquiry_name'>
												Name: <span className='text-orange'>*</span>
											</label>
											<input
												type='text'
												id='enquiry_name'
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.enquiry_name}
												className='my-1 py-1 px-1 outline-orange w-full'
												placeholder='name'
											/>
										</div>
									</div>
									<div>
										<span className={Object.keys(errors).length === 0 ? "opacity-0" : "text-red"}>
											{Object.keys(errors).length === 0
												? "empty"
												: errors.enquiry_email && touched.enquiry_email && errors.enquiry_email}
										</span>
										<div>
											<label htmlFor='email'>
												Email: <span className='text-orange'>*</span>
											</label>
											<input
												type='email'
												id='enquiry_email'
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.enquiry_email}
												className='my-1 py-1 px-1 outline-orange w-full'
												placeholder='email'
											/>
										</div>
									</div>
									<button
										type='submit'
										className={
											!isSubmitting
												? "bg-orange py-2 my-1 text-white"
												: "bg-grey py-2 my-1 text-white"
										}
										disabled={isSubmitting}
									>
										{isSubmitting ? "Booking..." : "Send Booking"}
									</button>
								</div>
							</Form>
						</div>
					);
				}}
			</Formik>
		</div>
	);
}
