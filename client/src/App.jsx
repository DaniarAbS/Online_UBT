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
          <Route index element={<HomePage />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/exam_results' element={<ExamResults/>}/>
          <Route path='/test' element={<TestPage />}/>
          <Route path='/new_task' element={<TaskAdding theme1='Основные свойства логарифма'/>}/>
          <Route path='*' element={<NotFoundPage />}/>
          <Route path='/register_teacher' element={<RegistrationForm />}/>
          <Route path='filter' element={<ExamPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
