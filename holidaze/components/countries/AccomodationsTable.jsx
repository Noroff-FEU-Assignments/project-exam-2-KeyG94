import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL, HOTELS } from "../../constants/baseUrl.js";
import AuthContext from "../../context/AuthContext";
import Editmodal from "./EditModal.jsx";
import GKLoadingModal from "../global/utills/GKLoadingModal.jsx";
import { GKConfirmationBox } from "../global/utills/GKConfirmationBox.jsx";

export default function AccomodationsTable() {
  const [auth] = useContext(AuthContext);
  const [hotels, setHotels] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const [confirmationBox, setConfirmationBox] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (auth) {
      // Appears unused but is used by getMessages
      const CONFIG = {
        method: "GET",
        url: BASE_URL + HOTELS,
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      };
    }

    const getMessages = async () => {
      try {
        const res = await axios(CONFIG);
        setHotels(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, []);

  const handleDelete = async (id) => {
    const config = {
      method: "DELETE",
      url: BASE_URL + HOTELS + "/" + id,
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    };
    try {
      await axios(config);
      setMessage("Success");
      setConfirmationBox(true);
    } catch (error) {
      console.log(error);
      setMessage("An error occured");
      setError(true);
    } finally {
      setTimeout(() => {
        setConfirmationBox(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col overflow-scroll">
      {modal && (
        <Editmodal
          auth={auth.jwt}
          product={modalProduct}
          closeModal={() => {
            setModal(false);
            setModalProduct(null);
          }}
        />
      )}
      {confirmationBox && (
        <GKConfirmationBox
          color={!error ? "green" : "red"}
          message={message}
          type={!error ? "success" : "error"}
          redirectPath={false}
        />
      )}
      <table className="shadow rounded bg-orange mx-auto divide-y divide-lightBlack">
        <thead>
          <tr>
            <th
              scope="col"
              className="hidden xs:block px-6 py-1 text-left text-tiny font-medium text-lightBlack uppercase tracking-wider"
            >
              ID:
            </th>
            <th
              scope="col"
              className="px-2 py-1 text-left text-tiny font-medium text-lightBlack uppercase tracking-wider"
            >
              Title
            </th>

            <th
              scope="col"
              className="hidden xs:block px-2 py-1 text-left text-tiny font-medium text-lightBlack uppercase tracking-wider"
            >
              Location
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-lightBlack">
          {!hotels ? (
            <GKLoadingModal />
          ) : (
            hotels.map(({ attributes, id }) => {
              const HOTEL = attributes.hotel_name;
              const LOCATION = attributes.hotel_location;
              const IMAGE = attributes.hotel_image;
              const DESCRIPTION = attributes.hotel_description;
              const ID = id;

              return (
                <tr
                  key={ID}
                  className="hover:bg-orange transition duration-200"
                >
                  <td className="hidden xs:block px-2 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-tiny text-darkBlack">{ID}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap">
                    <div className="text-tiny text-darkBlack">{HOTEL}</div>
                  </td>
                  <td className="hidden xs:block px-2 py-4 whitespace-nowrap">
                    <div className="text-tiny text-darkBlack">{LOCATION}</div>
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap text-right text-tiny font-medium">
                    <span
                      onClick={() => {
                        setModalProduct({
                          HOTEL,
                          LOCATION,
                          IMAGE,
                          DESCRIPTION,
                          ID,
                        });
                        setModal(true);
                      }}
                      className="text-lightBlack hover:text-silver cursor-pointer"
                    >
                      Edit
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-right text-tiny font-medium hover:cursor-pointer">
                    <span
                      className="text-red hover:text-silver"
                      onClick={() => {
                        // TODO, better ui
                        const result = prompt(
                          "Are you sure you want to delete this?"
                        );
                        if (result != null) {
                          handleDelete(ID);
                          setHotels(hotels.filter((hotel) => hotel.id != ID));
                        }
                      }}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
