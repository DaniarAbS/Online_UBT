import React from 'react';
import styled from 'styled-components';

import { Text } from '../atoms/CustomText/CustomText';
import { ChooseSubject } from '../atoms/CustomSelect'
import QuestionSet from '../moleculas/QuestionSet';
import { TextWithBg } from '../atoms/TextBg';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    background-color: #f7f7f7;
    flex-direction: column;
    align-items: center;
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
export const subjects = [
    { value: 'Математика', label: 'Математика', questionNum: 40},
    { value: 'Информатика', label: 'Информатика', questionNum: 40 },
    { value: 'Мат. сауаттылық', label: 'Мат. сауаттылық', questionNum: 10 },
  ];


const PreQuestionBar = ({text, text2, onChange, numberOfButtons}) => {
    const [selectedSubject, setSelectedSubject] = useState(subjects[0]?.value);

    const findLabelByValue = (value) => {
        const subject = subjects.find((subject) => subject.value === value);
      
        if (subject) {
          return subject.questionNum;
        }
      
        return null; // Return null or handle the case when the value is not found
      };

    return (
        <Container>
            <TextnSelectContainer>
                <Text type='chooseSubject'>Выберите предмет:</Text>
                <ChooseSubject onChange={onChange} type='subjectsSelect' options={subjects}></ChooseSubject>
            </TextnSelectContainer>
            <AnsweredContainer>
                <Text>{text}</Text>
                <TextWithBg bgColor='#009172' color='#ffffff'>{text2}</TextWithBg>
            </AnsweredContainer>
            <QuestionSet numberOfButtons={numberOfButtons}/>
        </Container>
    )
}

export const QuestionBar = ({text, onchange, numberOfButtons}) => {
  return (
        <PreQuestionBar numberOfButtons={numberOfButtons} onChange={onchange} text='Отвеченные вопросы' text2={text}/>
  );
};
