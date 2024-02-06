import React from 'react';
import styled from 'styled-components';

import { Text } from '../atoms/CustomText/CustomText';
import { ChooseSubject } from '../atoms/CustomSelect'
import QuestionSet from '../moleculas/QuestionSet';
import { TextWithBg } from '../atoms/TextBg';

const Container = styled.div`
    display: flex;
    background-color: #f7f7f7;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const TextnSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start; 
    width: 100%;
    gap: 20px;
`

const AnsweredContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px 0;
    width: 100%;

`

const subjects = [
    { value: 'math', label: 'Mathematics' },
    { value: 'eng', label: 'English' },
    { value: 'sci', label: 'Science' },
  ];


const PreQuestionBar = ({text, text2}) => {
    return (
        <Container>
            <TextnSelectContainer>
                <Text type='chooseSubject'>Выберите предмет:</Text>
                <ChooseSubject type='subjectsSelect' options={subjects}></ChooseSubject>
            </TextnSelectContainer>
                {/* <ContainerAnswer text='Отвеченные вопросы' text2='3'></ContainerAnswer> */}
            <AnsweredContainer>
                <Text>{text}</Text>
                <TextWithBg bgColor='#009172' color='#ffffff'>{text2}</TextWithBg>
            </AnsweredContainer>
            <QuestionSet />
        </Container>
    )
}

export const QuestionBar = ({text}) => {
  return (
        <PreQuestionBar  text='Отвеченные вопросы' text2={text}/>
  );
};
