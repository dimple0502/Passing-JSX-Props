import React from "react";

const ProfileCard = ({ name, age, greeting, children }) => {
  return (
    <div>
      <p> Name:{name}</p>
      <p> Age:{age}</p>
      Greeting:{greeting}
      {children}
    </div>
  );
};

export default ProfileCard;
