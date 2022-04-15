import Router from "next/router";
import * as GIIcon from "react-icons/gi";
import * as MDIcon from "react-icons/md";

export const GKModalBackground = ({ children }) => {
  return (
    <div className="fixed w-full h-full top-0 right-0 bg-darkBlack bg-opacity-0">
      {children}
    </div>
  );
};

export const GKConfirmationBox = ({ color, message, type, redirectPath }) => {
  setTimeout(() => {
    Router.push(redirectPath);
  }, 3000);
  return (
    <GKModalBackground>
      <div className="flex justify-between w-[175px] mx-auto my-[5%] rounded-md bg-white overflow-auto z-20 p-5 shadow-md">
        <div className="flex-1">
          {type === "success" && (
            <GIIcon.GiConfirmed
              style={{ color, fontSize: 40 }}
              className="animate-bounce"
            />
          )}
          {type === "error" && (
            <MDIcon.MdError style={{ color, fontSize: 40 }} />
          )}
        </div>
        <div className="flex-1">
          <p>{message}</p>
        </div>
      </div>
    </GKModalBackground>
  );
};
