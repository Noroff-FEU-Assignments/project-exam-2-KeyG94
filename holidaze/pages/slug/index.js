import Layout from "../../components/layout/Layout";
import Head from "../../components/layout/Head";

export default function index() {
	return (
		<Layout>
			<Head title='slug' />
			<div className='container flex flex-col justify-center items-center min-h-screen'>
				<h2 className='text-white font-bold text-2xl py-4 text-center lg:text-left'>Title/Name</h2>
				<div className='lg:bg-silver w-full flex-wrap lg:flex'>
					<div className='flex-1 bg-white'>
						<img
							src='https://images.unsplash.com/photo-1646422462528-0a48ac201c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
							alt='placeholder'
							className='object-cover'
						/>
					</div>
					<div className='flex-1 bg-darkBlack bg-opacity-95 shadow-2xl text-white lg:bg-opacity-0 lg:text-black lg:shadow-none'>
						<div className='lg:w-10/12 mx-auto lg:grid lg:grid-cols-1 lg:py-2 lg:place-items-center lg:min-h-[60%]'>
							<div className='lg:max-h-36 lg:overflow-scroll mb-2'>
								<h3 className='text-lg font-bold'>Details</h3>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
									tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
									vero
								</p>
							</div>
							<div className='lg:max-h-36 lg:overflow-scroll'>
								<h3 className='text-lg font-bold'>Location</h3>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
									tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
									vero
								</p>
							</div>
						</div>
						<div className='flex justify-center relative mx-auto lg:w-10/12 lg:bg-black my-10 pb-10 lg:pb-0'>
							<button className='bg-orange text-white font-bold py-3 px-14 lg:absolute lg:right-0'>
								Book
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
