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
  console.log(product);
  return (
    <div className="border-2 bg-white">
      <h2 className="text-lg font-bold text-center">Edit {product.HOTEL}</h2>
      <span
        onClick={closeModal}
        className="text-red font-bold cursor-pointer border-2 px-2 absolute right-5"
      >
        Close
      </span>
      <div>
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
            console.log(values);
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
              console.log(response);
              if (response.status !== 200) {
                alert(response.statusText);
              }
            } catch (error) {
              console.log(error);
            } finally {
              setSubmitting(false);
              // Todo: Better ux confirming success
              alert("Your accomodation has been updated!");
            }
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            isSubmitting,
            errors,
            touched,
          }) => {
            return (
              <div className="">
                <Form onSubmit={handleSubmit} method="PUT">
                  <div>
                    <div>
                      <span>
                        <b>ID:</b> {values.hotel_id}
                      </span>
                    </div>
                    <label htmlFor="name">
                      <b>Hotel Name:</b> <span className="text-orange">*</span>
                    </label>
                    <p
                      className={
                        Object.keys(errors).length === 0
                          ? "opacity-0"
                          : "text-red"
                      }
                    >
                      {Object.keys(errors).length === 0
                        ? "empty"
                        : errors.hotel_name &&
                          touched.hotel_name &&
                          errors.hotel_name}
                    </p>
                    <input
                      type="text"
                      id="hotel_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.hotel_name}
                      className="my-1 py-1 px-1 outline-orange border-2"
                      placeholder="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="name">
                      <b>Location:</b> <span className="text-orange">*</span>
                    </label>
                    <p
                      className={
                        Object.keys(errors).length === 0
                          ? "opacity-0"
                          : "text-red"
                      }
                    >
                      {Object.keys(errors).length === 0
                        ? "empty"
                        : errors.hotel_location &&
                          touched.hotel_location &&
                          errors.hotel_location}
                    </p>
                    <div>
                      <input
                        type="text"
                        id="hotel_location"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.hotel_location}
                        className="my-1 py-1 px-1 outline-orange border-2"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:justify-around">
                    <div className="flex-1">
                      <label>
                        <b>Description:</b>
                      </label>
                      <p
                        className={
                          Object.keys(errors).length === 0
                            ? "opacity-0"
                            : "text-red"
                        }
                      >
                        {Object.keys(errors).length === 0
                          ? "empty"
                          : errors.hotel_description &&
                            touched.hotel_description &&
                            errors.hotel_description}
                      </p>
                      <textarea
                        type="text"
                        id="hotel_description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.hotel_description}
                        className="my-1 py-1 px-1 outline-orange w-full bottom-2 border-2"
                      />
                    </div>
                    <div className="flex-1 ml-2">
                      <Image
                        src={values.hotel_image}
                        width={400}
                        height={200}
                        objectFit="cover"
                        alt="product picture from api"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-1">
                    <button
                      type="submit"
                      className={
                        !isSubmitting
                          ? "bg-orange py-2 px-8 my-1 text-white"
                          : "bg-grey py-2 px-8 my-1 text-white"
                      }
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Updating..." : "Update"}
                    </button>
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Editmodal;
