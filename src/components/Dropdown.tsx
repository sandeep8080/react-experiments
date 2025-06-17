import React from "react";

type DropdownProps = {
  handleDropdownChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const Dropdown: React.FC<DropdownProps> = ({ handleDropdownChange }) => {
  return (
    <div className="w-64 mx-auto">
      <select
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
        onChange={handleDropdownChange}
      >
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
      </select>
    </div>
  );
};
