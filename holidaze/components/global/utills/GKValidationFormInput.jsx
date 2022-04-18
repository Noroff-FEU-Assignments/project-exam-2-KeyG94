import React from "react";

// This validation input component is designed specifically for Formik input forms
export const GKValidationFormInput = ({
  errors,
  touched,
  label,
  required,
  htmlfor,
  type,
  id,
  onchange,
  onblur,
  value,
  placeholder,
}) => {
  return (
    <div>
      {/* This might cause a lot of maintanance in future or if project grew,
      might redo do this. */}
      <p className={errors.length !== 0 && "text-red"}>
        {errors.length !== 0 && errors && touched && errors}
      </p>

      <div>
        <label htmlFor={htmlfor}>
          {label}: {required && <span className="text-orange">*</span>}
        </label>
        <input
          type={type}
          id={id}
          onChange={onchange}
          onBlur={onblur}
          value={value}
          className="my-1 py-1 px-1 outline-orange w-full"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
