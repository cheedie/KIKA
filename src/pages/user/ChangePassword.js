import React, { useState } from "react";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/User/Sidebar";
import { ReactComponent as WatchFilled } from "../../assets/user/watch-filled.svg";
import { ReactComponent as Watch } from "../../assets/user/watch.svg";
import Alert from "../../components/User/Alert";
import { useUserContext } from "../../context/user_context";
import NavMiddle from "../../components/User/NavMiddle";
const ChangePassword = () => {
  const { changePassword } = useUserContext();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      currentPassword === "" &&
      newPassword === "" &&
      confirmNewPassword === ""
    ) {
      setAlert({ show: true, type: "danger", msg: "please enter value" });
    } else if (newPassword !== confirmNewPassword) {
      setAlert({ show: true, type: "danger", msg: "password doesnt match" });
    } else {
      changePassword({
        currentPassword,
        newPassword,
      });
      setAlert({
        show: true,
        type: "success",
        msg: "password changed successfully",
      });
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  return (
    <main>
      <Navbar />
      <NavMiddle deft={1} />

      <section className="user__account-container">
        <Sidebar deft={5} />
        <section className="user__account">
          <p className="user__account-title">Change Password</p>
          <div className="user__forgot-password-container">
            <form action="">
              <label htmlFor="current password" className="sign__form-label">
                Current Password
              </label>
              <div className="user__input-container">
                <input
                  className="sign__form-input"
                  type={toggle ? "text" : "password"}
                  id="current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <span onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <WatchFilled className="user__watch-icon" />
                  ) : (
                    <Watch className="user__watch-icon" />
                  )}
                </span>
              </div>

              <label htmlFor="new password" className="sign__form-label">
                New Password
              </label>
              <div className="user__input-container">
                <input
                  type={toggle ? "text" : "password"}
                  className="sign__form-input"
                  id="new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <span onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <WatchFilled className="user__watch-icon" />
                  ) : (
                    <Watch className="user__watch-icon" />
                  )}
                </span>
              </div>
              <label htmlFor="new password" className="sign__form-label">
                Retype New Password
              </label>
              <div className="user__input-container">
                <input
                  type={toggle ? "text" : "password"}
                  className="sign__form-input"
                  id="confirm new password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <span onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <WatchFilled className="user__watch-icon" />
                  ) : (
                    <Watch className="user__watch-icon" />
                  )}
                </span>
              </div>
              {alert.show && <Alert {...alert} removeAlert={showAlert} />}

              <button
                type="button"
                className="user__forgot-btn"
                onClick={handleSubmit}
              >
                Change Password
              </button>
            </form>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default ChangePassword;
