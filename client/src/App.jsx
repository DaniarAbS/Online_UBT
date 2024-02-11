import './App.css'
import { CustomButton } from './components/atoms/CustomButton/CustomButton'
import { AnswerPart } from './components/organism/AnswernEnd'
import { TestPage } from './pages/TestPage/TestPage'
import RadioImg1 from './assets/img/radioImage_1.png'
import RadioImg2 from './assets/img/radioImage_2.png'
import RadioImg3 from './assets/img/radioImage_3.png'
import RadioImg4 from './assets/img/radioImage_4.png'
import { useState, useRef, useEffect } from 'react'
import { ExamResults } from './pages/ExamResults/ExamResults'

function App() {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div>
      <ExamResults text1='57' text2='40' text3='47' text4='51' name='Absat Daniyar' school='Жамбыл Инновациялық жоғары колледж' startDate='1 нояб. 2023 г., 14:26' endDate='1 нояб. 2023 г., 15:46' time='1 часа 20 минут' point1='4' point2='2' point3='7' point4='10' point5='5'/>
    </div>
  );
}

export default App
