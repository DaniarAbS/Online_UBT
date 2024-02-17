import './App.css'
import { TestPage } from './pages/TestPage/TestPage'
import { ExamResults } from './pages/ExamResults/ExamResults'
import { HomePage } from './pages/Home'
import {NotFoundPage} from './pages/NotFoundPage'
import { useState, useRef, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskAdding } from './pages/TaskAdding/TaskAdding'
import RadioImg1 from './assets/img/radioImage_1.png'
import RadioImg2 from './assets/img/radioImage_2.png'
import RadioImg3 from './assets/img/radioImage_3.png'
import RadioImg4 from './assets/img/radioImage_4.png'

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
          <Route path='/exam_results' element={<ExamResults text1='57' text2='40' text3='47' text4='51' name="Absat Daniyar" school='Jambyl Innovation high college' startDate='1 нояб. 2023г., 14:26' endDate='1 нояб. 2023г., 17:56' point1='4' point2='2' point3='8' point4='6' point5='10' time='3 часа 20 минут'/>}/>
          <Route path='/test' element={<TestPage image1={RadioImg1} image2={RadioImg2} image3={RadioImg3} image4={RadioImg4} text3='The next question is bla bla bla'/>}/>
          <Route path='/new_task' element={<TaskAdding theme1='Основные свойства логарифма'/>}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
