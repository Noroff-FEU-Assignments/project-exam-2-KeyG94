import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import womakey from "../../../public/womankey.png";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { LOGIN_URL, ADMIN } from "../../../constants/baseUrl";
import AuthContext from "../../../context/AuthContext";
import axios from "axios";
import { GKConfirmationBox } from "../utills/GKConfirmationBox";
import { GKCloseButton } from "../utills/GKCloseButton";
import Router from "next/router";

// yup imported from yup using npm install yup
const reviewSchema = yup.object({
  // Object keys to refer for validation
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  const [loginError, setLoginError] = useState(false);
  const [, setAuth] = useContext(AuthContext);
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <>
      <div className="flex bg-silver h-screen justify-center md:items-center relative container">
        <GKCloseButton closeModal={() => Router.push("/")} />
        <div className="py-36 md:w-1/2 md:p-20  flex flex-col md:items-center">
          <h2 className="text-xl font-bold">Log in</h2>
          <p>
            New user?
            <span className="text-red ml-1">
              <Link href={"/contact"}>Contact support</Link>
            </span>
          </p>
          <Formik
            // initial values that is used instead of state. Formik handles state, yup uses these references for validation
            initialValues={{
              email: "",
              password: "",
            }}
            // validation schema is run, if return is true it will handle onSubmit
            validationSchema={reviewSchema}
            // submit axios post request
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // Get user data
              const data = JSON.stringify({
                identifier: values.email,
                password: values.password,
              });

              // Create a config for api
              const CONFIG = {
                method: "POST",
                url: LOGIN_URL + ADMIN,
                data,
                headers: {
                  Accept: "*/*",
                  "Content-Type": "application/json",
                },
              };

              try {
                const response = await axios(CONFIG);

                // if response ok save token and user to storage
                if (response.status === 200) {
                  setAuth(response.data);
                  setLoginStatus(true);
                }

                // if response not ok
                if (response.error) {
                  // feedback not ok
                  setLoginError(response.message[0].messages[0].message);
                  console.log(response);
                }
              } catch (error) {
                console.log(error);
                setLoginError("Wrong email or password");
              }
            }}
          >
            {({ handleSubmit, isSubmitting }) => {
              return (
                <Form onSubmit={handleSubmit} method="POST">
                  <div className="mt-5">
                    <Field name="email">
                      {({ field, form, meta }) => (
                        <div>
                          {meta.touched && meta.error && (
                            <div className="text-red">{meta.error}</div>
                          )}
                          <input
                            type="email"
                            {...field}
                            placeholder="Email"
                            id="email"
                            className="p-2 my-1 border-2 border-b-darkBlack w-full outline-none"
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form, meta }) => (
                        <div>
                          {meta.touched && meta.error && (
                            <div className="text-red">{meta.error}</div>
                          )}
                          <input
                            type="password"
                            {...field}
                            placeholder="Password"
                            id="password"
                            className="p-2 my-1 border-2 border-b-darkBlack w-full outline-none"
                          />
                        </div>
                      )}
                    </Field>
                    <button
                      type="submit"
                      className={
                        !isSubmitting
                          ? "w-full bg-black p-2 text-white mt-5"
                          : "w-full bg-grey p-2 text-black mt-5"
                      }
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Log in"}
                    </button>
                    {loginError && <p className="text-red">{loginError}</p>}
                  </div>
                  {loginStatus && (
                    <GKConfirmationBox
                      color="green"
                      message="Succesfully logged in!"
                      type="success"
                      redirectPath="admin"
                    />
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="w-1/2 p-20 hidden md:block">
          <Image
            src={womakey}
            width={250}
            height={250}
            objectFit="contain"
            className="object-center"
            layout="responsive"
          />
        </div>
      </div>
    </>
  );
}
