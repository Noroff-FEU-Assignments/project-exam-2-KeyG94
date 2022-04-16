import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import placeholder from "../../public/placeholder.jpeg";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { BASE_URL, HOTELS, UPLOAD } from "../../constants/baseUrl";
import AuthContext from "../../context/AuthContext";
import Router from "next/router";
import axios from "axios";
import { updateHotelImageUrl } from "../../utills/updateHotelImageUrl.js";
import { GKConfirmationBox } from "../global/utills/GKConfirmationBox";
import GKLoadingModal from "../global/utills/GKLoadingModal";

// yup imported from yup using npm install yup
const reviewSchema = yup.object({
  // object keys to refer for validation
  hotel_name: yup.string().min(3).required("Hotel name is required"),
  hotel_location: yup.string().min(3).required("Location is required"),
  hotel_description: yup.string().min(10).required("A message is required"),
  hotel_image: yup.string().required("Image is required"),
});

export default function AddForm() {
  // Get state of the authentication provider
  const [auth] = useContext(AuthContext);
  const [image, setImage] = useState(placeholder);
  const [file, setFileField] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  const uploadImageToApi = async (form, id, data) => {
    // Create a new config
    const CONFIG = {
      method: "POST",
      url: BASE_URL + UPLOAD,
      data: form,
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    };

    try {
      const response = await axios(CONFIG);
      console.log(response);
      if (response.status !== 200) {
        setMessage(response.statusText);
      }

      if (response.status === 200) {
        setStatus(true);
        setMessage("Success!");
      }
      // Request an update to add the image url from cloudinary
      updateHotelImageUrl(id, response.data[0].url, auth, data);
    } catch (error) {
      console.log(error);
      setError(true);
      setMessage("An error occured");
    }
  };

  useEffect(() => {
    if (!auth) Router.push("/login");
  }, [auth]);

  if (!auth) {
    return <div />;
  }

  if (auth) {
    return (
      <Formik
        // initial values that is used instead of state. Formik handles state, yup uses these references for validation
        initialValues={{
          hotel_name: "",
          hotel_location: "",
          hotel_description: "",
          hotel_image: "",
        }}
        // validation schema is run, if return is true it will handle onSubmit
        validationSchema={reviewSchema}
        // this is ran if validation is successful

        // onSubmit prop runs a function that takes in (values, actions). I've destructured setSubmitting and resetForm ref: https://formik.org/docs/api/formik
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // this function takes in Formik childrens values.
          console.log(values);
          const data = JSON.stringify({
            data: {
              hotel_name: values.hotel_name,
              hotel_location: values.hotel_location,
              hotel_description: values.hotel_description,
            },
          });

          const CONFIG = {
            method: "POST",
            url: BASE_URL + HOTELS,
            data,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.jwt}`,
            },
          };

          try {
            const response = await axios(CONFIG);
            console.log(response);

            // Handle bad response
            if (response.status !== 200) {
              alert(response.statusText);
            }

            // Handle image upload
            // new formData
            let formData = new FormData();

            // Handle error on file
            if (!file) {
              alert("Error! Seems like you are missing an image");
              stop;
            }

            // append file to formdata
            if (file) {
              formData.append(`files`, file, file.name);
            }

            // Attach a ref id ref: strapi docs
            const refId = response.data.data.id;

            formData.append("refId", refId);
            formData.append("ref", "api::hotel.hotel");
            formData.append("field", "image");

            uploadImageToApi(formData, refId, data);
          } catch (error) {
            console.log(error);
          } finally {
            setTimeout(() => {
              setSubmitting(false);
              resetForm({
                hotel_name: "",
                hotel_location: "",
                hotel_description: "",
              });
            }, 400);
          }
        }}
      >
        {({
          values,
          handleChange,
          setFieldValue,
          handleSubmit,
          handleBlur,
          isSubmitting,
          errors,
          touched,
        }) => (
          <div className="max-w-lg mx-auto py-20 ">
            <Form onSubmit={handleSubmit}>
              <fieldset className="border-2">
                <div className="mt-10 mb-5 w-1/2 mx-auto">
                  <p className="text-red">
                    {errors.hotel_name &&
                      touched.hotel_name &&
                      errors.hotel_name}
                  </p>
                  <div className="border-2">
                    {/* First Name input field */}
                    <div className="flex justify-between">
                      <label
                        htmlFor="hotel"
                        className="font-bold p-2 bg-black text-white w-32"
                      >
                        Hotel:
                      </label>
                      <input
                        type="text"
                        id="hotel_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.hotel_name}
                        className="outline-none w-full ml-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5 w-1/2 mx-auto">
                  <p className="text-red">
                    {errors.hotel_location &&
                      touched.hotel_location &&
                      errors.hotel_location}
                  </p>
                  <div className="flex justify-between border-2">
                    <label
                      htmlFor="hotel_location"
                      className="font-bold bg-black text-white p-2 w-32"
                    >
                      Location:
                    </label>
                    <input
                      type="text"
                      id="hotel_location"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.hotel_location}
                      className="outline-none w-full ml-1"
                    />
                  </div>
                </div>
                <div className="w-1/2 mx-auto my-10">
                  <Image
                    src={image}
                    layout="responsive"
                    objectFit="cover"
                    width={1}
                    height={1}
                    alt="product picture from api"
                  />
                  <input
                    type="file"
                    name="hotel_image"
                    accept="image/*"
                    onChange={({ target }) => {
                      let reader = new FileReader();
                      reader.readAsDataURL(target.files[0]);
                      setFileField(target.files[0]);
                      reader.onload = ({ target }) => {
                        setImage(target.result);
                      };
                      setFieldValue("hotel_image", target.files[0]);
                    }}
                  />
                  <p className="text-red">
                    {errors.hotel_image &&
                      touched.hotel_image &&
                      errors.hotel_image}
                  </p>
                </div>
                <div className="mt-10 mb-5 w-5/6 mx-auto">
                  <p className="text-red">
                    {errors.hotel_description &&
                      touched.hotel_description &&
                      errors.hotel_description}
                  </p>
                  <div className="border-2">
                    <textarea
                      className="resize-none w-full h-72 p-2 outline-none"
                      name="hotel_description"
                      id="hotel_description"
                      placeholder="Details"
                      value={values.hotel_description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-2/6 mx-auto flex justify-center my-10">
                  <button
                    type="submit"
                    className={
                      !isSubmitting
                        ? "bg-orange w-full p-3 text-white font-semibold"
                        : "bg-grey w-full p-3 text-white font-semibold"
                    }
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Save"}
                  </button>
                  {isSubmitting && <GKLoadingModal />}
                  {status && (
                    <GKConfirmationBox
                      color={!error ? "green" : "red"}
                      type={!error ? "success" : "error"}
                      message={message}
                      redirectPath="/accomodations"
                    />
                  )}
                </div>
              </fieldset>
            </Form>
          </div>
        )}
      </Formik>
    );
  }
}
