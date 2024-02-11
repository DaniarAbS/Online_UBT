import React from "react";
import styled from "styled-components";
import { colors } from "../../base/colors";
import { Text } from "../../components/atoms/CustomText/CustomText";
import { Result, Progress } from "antd";
import './ExamResults.css'

const WholeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
`
const ResultPoints = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    width: 100%;

    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
        order: 3;
    }
    
`
const IconButton = styled.button`
    background-color: ${colors.black_green};
    width: 40%;
    height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 2rem;

    @media screen and (max-width: 1000px){
        ${Text} {
            display: none;
        }
    }
`
const ContainerInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 1200px){
        flex-wrap: wrap;
    }
`
const GeneralInfo = styled.div`
    background-color: #F7F7F7;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
`
const SuccessIndicator = styled.div`
    background-color: #F7F7F7;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
`
const SubjectEstimateContainer = styled.div`
    background-color: #F7F7F7;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
`
const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    & > *:first-child {
        text-align: left;
        font-weight: medium;
    }

    & > *:last-child {
        text-align: right;
        font-weight: bold;
    }
`
const ScaleScoreRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 230px;
    /* gap: 3rem; */

    & > *:first-child {
        text-align: left;
        font-weight: medium;
        width: 130px;
    }

    & > *:last-child {
        text-align: right;
        font-weight: bold;
    }
`
const ScaleInfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 3rem; */

    & > *:first-child {
        text-align: left;
        font-weight: medium;
        width: 150px;
    }

    & > *:last-child {
        text-align: right;
        font-weight: bold;
    }
`

export const ExamResults = ({text1, text2, text3, text4, name, school, startDate, endDate, time, point1, point2, point3, point4, point5}) => {
    return (
    <WholeContainer>
        <Text type='large2x'>Результаты экзамена</Text>
        <ResultPoints>
            <IconButton>
                <Text color={colors.white}>Общий балл</Text>
                <Text type='large2xPlus' color={colors.white} fontWeight='500'>{text1}</Text>
            </IconButton>
            <IconButton>
                <Text color={colors.white}>Достижение{'(%)'}</Text>
                <Text type='large2xPlus' color={colors.white} fontWeight='500'>{text2}</Text>
            </IconButton>
            <IconButton>
                <Text color={colors.white}>Правильных</Text>
                <Text type='large2xPlus' color={colors.white} fontWeight='500'>{text3}</Text>
            </IconButton>
            <IconButton>
                <Text color={colors.white}>Неправильных</Text>
                <Text type='large2xPlus' color={colors.white} fontWeight='500'>{text4}</Text>
            </IconButton>
        </ResultPoints>
        <ContainerInfo>
            <GeneralInfo>
                <InfoRow>
                    <Text type='medium'>Имя-фамилия</Text>
                    <Text type='medium'>{name}</Text>
                </InfoRow>
                <InfoRow>
                    <Text type='medium'>Экзамен</Text>
                    <Text type='medium'>{school}</Text>
                </InfoRow>
                <InfoRow>
                    <Text type='medium'>Дата начала</Text>
                    <Text type='medium'>{startDate}</Text>
                </InfoRow>
                <InfoRow>
                    <Text type='medium'>Дата завершения</Text>
                    <Text type='medium'>{endDate}</Text>
                </InfoRow>
                <InfoRow>
                    <Text type='medium'>Продолжительность</Text>
                    <Text type='medium'>{time}</Text>
                </InfoRow>
            </GeneralInfo>
            <SuccessIndicator>
                <ScaleInfoRow>
                    <Text>Грамотность чтения</Text>
                    <ScaleScoreRow>
                        <div class="percent">
                            <div class="progress" style={{width: `${point1 * 10}%`}}></div>
                        </div>
                        <Text>{point1} из 10</Text>
                    </ScaleScoreRow>
                </ScaleInfoRow>
                <ScaleInfoRow>
                    <Text>Математическая грамотность</Text>
                    <ScaleScoreRow>
                        <div class="percent">
                            <div class="progress" style={{width: `${point2 * 10}%`}}></div>
                        </div>
                        <Text>{point2} из 10</Text>
                    </ScaleScoreRow>
                </ScaleInfoRow>
                <ScaleInfoRow>
                    <Text>История Казахстана</Text>
                    <ScaleScoreRow>
                        <div class="percent">
                            <div class="progress" style={{width: `${point3 * 10}%`}}></div>
                        </div>
                        <Text>{point3} из 10</Text>
                    </ScaleScoreRow>
                </ScaleInfoRow>
                <ScaleInfoRow>
                    <Text>Математика</Text>
                    <ScaleScoreRow>
                        <div class="percent">
                            <div class="progress" style={{width: `${point4 * 10}%`}}></div>
                        </div>
                        <Text>{point4} из 10</Text>
                    </ScaleScoreRow>
                </ScaleInfoRow>
                <ScaleInfoRow>
                    <Text>Информатика</Text>
                    <ScaleScoreRow>
                        <div class="percent">
                            <div class="progress" style={{width: `${point5 * 10}%`}}></div>
                        </div>
                        <Text>{point5} из 10</Text>
                    </ScaleScoreRow>
                </ScaleInfoRow>
            </SuccessIndicator>
            <SubjectEstimateContainer>
                <InfoRow>
                    <Text>Грамотность чтения</Text>
                    <Text>{point1}</Text>
                </InfoRow>
                <InfoRow>
                    <Text>Математическая грамотность</Text>
                    <Text>2</Text>
                </InfoRow>
                <InfoRow>
                    <Text>История Казахстана</Text>
                    <Text>2</Text>
                </InfoRow>
                <InfoRow>
                    <Text>Математика</Text>
                    <Text>2</Text>
                </InfoRow>
                <InfoRow>
                    <Text>Информатика</Text>
                    <Text>2</Text>
                </InfoRow>
            </SubjectEstimateContainer>
        </ContainerInfo>
        <div class="skills">
            <div class="skill-per" style={{ maxWidth: '40%' }}></div>
        </div>
    </WholeContainer>
    )
}