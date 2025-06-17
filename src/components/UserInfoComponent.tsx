import { useEffect, useState, type FC } from "react";

interface Props {
  userId: string;
}

export const UserInfoComponent: FC<Props> = ({ userId }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("UserId changed:", userId);
    console.log("Name value:", name);
  });
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">User Info</h3>
      <label className="block text-gray-700 mb-2" htmlFor="userId">
        UserId: {userId}
      </label>
      <input
        id="name"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
