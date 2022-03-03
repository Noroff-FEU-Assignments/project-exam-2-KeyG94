import React from "react";

const accomodations = [
  {
    id: 1,
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    location: "Berglyvn",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

export default function AccomodationsTable() {
  return (
    <div className="flex flex-col">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-1 text-left text-tiny font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID:
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-left text-tiny font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>

                  <th
                    scope="col"
                    className="hidden md:block px-6 py-1 text-left text-tiny font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white hover:bg-silver divide-y divide-gray-200">
                {accomodations.map((accomodation) => (
                  <tr key={accomodation.id}>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className=" text-tiny font-medium text-gray-900">
                            {accomodation.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <div className="text-tiny text-gray-900">
                        {accomodation.title}
                      </div>
                    </td>
                    <td className="hidden md:block px-6 py-4 whitespace-nowrap">
                      <div className="text-tiny text-gray-900">
                        {accomodation.location}
                      </div>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-right text-tiny font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-right text-tiny font-medium hover:cursor-pointer">
                      <span className=" text-red">Delete</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
