import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";

export const StudentRoute = () => {
    return(
        <Routes>
            <Route path='*' element={<NotFoundPage />}/>
            <Route path='/exam_results' element={<ExamResults/>}/>
            <Route path='/test' element={<TestPage />}/>
            <Route path='/exams' element={<Exams />}/>
            <Route path='/filter' element={<ExamPage />}/>
        </Routes>
    )
}