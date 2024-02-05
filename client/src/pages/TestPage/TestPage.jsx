import React from "react";
import styled from "styled-components";
import RadioImg1 from '../../assets/img/radioImage_1.png'
import RadioImg2 from '../../assets/img/radioImage_2.png'
import RadioImg3 from '../../assets/img/radioImage_3.png'
import RadioImg4 from '../../assets/img/radioImage_4.png'
import { QuestionBar } from "../../components/organism/QuestionsBar/QuestionsBar";
import { AnswerPart } from "../../components/organism/AnswernEnd/AnswernEnd";
import { QuestionContent } from "../../components/organism/QuestionContent/QuestionContent";


const TestContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    /* width: 80%; */
    max-width: 1200px;
`

export const TestPage = () => {
    return (
    <TestContainer>
        <QuestionBar text='3'/>
        <QuestionContent text='Математика. Вопрос 4 из 40' text2='03.11.57' text3='Суретте көрсетілген параболаның формуласын табыңыз'></QuestionContent>
        <AnswerPart btnWidth='220px' btnHeight='48px' image1={RadioImg1} image2={RadioImg2} image3={RadioImg3} image4={RadioImg4}/>
    </TestContainer>
    )
}