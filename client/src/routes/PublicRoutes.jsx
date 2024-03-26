import React from "react";
import { Route, Routes } from "react-router-dom";
import { RegistrationForm } from "../pages/RegisterForTeacher/RegisterTeacher";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RoleSelectionForm } from "../pages/FilterForm/FilterForm";

export const Public = ({handleRoleSelect, handleLogin, selectedRole}) => {
    return(
        <Routes>
            <Route path="/" element={<RegistrationForm />}/>
            <Route path="/register" element={<RegistrationForm />}/>
            <Route path="/role" element={<RoleSelectionForm onSelect={handleRoleSelect} selectedRole={selectedRole}/>}/>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} selectedRole={selectedRole}/>}/>
        </Routes>
    )
}