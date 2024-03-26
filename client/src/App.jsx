import './App.css'
import { TestPage } from './pages/TestPage/TestPage'
import { ExamResults } from './pages/ExamResults/ExamResults'
import { HomePage } from './pages/Home'
import { NotFoundPage } from './pages/NotFoundPage'
import { useState, useRef, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskAdding } from './pages/TaskAdding/TaskAdding'
import { RegistrationForm } from './pages/RegisterForTeacher/RegisterTeacher'
import Header from './components/header/header'
import SideBar from './components/sidebar/SideBar'
import ExamPage from './pages/Filter/FilterExam'
import { ExamAnalyse } from './pages/ExamAnalyse'
import { RoleSelectionForm } from './pages/FilterForm/FilterForm'
import { LoginPage } from './pages/LoginPage/LoginPage'
import GeneralProfile from './pages/GeneralProfile/GeneralProfile'
import SubjectAnaysisForm from './pages/SubjectAnalysisForm/SubjectAnaysisForm'
import {QuestionDatabase} from './pages/QuestionsForm/QuestionsForm'
import {AnalysisExam} from './pages/AnalysisExam/AnalysisExam'
import Exams from './pages/Exams'
import { Public } from './routes/PublicRoutes'

export const ROLES = {
	Public: 'public',
	Teacher: 'teacher',
	Admin: 'admin',
  Student: 'student'
}

function App() {
	const [popupVisible, setPopupVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [userRole, setUserRole] = useState(ROLES.Public)

	const togglePopup = () => {
		setPopupVisible(!popupVisible);
	};

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
    console.log(role);
  }

  const handleLogin = () => {
    setUserRole(selectedRole)
    console.log(selectedRole);
  }

  return (
    <div>
      <BrowserRouter>
        {userRole !== 'public' && <SideBar selectedRole={selectedRole}/>}
          <div className='_container'>
          <Routes>
            <Route path="/" element={<RegistrationForm />}/>
            <Route path="/register" element={<RegistrationForm />}/>
            <Route path="/role" element={<RoleSelectionForm onSelect={handleRoleSelect} selectedRole={selectedRole}/>}/>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} selectedRole={selectedRole}/>}/>
            <Route path='/question_base' element={<QuestionDatabase userRole={userRole}/>}/>
            <Route path='/exam_results' element={<ExamResults/>}/>
            <Route path='/test' element={<TestPage />}/>
            <Route path='/new_task' element={<TaskAdding />}/>
            <Route path='*' element={<NotFoundPage />}/>
            <Route path='/filter' element={<ExamPage />}/>
            <Route path='/exam_analyse' element={<ExamAnalyse />}/>
            <Route path='/profile' element={<GeneralProfile />}/>
            <Route path='/subject_analyse' element={<SubjectAnaysisForm />}/>
            <Route path='/exam' element={<AnalysisExam />}/>
            <Route path='/exams' element={<Exams />}/>
          </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App
