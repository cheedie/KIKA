import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/user/user.css";

const Sidebar = ({ deft }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(deft);

  return (
    <section className="user__sidebar-container">
      <ul className="user__sidebar-links">
        <li
          className={
            activeLink === 1
              ? "user__sidebar-active-link"
              : "user__sidebar-link"
          }
          onClick={(e) => {
            setActiveLink(e.target.value);
            navigate("/user/account");
          }}
          value={1}
        >
          My Kika Account
        </li>
        <li
          className={
            activeLink === 2
              ? "user__sidebar-active-link"
              : "user__sidebar-link"
          }
          onClick={(e) => {
            setActiveLink(e.target.value);
            navigate("/user/account/myorders");
          }}
          value={2}
        >
          My Orders
        </li>
        <li
          className={
            activeLink === 3
              ? "user__sidebar-active-link"
              : "user__sidebar-link"
          }
          onClick={(e) => {
            setActiveLink(e.target.value);
            navigate("/user/account/notifications");
          }}
          value={3}
        >
          Notification
        </li>
        <li
          className={
            activeLink === 4
              ? "user__sidebar-active-link"
              : "user__sidebar-link"
          }
          onClick={(e) => {
            setActiveLink(e.target.value);
            navigate("/user/account/trackorder");
          }}
          value={4}
        >
          Track Orders
        </li>
        <li
          className={
            activeLink === 5
              ? "user__sidebar-active-link"
              : "user__sidebar-link"
          }
          onClick={(e) => {
            setActiveLink(e.target.value);
            navigate("/user/account/changepassword");
          }}
          value={5}
        >
          Change Password
        </li>
        <li
          className={
            activeLink === 6
              ? "user__sidebar-active-link"
              : "user__sidebar-link"
          }
          onClick={(e) => {
            setActiveLink(e.target.value);
            navigate("/user/account/signout");
          }}
          value={6}
        >
          Sign Out
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
