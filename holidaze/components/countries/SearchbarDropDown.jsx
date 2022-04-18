import { useState } from "react";
import BookNow from "./BookNow.jsx";

export default function SearchbarDropDown({ data, search }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  return (
    <ul className="absolute w-full max-h-60 overflow-scroll -ml-2 mt-12 text-left bg-darkBlack">
      {isModalOpen && (
        <BookNow
          product={modalProduct}
          closeModal={() => {
            setIsModalOpen(false);
            setModalProduct(null);
          }}
        />
      )}
      {
        /* loop through results  */
        data.map(({ attributes, id }, index) => {
          const { hotel_name, hotel_description, hotel_location, hotel_image } =
            attributes;
          if (
            hotel_name.toLowerCase().includes(search.toLowerCase()) ||
            hotel_location.toLowerCase().includes(search.toLowerCase())
          ) {
            return (
              <li
                key={index}
                className="hover:cursor-pointer"
                onClick={() => {
                  setIsModalOpen(true);
                  setModalProduct({
                    id,
                    hotel_name,
                    hotel_location,
                    hotel_image,
                    hotel_description,
                  });
                }}
              >
                <div className="flex p-3 border-b-2 hover:bg-lightBlack hover:cursor-pointer transition-all duration-100">
                  <span className="flex-1">{hotel_name}</span>
                  <span className="flex-1">{hotel_location}</span>
                  <span>Book now</span>
                </div>
              </li>
            );
          }
        })
      }
    </ul>
  );
}
