import LocationIcon from "../../icons/LocationIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import ContactAt from "../../icons/ContactAt";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ContactPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const router = useRouter();
	return (
		<div className='flex justify-center items-center min-h-screen'>
			<form className=' bg-silver md:flex p-4'>
				<div className='order-1 md:order-3 md:w-2/3 relative'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.0579324322362!2d5.32015151633759!3d60.394720982044255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfc1d52944525%3A0x4f7172b3648915d7!2sStrandkaien%2014%2C%205013%20Bergen!5e0!3m2!1sno!2sno!4v1645475644467!5m2!1sno!2sno'
						className='w-full h-72 mb-4 md:m-0 md:h-full'
						loading='lazy'
					></iframe>
					<Link href={"/"} passHref>
						<button
							id='x-btn'
							className=' bg-white rounded-full h-12 w-12 border-2 border-darkBlack absolute top-0 right-0'
							//FIX ME
							onClick={(e) => {
								e.preventDefault;
							}}
						>
							X
						</button>
					</Link>
				</div>
				<div className='order-2 md:flex-col'>
					<h3 className='text-3xl text-lightBlack font-bold mb-4'>Get in touch</h3>
					<div className='flex-wrap'>
						<div className='flex mb-2'>
							<LocationIcon />
							<span className='ml-4'>Strandkaien 14, Bergen</span>
						</div>
						<div className='flex mb-2'>
							<PhoneIcon />
							<span className='ml-4'>(+47) 444 77 885</span>
						</div>
						<div className='flex mb-2'>
							<ContactAt />
							<span className='ml-4'>holidaze@mail.com</span>
						</div>
					</div>
					<div id='contact-field' className='p-2'>
						<div className='flex'>
							<input
								className='p-2 mr-2 my-2 appearance-none outline-none'
								type='text'
								name='name'
								placeholder='Name'
								onChange={({ target }) => setEmail(target.value)}
								value={name}
							/>
							<input
								className='p-2 ml-2 my-2 appearance-none outline-none'
								placeholder='Email'
								type='text'
								name='email'
								onChange={(target) => setEmail(target.value)}
								value={email}
							/>
						</div>
						<div>
							<textarea
								className='w-full h-48 resize-none overflow-scroll p-2 appearance-none outline-none'
								placeholder='Write your message here'
								type='text'
								name='message'
								onChange={({ target }) => setMessage(target.value)}
							/>
							<button className='w-full bg-orange p-2 text-white'>Send</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
