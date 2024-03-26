import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";

export const AdminRoute = () => {
    return(
        <Routes>
            <Route path='*' element={<NotFoundPage />}/>
            <Route path='/exam_analyse' element={<ExamAnalyse />}/>
            <Route path='/profile' element={<GeneralProfile />}/>
            <Route path='/exam' element={<AnalysisExam />}/>
        </Routes>
    )
}