import Image from "next/image";
import placeholder from "../../public/image-blur-placeholder.png";
import Link from "next/link";

export default function ResultCard({ name, id, location, image }) {
	return (
		<div key='id' className='group relative'>
			<div className='mt-4 flex justify-between text-white'>
				<p>{name ? name : "Loading.."}</p>
				<p>{id ? id : "Loading.."}</p>
			</div>
			<div className='bg-gray-200 aspect-square rounded-md lg:h-80 lg:aspect-none cursor-pointer'>
				<Link href={`/${id}`} passHref>
					<Image
						src={image ? image : placeholder}
						alt={`Image of ${name}`}
						className='object-center hover:scale-105 transition'
						width={1}
						height={1}
						layout='responsive'
						objectFit='cover'
					/>
				</Link>
			</div>
			<p className='text-white'>{location ? location : "Loading.."}</p>
		</div>
	);
}
