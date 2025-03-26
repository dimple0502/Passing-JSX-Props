import React from "react";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <div>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice,have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies:Reading,Hiking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
};

export default Profile;
