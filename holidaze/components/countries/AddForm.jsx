import Image from "next/image";
import placeholder from "../../public/placeholder.jpeg";
import { Formik } from "formik";
import * as yup from "yup";

// yup imported from yup using npm install yup
const reviewSchema = yup.object({
  // object keys to refer for validation
  hotel: yup.string().min(3).required("Hotel name is required"),
  location: yup.string().min(3).required("Location is required"),
  details: yup.string().min(10).required("A message is required"),
});

export default function AddForm() {
  // To use formik
  return (
    <Formik
      // initial values that is used instead of state. Formik handles state, yup uses these references for validation
      initialValues={{
        hotel: "",
        location: "",
        details: "",
      }}
      // validation schema is run, if return is true it will handle onSubmit
      validationSchema={reviewSchema}
      // this is ran if validation is successful

      //onSubmit prop runs a function that takes in (values, actions). I've destructured setSubmitting and resetForm ref: https://formik.org/docs/api/formik
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // this function takes in Formik childrens values.

        // Im using a setTimeout for the sake of simulating a submit as if it was submitting to an api
        // TODO: submit the form to the correct path at the api:
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
            <fieldset className="border-2">
              <div className="mt-10 mb-5 w-1/2 mx-auto">
                <p className="text-red">
                  {errors.hotel && touched.hotel && errors.hotel}
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
                      id="hotel"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.hotel}
                      className="outline-none w-full ml-1"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5 w-1/2 mx-auto">
                <p className="text-red">
                  {errors.location && touched.location && errors.location}
                </p>
                <div className="flex justify-between border-2">
                  <label
                    htmlFor="location"
                    className="font-bold bg-black text-white p-2 w-32"
                  >
                    Location:
                  </label>
                  <input
                    type="text"
                    id="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                    className="outline-none w-full ml-1"
                  />
                </div>
              </div>
              <div className="w-1/2 mx-auto my-10">
                <Image
                  src={placeholder}
                  layout="responsive"
                  objectFit="cover"
                  alt="product picture from api"
                />
              </div>
              <div className="mt-10 mb-5 w-5/6 mx-auto">
                <p className="text-red">
                  {errors.details && touched.details && errors.details}
                </p>
                <div className="border-2">
                  <textarea
                    className="resize-none w-full h-72 p-2 outline-none"
                    name="details"
                    id="details"
                    placeholder="Details"
                    value={values.details}
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
              </div>
            </fieldset>
          </form>
        </div>
      )}
    </Formik>
  );
}
