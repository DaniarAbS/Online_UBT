import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";

export const TeacherRoute = ({userRole}) => {
    return(
        <Routes>
            <Route path='*' element={<NotFoundPage />}/>
            <Route path='/question_base' element={<QuestionDatabase userRole={userRole}/>}/>
            <Route path='/subject_analyse' element={<SubjectAnaysisForm />}/>
            <Route path='/new_task' element={<TaskAdding />}/>
        </Routes>
    )
}