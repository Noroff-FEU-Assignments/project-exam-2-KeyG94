export default function SearchbarDropDown(props) {
  return (
    <ul className="absolute w-full -ml-2 mt-12 text-left bg-darkBlack ">
      {/* loop through results  */}
      <div className="flex justify-between p-3 border-b-2">
        <span>data.title</span>
        <span>data.detail</span>
        <span>Book now</span>
      </div>

      <div className="flex justify-between p-3 border-b-2">
        <span>data.title</span>
        <span>data.detail</span>
        <span>Book now</span>
      </div>
      <div className="flex justify-between p-3 border-b-2">
        <span>data.title</span>
        <span>data.detail</span>
        <span>Book now</span>
      </div>
    </ul>
  );
}
