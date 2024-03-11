import { useState } from "react";
import accountCircleImg from "../../assets/imgs/account_circle.png";
import passwordImg from "../../assets/imgs/password.jpg";
import navigationImg1 from "../../assets/imgs/navigation.png";
import navigationImg2 from "../../assets/imgs/navigation.png";
import editImg from "../../assets/imgs/edit.png";
import hiddenImg from "../../assets/imgs/hidden.png";
import "./GeneralProfile.css";
import { teacherInfo } from "../../data/data";

const GeneralProfile = () => {
  const [activeSection, setActiveSection] = useState("personalInfo");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visibility, setVisibility] = useState({
    pass1: {visible: false}, 
    pass2: {visible: false}, 
    pass3: {visible: false}
  });
  const [focused, setFocused] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleVisibility = (inputName) => {
    setVisibility((prevPasswords) => ({
      ...prevPasswords,
      [inputName]: {
        ...prevPasswords[inputName],
        visible: !prevPasswords[inputName].visible,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    if (newPassword === confirmPassword) {
      console.log("Password updated!");
      // Update the password in your state/store or send it to your server
    } else {
      console.log("Passwords do not match!");
      // Handle the error state
    }
  };

  return (
    <div className="general">
      <nav>
        <div className="nav1">
          <button onClick={() => setActiveSection("personalInfo")}>
            <img src={accountCircleImg} />
            <p>Персональная информация</p>
            <img src={navigationImg1} />
          </button>
        </div>
        <div className="nav2">
          <button onClick={() => setActiveSection("updatePassword")}>
            <img src={passwordImg} />
            <p>Обновить пароль</p> 
            <img src={navigationImg2} />
          </button>
        </div>
      </nav>

      {activeSection === "personalInfo" && (
        <div>
          <div className="personal-info-container">
          <hr/>
          <div className="personal">
          <div className="personal-info-header">
            <p>Персональная информация</p>
            <img src={editImg} />
          </div>
            {teacherInfo.map((teacherInfo, index) => (
              <div key={index} className="personal-info-grid">
                <div className="info-box">
                  <div className="info-label">{teacherInfo.name}</div>
                  <div className="info-value">{teacherInfo.value}</div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      )}

      {activeSection === "updatePassword" && (
        <div className="updatePasswordGeneral">
          <hr/>
          <div className="password-update-container">
            <p className="password-update-header">Обновить пароль</p>
              <form onSubmit={handleSubmit} className="password-update-form">
                <div
                  className={`form-group ${
                    focused.currentPassword || currentPassword ? "focused" : ""
                  }`}
                >
                  <input
                    id="current-password"
                    type={visibility.pass1.visible ? 'text' : 'password'}
                    value={currentPassword}
                    onFocus={() =>
                      setFocused({ ...focused, currentPassword: true })
                    }

                    onBlur={() =>
                      setFocused({
                        ...focused,
                        currentPassword: currentPassword.length > 0,
                      })
                    }
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <img onClick={() => handleVisibility('pass1')} src={hiddenImg} />
                  <label htmlFor="current-password">Текущий пароль*</label>
                </div>
                <div
                  className={`form-group ${
                    focused.newPassword || newPassword ? "focused" : ""
                  }`}
                >
                  
                  <input
                    id="new-password"
                    type={visibility.pass2.visible ? 'text' : 'password'}
                    value={newPassword}
                    onFocus={() =>
                      setFocused({ ...focused, newPassword: true })
                    }
                    onBlur={() =>
                      setFocused({
                        ...focused,
                        newPassword: newPassword.length > 0,
                      })
                    }
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <img onClick={() => handleVisibility('pass2')} src={hiddenImg} />
                  <label htmlFor="newPassword">Новый пароль*</label>
                </div>
                <div
                  className={`form-group ${
                    focused.confirmPassword || confirmPassword ? "focused" : ""
                  }`}
                >
                  <input
                    id="confirm-password"
                    type={visibility.pass3.visible ? 'text' : 'password'}
                    value={confirmPassword}
                    onFocus={() =>
                      setFocused({ ...focused, confirmPassword: true })
                    }
                    onBlur={() =>
                      setFocused({
                        ...focused,
                        confirmPassword: confirmPassword.length > 0,
                      })
                    }
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <img onClick={() => handleVisibility('pass3')} src={hiddenImg} />
                  <label htmlFor="confirmPassword">Подтвердите пароль* </label>
                </div>
                <button type="submit">Изменить</button>
              </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralProfile;
