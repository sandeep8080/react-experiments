import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { UserInfoComponent } from "./UserInfoComponent";

export const ResetStateExample = () => {
  // This component is used to demonstrate the reset state functionality
  const [userId, setUserId] = useState("");

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserId(event.target.value);
  };
  return (
    <>
      <Dropdown handleDropdownChange={handleDropdownChange} />
      <UserInfoComponent userId={userId} key={userId} />
    </>
  );
};
