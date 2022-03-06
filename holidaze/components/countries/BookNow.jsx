export default function BookNow({ show, data }) {
	console.log(data + " is " + show);

	return show ? (
		<div id='booking-modal' className='fixed left-0 top-1/4 bg-white text-black'>
			{data}
		</div>
	) : null;
}
