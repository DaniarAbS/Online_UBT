import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FilterForm.css";
import { FilterChoose } from "../../components/atoms/FilterChoose/FilterChoose";
import {filterPage} from '../../data/page_text'

export const RoleSelectionForm = () => {
  const [role, setRole] = useState("");

  const navigate = useNavigate(); // Instantiate the navigation function

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (role){
      case 'Ученик': 
        navigate('/')
        break;
      case 'Учитель': 
        navigate("/login");
        break;
      case 'Админ': 
        console.log('admin')
        break;
    }
  };

  const handleDataFromChild = (childData) => {
    setRole(childData);
  };

  <submit className="on">
    Role
    <Selection-Form></Selection-Form>
  </submit>;

  return (
    <div className="role-selection-container">
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <h2>{filterPage.title}</h2>
        <p>{filterPage.miniTitle}</p>
      </div>
      <form style={{display: 'flex', flexDirection: 'column', gap: '2rem'}} onSubmit={handleSubmit}>
        <FilterChoose onDataReceived={handleDataFromChild}/>
        <button type="submit" className="filter-button">
          {filterPage.logInText}
        </button>
      </form>
    </div>
  );
}