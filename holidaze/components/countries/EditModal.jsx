import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import axios from "axios";
import { BASE_URL, HOTELS } from "../../constants/baseUrl";
import Image from "next/image";

// yup imported from yup using npm install yup
const reviewSchema = yup.object({
	// object keys to refer for validation
	hotel_name: yup.string().min(2).required("Hotel name is required"),
	hotel_location: yup.string().min(2).required("Location is required"),
	hotel_description: yup.string().min(10).required("A message is required"),
});

const Editmodal = ({ product, closeModal, auth }) => {
	return (
		<div
			className='fixed z-10 right-0 top-0 w-full h-full overflow-auto bg-darkBlack bg-opacity-80'
			onClick={closeModal}
		>
			<div
				className='bg-white rounded-sm mx-auto my-[10%] p-5 relative md:max-w-[600px]'
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className='text-lg font-bold text-center'>Edit {product.HOTEL}</h2>
				<button
					onClick={closeModal}
					className='text-red font-bold cursor-pointer border-2 px-2 absolute right-5 z-10'
				>
					Close
				</button>

				<Formik
					// initial values that is used instead of state. Formik handles state, yup uses these references for validation
					initialValues={{
						// These values are whatever is passed in the param
						hotel_id: `${product.ID}`,
						hotel_name: `${product.HOTEL}`,
						hotel_location: `${product.LOCATION}`,
						hotel_description: `${product.DESCRIPTION}`,
						hotel_image: `${product.IMAGE}`,
					}}
					// validation schema is run, if return is true it will handle onSubmit
					validationSchema={reviewSchema}
					// this is ran if validation is successful

					//onSubmit prop runs a function that takes in (values, actions). I've destructured setSubmitting and resetForm ref: https://formik.org/docs/api/formik
					onSubmit={async (values, { setSubmitting, resetForm }) => {
						// this function takes in Formik childrens values.
						const data = JSON.stringify({
							data: {
								hotel: parseInt(values.hotel_id),
								hotel_name: values.hotel_name,
								hotel_location: values.hotel_location,
								hotel_description: values.hotel_description,
							},
						});

						const CONFIG = {
							method: "PUT",
							url: BASE_URL + HOTELS + "/" + product.ID,
							data,
							headers: {
								"Content-Type": "application/json",
								Authorization: `Bearer ${auth}`,
							},
						};

						try {
							const response = await axios(CONFIG);
							if (response.status !== 200) {
								alert(response.statusText);
							}
						} catch (error) {
							console.log(error);
						} finally {
							setSubmitting(false);
							// Todo: Better ux confirming success
							alert("Your accomodation has been updated!");
							closeModal();
						}
					}}
				>
					{({ values, handleChange, handleSubmit, handleBlur, isSubmitting, errors, touched }) => {
						return (
							<Form onSubmit={handleSubmit} method='PUT'>
								<div className='flex flex-wrap justify-center'>
									<div className='flex-1'>
										<div className='grid px-5'>
											<p className='font-bold'>
												ID: <span>{values.hotel_id}</span>
											</p>
											<label htmlFor='name'>
												<p className='font-bold'>
													Hotel Name: <span className='text-orange'>*</span>
												</p>
											</label>
											<input
												type='text'
												id='hotel_name'
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.hotel_name}
												className='my-1 py-1 px-1 outline-orange border-2'
												placeholder='name'
											/>
											<p className={Object.keys(errors).length === 0 ? "opacity-0" : "text-red"}>
												{Object.keys(errors).length !== 0 &&
													errors.hotel_name &&
													touched.hotel_name &&
													errors.hotel_name}
											</p>

											<label htmlFor='name'>
												<p className='font-bold'>
													Location: <span className='text-orange'>*</span>
												</p>
											</label>

											<input
												type='text'
												id='hotel_location'
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.hotel_location}
												className='my-1 py-1 px-1 outline-orange border-2'
											/>
											<p className={Object.keys(errors).length === 0 ? "opacity-0" : "text-red"}>
												{Object.keys(errors).length !== 0 &&
													errors.hotel_location &&
													touched.hotel_location &&
													errors.hotel_location}
											</p>

											<label htmlFor='description'>
												<p className='font-bold'>Description:</p>
											</label>
											<p className={Object.keys(errors).length === 0 ? "opacity-0" : "text-red"}>
												{Object.keys(errors).length !== 0 &&
													errors.hotel_description &&
													touched.hotel_description &&
													errors.hotel_description}
											</p>
											<textarea
												type='text'
												id='hotel_description'
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.hotel_description}
												className='my-1 py-1 px-1 outline-orange bottom-2 border-2 h-full resize-none'
											/>
										</div>
									</div>

									<div className='flex-none w-1/2 sm:flex-1 mt-14'>
										<Image
											src={values.hotel_image}
											layout='responsive'
											width={1}
											height={1}
											objectFit='cover'
											alt='product picture from api'
										/>
									</div>
								</div>

								<div className='mt-1 flex justify-center'>
									<button
										type='submit'
										className={`bg-orange py-2 px-8 my-1 mx-auto text-white hover:bg-opacity-80 transition duration-200 ${
											isSubmitting && "bg-grey"
										}`}
										disabled={isSubmitting}
									>
										{isSubmitting ? "Updating..." : "Update"}
									</button>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
};

export default Editmodal;
