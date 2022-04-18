import Router from "next/router";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import LocationIcon from "../../icons/LocationIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import ContactAt from "../../icons/ContactAt";
import { BASE_URL, MESSAGES } from "../../../constants/baseUrl";
import { GKCloseButton } from "../utills/GKCloseButton";

// yup imported from yup using npm install yup
const reviewSchema = yup.object({
  // Object keys to refer for validation
  message: yup.string().min(10).required("Message is required"),
  name: yup.string().min(2).required("Name is required"),
  email: yup.string().required("Email is required"),
});

export default function ContactPage() {
  const close = () => {
    Router.push("/");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" bg-silver md:flex p-4 container md:justify-between">
        <div className="order-1 md:order-3 md:w-2/4 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.0579324322362!2d5.32015151633759!3d60.394720982044255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfc1d52944525%3A0x4f7172b3648915d7!2sStrandkaien%2014%2C%205013%20Bergen!5e0!3m2!1sno!2sno!4v1645475644467!5m2!1sno!2sno"
            className="w-full h-72 mb-4 md:m-0 md:h-full"
            loading="lazy"
          ></iframe>

          <GKCloseButton closeModal={close} style={{ fontSize: 40 }} />
        </div>
        <div className="order-2 md:flex-col md:max-w-2/4 px-16">
          <h3 className="text-3xl text-lightBlack font-bold mb-4">
            Get in touch
          </h3>
          <div className="flex-wrap">
            <div className="flex mb-2">
              <LocationIcon />
              <span className="ml-4">Strandkaien 14, Bergen</span>
            </div>
            <div className="flex mb-2">
              <PhoneIcon />
              <span className="ml-4">(+47) 444 77 885</span>
            </div>
            <div className="flex mb-2">
              <ContactAt />
              <span className="ml-4">holidaze@mail.com</span>
            </div>
          </div>
          <Formik
            // initial values that is used instead of state. Formik handles state, yup uses these references for validation
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            // validation schema is run, if return is true it will handle onSubmit
            validationSchema={reviewSchema}
            // submit axios post request
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // define our data
              const data = JSON.stringify({
                data: {
                  message_from: values.name,
                  message_message: values.message,
                  message_email: values.email,
                },
              });

              const CONFIG = {
                method: "POST",
                url: BASE_URL + MESSAGES,
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
                  // Reset to initial value
                  name: "",
                  email: "",
                  message: "",
                });
                // Todo: Better ux confirming success
                alert("Thank you for your message");
              }
            }}
            id="contact-field"
            className="p-2"
          >
            {({ handleSubmit, isSubmitting }) => {
              return (
                <Form onSubmit={handleSubmit} method="POST">
                  <div className="flex flex-wrap sm:flex-nowrap justify-between">
                    <Field name="name">
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="">
                          {meta.touched && meta.error && (
                            <div className="text-red">{meta.error}</div>
                          )}
                          <input
                            type="text"
                            {...field}
                            placeholder="Name"
                            id="name"
                            className="p-2 mr-2 my-2 appearance-none outline-none"
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="sm:ml-2 ">
                          {meta.touched && meta.error && (
                            <div className="text-red">{meta.error}</div>
                          )}
                          <input
                            type="email"
                            id="email"
                            {...field}
                            placeholder="Email"
                            className="p-2 my-2 appearance-none outline-none"
                          />
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className="">
                    <Field name="message" as="textarea">
                      {({ field, form: { touched, errors }, meta }) => (
                        <div>
                          <textarea
                            type="text"
                            {...field}
                            placeholder="Write your message here"
                            className="w-full h-48 resize-none overflow-scroll p-2 appearance-none outline-none"
                          />
                          {meta.touched && meta.error && (
                            <div className="text-red">{meta.error}</div>
                          )}
                        </div>
                      )}
                    </Field>
                    <button
                      type="submit"
                      className={
                        !isSubmitting
                          ? "w-full bg-orange p-2 text-white"
                          : "w-full bg-grey p-2 text-black"
                      }
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
