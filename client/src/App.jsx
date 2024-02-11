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
      <ExamResults >

      </ExamResults>
    </div>
  );
}

export default App
