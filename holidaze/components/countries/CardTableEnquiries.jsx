import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL, ENQUIRE } from "../../constants/baseUrl.js";
import AuthContext from "../../context/AuthContext";
import GKLoadingModal from "../global/utills/GKLoadingModal.jsx";

export default function CardTable() {
  const [auth] = useContext(AuthContext);
  const [enquiries, setEnquiries] = useState(false);

  useEffect(() => {
    if (auth) {
      const CONFIG = {
        method: "GET",
        url: BASE_URL + ENQUIRE,
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      };
    }
    const getMessages = async () => {
      try {
        const res = await axios(CONFIG);

        setEnquiries(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow shadow-silver overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-orange">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Requests
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {!enquiries ? (
                  <GKLoadingModal />
                ) : (
                  enquiries.map(({ attributes, id }) => {
                    const NAME = attributes.enquiry_name;
                    const EMAIL = attributes.enquiry_email;
                    const ID = id;
                    const HOTEL = attributes.enquiry_hotel;
                    const DATE = attributes.createdAt.slice(0, 9);

                    return (
                      <tr
                        key={ID}
                        className="hover:bg-orange transition duration-200"
                      >
                        <td className="px-2 py-2 whitespace-nowrap">{ID}</td>
                        <td className="px-2 py-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {NAME}
                              </div>
                              <div className="text-sm text-gray-500">
                                {EMAIL}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-2 whitespace-nowrap">
                          <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {HOTEL}
                          </span>
                        </td>
                        <td className="px-2 py-2 whitespace-nowrap">{DATE}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
