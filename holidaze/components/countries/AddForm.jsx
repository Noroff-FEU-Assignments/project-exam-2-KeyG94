import Image from "next/image";
import placeholder from "../../public/placeholder.jpeg";
import { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";

//yup imported from yup using npm install yup
const reviewSchema = yup.object({
  //object keys to refer for validation
  firstname: yup.string().min(3).required("First name is required"),
  lastname: yup.string().min(4).required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().min(10).required("A message is required"),
});

export default function AddForm() {
  const [hotel, setHotel] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // return to normal state
  isSubmitting
    ? setTimeout(() => {
        setIsSubmitting(false);
      }, 3000)
    : null;

  // To use formik
  return (
    <Formik
      // initial values that is used instead of state. Formik handles state, yup uses these references for validation
      initialValues={{
        hotel: "",
        location: "",
        details: "",
      }}
      //validation schema is run, if return is true it will handle onSubmit
      validationSchema={reviewSchema}
      //this is ran if validation is successful

      //onSubmit prop runs a function that takes in (values, actions). I've destructured setSubmitting and resetForm ref: https://formik.org/docs/api/formik
      onSubmit={(values, { setSubmitting, resetForm }) => {
        //this function takes in Formik childrens values.

        //Im using a setTimeout for the sake of simulating a submit as if it was submitting to an api
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm({
            hotel: "",
            location: "",
            details: "",
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
      }) => (
        <div className="max-w-lg mx-auto py-20 ">
          <form onSubmit={handleSubmit}>
            <div className="border-2">
              <div className="border-2 mt-10 mb-5 p-2 w-1/2 mx-auto">
                <p style={{ color: "red" }}>
                  {errors.hotel && touched.hotel && errors.hotel}
                </p>
                {/* First Name input field */}
                <div className="flex justify-between">
                  <label htmlFor="hotel" className="font-bold">
                    Hotel:
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.hotel}
                    className="outline-none w-full ml-1"
                  />
                </div>
              </div>
              <div className="border-2 p-2 w-1/2 mx-auto">
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={({ target }) => setLocation(target.value)}
                  className="outline-none w-full"
                />
              </div>
              <div className="w-1/2 mx-auto my-10">
                <Image
                  src={placeholder}
                  layout="responsive"
                  objectFit="cover"
                  alt="product picture from api"
                />
              </div>
              <div className="border-2 w-5/6 mx-auto my-10">
                <textarea
                  className="resize-none w-full h-72 p-2 outline-none"
                  name="details"
                  id="details"
                  placeholder="Details"
                  value={details}
                  onChange={({ target }) => setDetails(target.value)}
                />
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
                  onClick={() => setIsSubmitting(true)}
                >
                  {isSubmitting ? "Submitting..." : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}
