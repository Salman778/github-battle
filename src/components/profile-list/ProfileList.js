import React from "react";
import Tooltip from "../tooltip/Tooltip";
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaUser,
} from "react-icons/fa";

import PropTypes from "prop-types";

function ProfileList(props) {
  const { profile } = props;
  return (
    <ul className="card-list">
      <li>
        <FaUser color="rgb(239, 115, 115)" size={22} />
        {profile.name}
      </li>

      <li>
        <Tooltip text="User's location">
          <FaCompass color="rgb(144, 115, 255)" size={22} />
          {profile.location ? profile.location : "Unknown"}
        </Tooltip>
      </li>

      <li>
        <Tooltip text="User's Company">
          <FaBriefcase color="#795548" size={22} />
          {profile.company ? profile.company : "Unknown"}
        </Tooltip>
      </li>

      <li>
        <FaUsers color="rgb(129, 195, 245)" size={22} />
        {profile.followers.toLocaleString()} followers
      </li>

      <li>
        <FaUserFriends color="rgb(64, 183, 95)" size={22} />
        {profile.following.toLocaleString()} following
      </li>
    </ul>
  );
}

ProfileList.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileList;
