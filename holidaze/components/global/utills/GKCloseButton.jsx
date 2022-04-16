import * as AiIcon from "react-icons/ai";

export const GKCloseButton = ({ closeModal }) => {
  return (
    <AiIcon.AiOutlineCloseCircle
      onClick={closeModal}
      className="text-xl text-red rounded-xl z-20 absolute top-5 right-5 hover:cursor-pointer transition duration-150 hover:bg-red hover:rounded-xl hover:text-white hover:border-red"
    />
  );
};
