import React, { useState } from 'react'; 
import './RegisterTeacher.css'; // Make sure to create a CSS file with this name 
 
function RegistrationForm() { 
  // You can manage state and functions to handle form submission here 
 
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
                <select>
                  <option>Класс</option>
                  <option>9</option>
                  <option>10</option> 
                  <option>11</option> 
                </select> 
            </div> 
          </div>
          

          <div className="form-group"> 
            <div className="choose_literal">
              <select>
                <option>Литерал</option> 
                <option>А</option> 
                <option>Б</option>
                <option>С</option>  
              </select> 
            </div> 
          </div>
        </div>


 
        <div className="form-group"> 
          <select> 
            <option>Предмет</option>
            <option>Математика</option> 
            <option>Физика</option> 
          </select> 
        </div> 
        
        
          <button type="submit">Регистрация</button>
         
      </form> 
      <p className="sing_in">Вы уже зарегистрированы? <a href="/login">Войти</a></p> 
    </div> 
  ); 
} 
 
export default RegistrationForm;
