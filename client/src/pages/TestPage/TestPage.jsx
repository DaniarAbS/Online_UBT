import React from "react";
import styled from "styled-components";

import { QuestionBar } from "../../components/organism/QuestionsBar";
import { AnswerPart } from "../../components/organism/AnswernEnd";
import { QuestionContent } from "../../components/organism/QuestionContent";
import { Text } from "../../components/atoms/CustomText/CustomText";
import { ClockCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { RadioExample } from "../../components/atoms/CustomRadio/CustomRadio";
import { colors } from "../../base/colors";
import { useState } from "react";

import './TestPage.css'
import { AppstoreOutlined, WarningOutlined } from "@ant-design/icons";
import { CustomButton } from "../../components/atoms/CustomButton/CustomButton";
import { subjects } from "../../components/organism/QuestionsBar";
import CountDownTimer from '../../components/atoms/CountDown'


const TestContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    /* width: 80%; */
    width: 100%;
    gap: 1.5rem;

    @media screen and (max-width: 900px){
        
    }
`

// const QuestionAnswerContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     gap: 1.5;
// `

const AcceptContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`
const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    width: 100%;
    gap: 1.5;

    @media screen and (max-width: 1000px){
        flex-direction: column;
        width: 100%;
        order: 2;
        flex-wrap: wrap;
    }
`
const MainInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    gap: 2rem;
    font-size: 20px;
    text-align: start;

    @media screen and (max-width: 900px){
        font-size: 15px;
    }
`
const IconTextContainer = styled.div`
    background-color: #F7F7F7;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    
    @media screen and (max-width: 900px){
        font-size: 15px;
        width: 40%;
        padding: 5px;
    }
`
const GivenTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: .5rem;
    gap: 1.5rem;
    border-radius: 20px;
`
const AnswerBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`
const PrevNextBtnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 900px){
        order: 2;
        justify-content: space-evenly;
    }
`
const IconButton = styled.button`
    background-color: ${colors.black_green};
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 1000px){
        ${Text} {
            display: none;
        }
    }

`
const PopupContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 999;
`;
const TextIcon = ({bgColor, text, color, isActive}) => {
    return (
        <IconTextContainer style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
            <ClockCircleOutlined height='30px' width='30px'/>
            <CountDownTimer initialTime='01:30:00' isActive={isActive}/>
        </IconTextContainer>
    )
}

export const TestPage = ({text, text2, text3, image1, image2, image3, image4 }) => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [popupVisible2, setPopupVisible2] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(subjects[0]?.value);
    const [timerActive, setTimerActive] = useState(true);

    const handleChange = (value) => {
      console.log(`${value}`); 
      setSelectedSubject(value);
    };

    const findLabelByValue = (value) => {
        const subject = subjects.find((subject) => subject.value === value);
      
        if (subject) {
          return subject.questionNum;
        }
      
        return null; // Return null or handle the case when the value is not found
      };


    const togglePopup = () => {
      setPopupVisible(!popupVisible);
      setButtonClicked(!buttonClicked);
    };

    const togglePopup2 = () => {
        setPopupVisible2(!popupVisible2)
        setTimerActive(false);
    }
    
    return (
    <TestContainer>
        <div className="main-container">
            <div className={`responsive-container ${popupVisible ? 'hidden' : ''}`}>
                <QuestionBar numberOfButtons={findLabelByValue(selectedSubject)} onchange={handleChange} />
            </div>

            {popupVisible && (
                <div className="popup-container">
                    <QuestionBar numberOfButtons={findLabelByValue(selectedSubject)} onchange={handleChange}/>
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}

            {popupVisible2 && (
                <PopupContainer>
                    <WarningOutlined  style={{ fontSize: '40px' }}/>
                    <Text >Вы хотите завершить экзамен сейчас?</Text>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '.5rem'}}>
                        <CustomButton sizeType='popupButton' color={colors.white} bgColor={colors.black_green} onClick={togglePopup2}>Отмена</CustomButton>
                        <CustomButton sizeType='popupButton' color={colors.white} bgColor={colors.black_green} onClick={togglePopup2}>Завершить</CustomButton>
                    </div>
                </PopupContainer>
            )}

        </div>
        <AcceptContent>  
            <MainContent>
                <GivenTaskContainer>
                    <MainInfo>
                        <Text weight='700'>{selectedSubject}. Вопрос {4} из {findLabelByValue(selectedSubject)}</Text>
                        <TextIcon bgColor='#f7f7f7' color='#000000' isActive={timerActive}/>
                    </MainInfo>
                    <Text type='large' weight='400'>{text3}</Text>
                    <img width='299px' height='394px' src="https://s3-alpha-sig.figma.com/img/2a00/682d/90b4330c798cd76f14e805bbd56b4c8f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZSS1WKr~mzu6oeAwBBVHMWXK6Mt86sDSGa-oJ5ZjSxcnJNxCIwuu6ywpVAsNQg6R9Qgbl5NtSr~vfy2-MXKkr9fgMa3h5ruvcizZzVEXBfkU56RVCz1StZ1~86ghjLW6NhQGSLkXSPpxWGoJnbfID9Iy8qaZqm9bItEj~~jXlXWTKzYKohRNVuy~TCUOTqvpmOWWy-W0zqxywfFP~LBE1CqjbXo-bG3H31mLwPq399X3wYykyaHmsKtwsQ41FdMJuLsODWRPEJD1eqNtTsfB3R8Uc2~90QeZ6CSt0jr12hpZzE~GBRt6c3Gbif9cocRtB-NUCJHrJ4ckBzsQPzkazw__" alt="" />
                </GivenTaskContainer>
                <AnswerBlock>
                    <PrevNextBtnsContainer>
                        <IconButton>
                            <LeftCircleOutlined style={{color: `${colors.white}`, height: '20px', width: '20px', display: 'flex', alignItems: 'center'}}/>
                            <Text className='hidden_text' type='medium' color={colors.white} fontWeight='500'>Предыдущий</Text>
                        </IconButton>
                        <button className={`popup-button`}
                        onClick={togglePopup}>
                            <AppstoreOutlined className={`${buttonClicked ? 'clicked' : ''}`}/>
                        </button>
                        <IconButton>
                            <Text className='hidden_text' type='medium' color={colors.white} fontWeight='500'>Следующий</Text>
                            <RightCircleOutlined style={{color: `${colors.white}`, height: '20px', width: '20px', display: 'flex', alignItems: 'center'}}/>
                        </IconButton>
                    </PrevNextBtnsContainer>
                    <RadioExample option1='A' option2='B' option3='C' option4='D' image1={image1} image2={image2} image3={image3} image4={image4}/>
                </AnswerBlock>   
            </MainContent>
            <CustomButton onClick={togglePopup2} bgColor={colors.black_green} color={colors.white}>
                Завершить тест
            </CustomButton>
        </AcceptContent>
    </TestContainer>
    )
}