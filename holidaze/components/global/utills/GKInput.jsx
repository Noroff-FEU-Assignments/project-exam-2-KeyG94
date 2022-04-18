export const GKFormInput = ({
  label,
  htmlfor,
  type,
  id,
  onchange,
  onblur,
  value,
}) => {
  return (
    <div className="flex justify-between">
      <label
        htmlFor={htmlfor}
        className="font-bold p-2 bg-black text-white w-32"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={onchange}
        onBlur={onblur}
        value={value}
        className="outline-none w-full ml-1"
      />
    </div>
  );
};
