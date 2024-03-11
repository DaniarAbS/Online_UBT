import './App.css'
import { TestPage } from './pages/TestPage/TestPage'
import { ExamResults } from './pages/ExamResults/ExamResults'
import { HomePage } from './pages/Home'
import { NotFoundPage } from './pages/NotFoundPage'
import { useState, useRef, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskAdding } from './pages/TaskAdding/TaskAdding'
import RegistrationForm from './pages/RegisterForTeacher/registerTeacher'
import Header from './components/header/header'
import SideBar from './components/sidebar/SideBar'
import ExamPage from './pages/Filter/FilterExam'
import { ExamAnalyse } from './pages/ExamAnalyse'
import { RoleSelectionForm } from './pages/FilterForm/FilterForm'
import { LoginPage } from './pages/LoginPage/LoginPage'

const ROLES = {
	'User': 2001,
	'Teacher': 1984,
	'Admin': 5150
}

function App() {
	const [popupVisible, setPopupVisible] = useState(false);

	const togglePopup = () => {
		setPopupVisible(!popupVisible);
	};

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<RegistrationForm />}/>
          <Route path='/register_teacher' element={<RegistrationForm />}/>
          <Route path='/filter_form' element={<RoleSelectionForm />}/>
          <Route path='/exam_results' element={<ExamResults/>}/>
          <Route path='/test' element={<TestPage />}/>
          <Route path='/new_task' element={<TaskAdding theme1='Основные свойства логарифма'/>}/>
          <Route path='*' element={<NotFoundPage />}/>
          <Route path='/filter' element={<ExamPage />}/>
          {/* <Route path='/chart' element={<MyChart />}/> */}
          <Route path='/exam_analyse' element={<ExamAnalyse />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
