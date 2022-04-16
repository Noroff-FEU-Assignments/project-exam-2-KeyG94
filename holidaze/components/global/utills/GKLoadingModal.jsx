import { GKModalBackground } from "./GKConfirmationBox";
import * as ImIcon from "react-icons/im";

const GKLoadingModal = () => {
  return (
    <GKModalBackground>
      <div className="bg-white rounded-md w-[100px] grid justify-center mx-auto my-[33%] p-3 bg-opacity-90 shadow">
        <ImIcon.ImSpinner2 className="text-4xl text-orange animate-spin" />
      </div>
    </GKModalBackground>
  );
};

export default GKLoadingModal;
