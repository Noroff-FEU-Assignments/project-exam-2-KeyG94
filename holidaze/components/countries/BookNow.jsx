import Image from "next/image";
import { Formik } from "formik";
import * as yup from "yup";

// yup imported from yup using npm install yup
const reviewSchema = yup.object({
  // object keys to refer for validation
  hotel: yup.string().min(2).required("Hotel name is required"),
  location: yup.string().min(2).required("Location is required"),
  id: yup.string().min(1).required("A message is required"),
  name: yup.string().min(3).required("Name is required"),
  email: yup.string().min(3).required("Email is required"),
});

export default function BookNow({ product, closeModal }) {
  return (
    <div
      id="booking-modal"
      className="fixed z-10 left-0 top-20 p-5 w-80 bg-silver bg-opacity-95 text-black flex justify-center"
    >
      <span
        onClick={closeModal}
        className="text-red font-bold absolute right-5 hover:cursor-pointer border-2 px-2"
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
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
          errors,
          touched,
        }) => {
          console.log(errors);
          return (
            <div className="grid w-56">
              <form onSubmit={handleSubmit}>
                <h2 className=" text-xl font-bold text-center">Enquiry</h2>
                <span>
                  <b>Hotel Name:</b> {values.hotel}
                </span>
                <Image
                  src={product.hotel_image || product.image}
                  layout="responsive"
                  width={1}
                  height={1}
                  objectFit="cover"
                  alt="product picture from api"
                />
                <div className="flex justify-between">
                  <span>
                    <b>ID:</b> {values.id}
                  </span>
                  <span>
                    <b>Location:</b> {values.location}
                  </span>
                </div>
                <div className="grid mt-2">
                  <div>
                    <p
                      className={
                        Object.keys(errors).length === 0
                          ? "opacity-0"
                          : "text-red"
                      }
                    >
                      {Object.keys(errors).length === 0
                        ? "empty"
                        : errors.name && touched.name && errors.name}
                    </p>
                    <div>
                      <label htmlFor="name">
                        Name: <span className="text-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className="my-2 py-2 px-1 outline-orange w-full"
                        placeholder="name"
                      />
                    </div>
                  </div>
                  <div>
                    <span
                      className={
                        Object.keys(errors).length === 0
                          ? "opacity-0"
                          : "text-red"
                      }
                    >
                      {Object.keys(errors).length === 0
                        ? "empty"
                        : errors.email && touched.email && errors.email}
                    </span>
                    <div>
                      <label htmlFor="email">
                        Email: <span className="text-orange">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className="my-2 py-2 px-1 outline-orange w-full"
                        placeholder="email"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={
                      !isSubmitting
                        ? "bg-orange py-3 my-3 text-white"
                        : "bg-grey py-3 my-3 text-white"
                    }
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Booking..." : "Send Booking"}
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
