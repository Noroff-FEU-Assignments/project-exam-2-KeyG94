import { useState } from "react";
import Image from "next/image";
import placeholder from "../../public/image-blur-placeholder.png";
import Link from "next/link";
import GKLoadingModal from "../../components/global/utills/GKLoadingModal";

const ResultCard = ({ name, id, location, image }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div key="id" className="group relative">
      {isLoading && <GKLoadingModal />}
      <div className="mt-4 flex justify-between text-white">
        <p>{name ? name : "Loading.."}</p>
        <p>{id ? id : "Loading.."}</p>
      </div>
      <Link href={`/${id}`} passHref>
        <a
          className="bg-gray-200 aspect-square rounded-md lg:h-80 lg:aspect-none cursor-pointer"
          onClick={() => setIsLoading(true)}
        >
          <Image
            src={image ? image : placeholder}
            alt={`Image of ${name}`}
            className="object-center hover:scale-105 transition"
            width={1}
            height={1}
            layout="responsive"
            objectFit="cover"
          />
        </a>
      </Link>
      <p className="text-white">{location ? location : "Loading.."}</p>
    </div>
  );
};

export default ResultCard;
