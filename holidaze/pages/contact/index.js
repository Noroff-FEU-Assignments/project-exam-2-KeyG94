import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import LocationIcon from "../../components/LocationIcon";
import PhoneIcon from "../../components/PhoneIcon";
import ContactAt from "../../components/ContactAt";
import { useState } from "react";
import Router from "next/router";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<Layout>
			<Head title='Contact' />
			<div className='flex justify-center items-center min-h-screen'>
				<form className=' bg-silver flex p-4'>
					<div className='order-1 flex-col'>
						<h3 className='text-3xl text-lightBlack font-bold mb-4'>Get in touch</h3>
						<div className='flex-col'>
							<div className='flex mb-2'>
								<LocationIcon />
								<span className='ml-4'>123 Mockup St. New York</span>
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
					<div className='order-last'>
						{/* Map */}
						<button
							id='x-btn'
							className=' bg-white rounded-full h-12 w-12 border-2 border-darkBlack'
							//FIX ME
							onClick={() => Router.back()}
						>
							X
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
}
