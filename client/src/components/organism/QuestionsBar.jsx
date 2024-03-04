import React from 'react';
import styled from 'styled-components';

import { Text } from '../atoms/CustomText/CustomText';
import { ChooseSubject } from '../atoms/CustomSelect'
import QuestionSet from '../moleculas/QuestionSet';
import { TextWithBg } from '../atoms/TextBg';
import { subjectArr } from '../../data/data';
import ButtonGrid from '../moleculas/ButtonGrid';
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
// const subjects = [
//     { value: 'math', label: 'Mathematics' },
//     { value: 'eng', label: 'English' },
//     { value: 'sci', label: 'Science' },
//   ];

const QuestionSetContainer = styled.div`
    overflow: auto; /* Enable scrolling if content exceeds the container */
    
`;

const PreQuestionBar = ({ text2 }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(subjectArr[0].quantity);

    return (
        <Container>
            <TextnSelectContainer>
                <Text type='chooseSubject'>Выберите предмет:</Text>
                <ChooseSubject 
                    onSelect={(selectedOption) => {
                        const selectedSubject = subjectArr.find((subject) => subject.name === selectedOption);
                        setSelectedQuantity(selectedSubject ? selectedSubject.quantity : null);
                      }}
                    options={subjectArr.map((subject) => ({
                        value: subject.name,
                        label: subject.name,
                      }))}
                    defaultValue={subjectArr[0].name}
                ></ChooseSubject>
            </TextnSelectContainer>
            <AnsweredContainer>
                <Text>Отвеченные вопросы</Text>
                <TextWithBg bgColor='#009172' color='#ffffff'>{text2}</TextWithBg>
            </AnsweredContainer>
            <QuestionSetContainer>
                <ButtonGrid numberOfButtons={selectedQuantity} />
            </QuestionSetContainer>
        </Container>
    )
}

export const QuestionBar = ({text}) => {
  return (
        <PreQuestionBar text2={text}/>
  );
};
