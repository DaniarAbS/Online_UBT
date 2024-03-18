import React, { useState } from 'react'; 
import './RegisterTeacher.css'; // Make sure to create a CSS file with this name 
import { useNavigate } from 'react-router-dom';
import { ChooseSubject } from '../../components/atoms/CustomSelect';
import { group, literal, subjectArr } from '../../data/data';
import styled from 'styled-components';
 
const Button = styled.div`
  background-color: #009172;
  color: #fff;
  width: 100%; 
  padding: 10px; 
  border: none; 
  border-radius: 4px;   
  cursor: pointer; 
`

function RegistrationForm() { 
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedLiteral, setSelectedLiteral] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const navigate = useNavigate();

  // const navigateToMainPage = () => {
  //   navigate('/test')
  // }

  const showSelectedLiteral = () => {
    console.log('Group:', selectedGroup, "\nLiteral", selectedLiteral, '\nSubject', selectedSubject);
  };
 
  return ( 
    <div className="registration-form"> 
      <h1>Регистрация</h1>
      <p className="welcome_text">Добро пожаловать!</p> 
      <form> 
        <div className="form-group"> 
          <input type="email" placeholder="Почта*" /> 
        </div> 
 
        <div className="form-group"> 
          <input type="text" placeholder="ФИО*" /> 
        </div> 
 
        <div className="form-group"> 
          <input type="password" placeholder="Пароль*" /> 
        </div> 
 
        <div className="form-group"> 
          <input type="password" placeholder="Подтвердите пароль" /> 
        </div> 

        <div className="class_Literal">
          <div className="form-group"> 
              <div className="choose_class">
                <ChooseSubject 
                  options={group} 
                  defaultValue='Выберите группу'
                  onSelect={setSelectedGroup}
                />
            </div> 
          </div>
          

          <div className="form-group"> 
            <div className="choose_literal">
              <ChooseSubject 
                options={literal} 
                defaultValue='Выберите литерал'
                onSelect={setSelectedLiteral}
              />
            </div> 
          </div>
        </div>


 
        <div className="form-group"> 
          <ChooseSubject 
            options={subjectArr} 
            defaultValue='Выберите предмет'
            onSelect={setSelectedSubject}
          />
        </div> 
      </form> 
          <Button onClick={showSelectedLiteral}>Register</Button>
      <p className="sing_in">Вы уже зарегистрированы? <a href="/login">Войти</a></p> 
    </div> 
  ); 
} 
 
export default RegistrationForm;
