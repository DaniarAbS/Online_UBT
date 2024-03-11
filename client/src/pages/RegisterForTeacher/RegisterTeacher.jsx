import React, { useState } from 'react'; 
import './RegisterTeacher.css'; // Make sure to create a CSS file with this name 
import { useNavigate } from 'react-router-dom';
import { ChooseSubject } from '../../components/atoms/CustomSelect';
import { group, literal, subjectArr } from '../../data/data';
import { registerTeacherPage } from '../../data/page_text';
 
function RegistrationForm() { 
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedLiteral, setSelectedLiteral] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [info, setInfo] = useState({
    email: '',
    fullname: '',
    password: '',
    password2: '',
    literal: '',
    group: '',
    subject: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(info);
    navigate('/filter_form')
  };
 
  return ( 
    <div className="registration-form"> 
      <h1>{registerTeacherPage.title}</h1>
      <p className="welcome_text">{registerTeacherPage.miniTitle}</p> 
      <div> 
        <div className="form-group"> 
          <input 
            type="email" 
            name="email"
            value={info.email}
            onChange={handleInputChange} 
            required
          />  
          <label htmlFor="email">Почта*</label>
        </div>
 
        <div className="form-group"> 
          <input 
            type="text"
            name="fullname"
            value={info.fullname}
            onChange={handleInputChange}
            required
          /> 
          <label htmlFor="fullname">ФИО*</label>
        </div> 
 
        <div className="form-group"> 
          <input 
            type="password"
            name="password"
            value={info.password}
            onChange={handleInputChange}
            required
          /> 
          <label htmlFor="password">Пароль*</label>
        </div> 
 
        <div className="form-group"> 
          <input 
            type="password" 
            name="password2"
            value={info.password2}
            onChange={handleInputChange}
            required
          /> 
          <label htmlFor="password2">Подтвердите пароль*</label>
        </div> 

        <div className="class_Literal">
          <div className="form-group"> 
              <div className="choose_class">
                <ChooseSubject 
                  options={group} 
                  defaultValue='Выберите группу'
                  onSelect={(value) => setInfo((prevInfo) => ({ ...prevInfo, group: value }))}
                />
            </div> 
          </div>
          
          <div className="form-group"> 
            <div className="choose_literal">
              <ChooseSubject 
                options={literal} 
                defaultValue='Выберите литерал'
                onSelect={(value) => setInfo((prevInfo) => ({ ...prevInfo, literal: value }))}
              />
            </div> 
          </div>
        </div>
 
        <div className="form-group"> 
          <ChooseSubject 
            options={subjectArr} 
            defaultValue='Выберите предмет'
            onSelect={(value) => setInfo((prevInfo) => ({ ...prevInfo, subject: value }))}
          />
        </div> 
          <button onClick={handleSubmit}>{registerTeacherPage.registerText}</button>
      </div> 
      <p className="sing_in">{registerTeacherPage.alreadyRegister} <a href="/login">{registerTeacherPage.logInText}</a></p> 
    </div> 
  ); 
} 
 
export default RegistrationForm;
