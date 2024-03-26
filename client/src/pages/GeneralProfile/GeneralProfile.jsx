import { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useNavigate, useParams } from "react-router-dom";
import accountCircleImg from "../../assets/imgs/account_circle.png";
import passwordImg from "../../assets/imgs/password.jpg";
import navigationImg1 from "../../assets/imgs/navigation.png";
import navigationImg2 from "../../assets/imgs/navigation.png";
import editImg from "../../assets/imgs/edit.png";
import hiddenImg from "../../assets/imgs/hidden.png";
import visibilityImg from "../../assets/imgs/visibility.png";
import "./GeneralProfile.css";

const GeneralProfile = () => {
  const [info, setInfo] = useState([]);
  const [activeSection, setActiveSection] = useState("personalInfo");
  const [isModalOpen, setModalOpen] = useState(false);
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
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: ''
  })
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3500/0').then(res => setValues(res.data)).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3500/0').then(res => {
      setInfo({...values, name: res.data.name, surname: res.data.surname, email: res.data.email})
    })
    .catch(err => console.log(err))
  }, [])

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
    if (newPassword === confirmPassword) {
      console.log("Password updated!");
    } else {
      console.log("Passwords do not match!");
    }
  };

 async function profileSubmit() {
    const ax = await axios.put('http://localhost:3500/0', values).then(res => {

    })
    .catch(err => console.log(err))
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
            <img onClick={openModal} src={editImg} />  
          </div>
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <form className="modal-box" onSubmit={profileSubmit}>
                  <h2>Обновить профиль</h2>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                      <div className={`form-group ${focused.name || values.name ? "focused" : ""}`}>
                        <input 
                          type="text" 
                          id="change-name"
                          value={values.name}
                          onFocus={() =>
                            setFocused({ ...focused, name: true })}
                          onBlur={() =>
                            setFocused({
                              ...focused,
                              name: values.name.length > 0,
                            })
                          }
                          onChange={(e) => setValues({...values, name: e.target.value})}
                        />
                        <label htmlFor="change-name">Имя*</label>
                      </div>
                      <div className={`form-group ${focused.surname || values.surname ? "focused" : ""}`}>
                        <input 
                          type="text" 
                          id="change-surname"
                          value={values.surname}
                          onFocus={() =>
                            setFocused({ ...focused, surname: true })}
                          onBlur={() =>
                            setFocused({
                              ...focused,
                              surname: values.surname.length > 0,
                            })
                          }
                          onChange={(e) => setValues({...values, surname: e.target.value})}
                        />
                        <label htmlFor="change-surname">Фамилия*</label>
                      </div>
                      <div className={`form-group ${focused.email || values.email ? "focused" : ""}`}>
                        <input 
                          type="text" 
                          id="change-email"
                          value={values.email}
                          onFocus={() =>
                            setFocused({ ...focused, email: true })}
                          onBlur={() =>
                            setFocused({
                              ...focused,
                              email: values.email.length > 0,
                            })
                          }
                          onChange={(e) => setValues({...values, email: e.target.value})}
                        />
                        <label htmlFor="change-email">Почта</label>
                      </div>
                    </div>

                  <div className="modal-buttons">
                    <button onClick={closeModal}>Отмена</button>
                    <button onSubmit={profileSubmit} style={{color: '#009172'}}>Сохранить</button>
                  </div>
                          
                </form>
              </div>
            </div>
          )}
             <div className="personal-info-grid">
             <div className="info-box">
               <div className="info-label">Имя-фамилия</div>
               <div className="info-value">{info.name}  {info.surname}</div>
             </div>
             <div className="info-box">
               <div className="info-label">Почта</div>
               <div className="info-value">{info.email}</div>
             </div>
             <div className="info-box">
               <div className="info-label">ИИН</div>
               <div className="info-value">1111 2222 3333</div>
             </div>
             <div className="info-box">
               <div className="info-label">Класс</div>
               <div className="info-value">11</div>
             </div>
             <div className="info-box">
               <div className="info-label">Литерал</div>
               <div className="info-value">Ф</div>
             </div>
             <div className="info-box">
               <div className="info-label">Предмет</div>
               <div className="info-value">Subject Placeholder</div>
             </div>
           </div>

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
                  <img onClick={() => handleVisibility('pass1')} src={visibility.pass1.visible == false ? hiddenImg : visibilityImg} />
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
                  <img onClick={() => handleVisibility('pass2')} src={visibility.pass2.visible == false ? hiddenImg : visibilityImg} />
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
                  <img onClick={() => handleVisibility('pass3')} src={visibility.pass3.visible == false ? hiddenImg : visibilityImg} />
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