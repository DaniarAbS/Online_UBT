import React from 'react';
import styled from 'styled-components';
import { colors } from '../../base/colors';
import { Text } from '../../components/atoms/CustomText/CustomText';
import styles from './ExamResults.module.css';
import { CustomButton } from '../../components/atoms/CustomButton/CustomButton';
import { subjectArr, points, publicInfo, examResultsArr, studentsRating } from '../../data/data.js';
import { ArrowDownOutlined } from '@ant-design/icons';
import { PointChart } from '../PointChart.jsx';

import { useLocation } from 'react-router-dom';

const ResultPoints = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    order: 2;
  }
`;
const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    order: 1;
  }
`;
const EstimateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    order: 3;
  }
`;
const AnalyseTopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3rem;
  width: 100%;

  @media screen and (max-width: 1000px) {
    order: 3;
    flex-direction: column;
    gap: 2rem;
  }
`;

const TwoTextButton = styled.button`
  background-color: ${colors.black_green};
  width: 40%;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;

  @media screen and (max-width: 1000px) {
    ${Text} {
      display: none;
    }
  }
`;
const GeneralInfo = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;
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
`;
const SuccessIndicator = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;
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
`;
const ScaleInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > *:first-child {
    text-align: left;
    font-weight: medium;
    width: 150px;
  }

  & > *:last-child {
    text-align: right;
    font-weight: bold;
  }
`;
const SubjectEstimateContainer = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;
const SubjectEstimateRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;

  & > *:first-child {
    text-align: left;
    font-weight: medium;
    width: 200px;
  }
`;
const AnalyseByTheme = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 1rem;
  align-items: start;
  width: 40rem;
  gap: 1rem;
`;
const AnalyseRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const ChartCont = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1000px) {
    order: 3;
  }
`;

const Element = styled.div`
  /* Your element styles go here */
  padding: 10px;
`;
const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
`;

export const ExamResults = () => {
  const location = useLocation();
  const resultData = location.state?.resultData || {};
  console.log('resultdata', resultData);

  const maxDisplayItems = 10;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '2rem' }}>
      <Text type="largex">Результаты экзамена</Text>
      <ResultPoints>
        <TwoTextButton>
          <Text color={colors.white}>Общий балл</Text>
          <Text type="large2xPlus" color={colors.white} fontWeight="500">
            {resultData.studentResult.overallScore}
          </Text>
        </TwoTextButton>
        <TwoTextButton>
          <Text color={colors.white}>Достижение</Text>
          <Text type="large2xPlus" color={colors.white} fontWeight="500">
            {resultData.studentResult.overallPercent}
          </Text>
        </TwoTextButton>
        <TwoTextButton>
          <Text color={colors.white}>Правильных</Text>
          <Text type="large2xPlus" color={colors.white} fontWeight="500">
            {resultData.studentResult.totalCorrect}
          </Text>
        </TwoTextButton>
        <TwoTextButton>
          <Text color={colors.white}>Не правильных</Text>
          <Text type="large2xPlus" color={colors.white} fontWeight="500">
            {resultData.studentResult.totalIncorrect}
          </Text>
        </TwoTextButton>
      </ResultPoints>
      <ContainerInfo>
        <GeneralInfo>
          {/* {publicInfo.map((publicInfo, index) => (
            <InfoRow key={index}>
              <Text type="medium">{publicInfo.title}</Text>
              <Text type="medium">{publicInfo.name}</Text>
            </InfoRow>
          ))} */}
          <InfoRow>
            <Text type="medium">Имя-Фамилия</Text>
            <Text type="medium">{studentResult.student?.name}</Text>
          </InfoRow>
          <InfoRow>
            <Text type="medium">Экзамен</Text>
            <Text type="medium">{studentResult.student?.surname}</Text>
          </InfoRow>
          <InfoRow>
            <Text type="medium">Дата начала</Text>
            <Text type="medium">{resultData.studentRank}</Text>
          </InfoRow>
          <InfoRow>
            <Text type="medium">Дата завершения</Text>
            <Text type="medium">{resultData.studentRank}</Text>
          </InfoRow>
          <InfoRow>
            <Text type="medium">1 часа 20 минут</Text>
            <Text type="medium">{resultData.studentRank}</Text>
          </InfoRow>
        </GeneralInfo>
        <SuccessIndicator>
          {points.map((points, index) => (
            <ScaleInfoRow key={index}>
              <Text>{points.name}</Text>
              <ScaleScoreRow>
                <div className={styles.percent}>
                  <div
                    className={styles.progress}
                    style={{ width: `${(points.point * 100) / subjectArr[index].quantity}%` }}
                  ></div>
                </div>
                <Text>
                  {points.point} из {subjectArr[index].quantity}
                </Text>
              </ScaleScoreRow>
            </ScaleInfoRow>
          ))}
        </SuccessIndicator>
        <SubjectEstimateContainer>
          {points.map((points, index) => (
            <InfoRow key={index}>
              <Text>{points.name}</Text>
              <Text>{points.point}</Text>
            </InfoRow>
          ))}
        </SubjectEstimateContainer>
      </ContainerInfo>
      <EstimateContent>
        <Text type="largex">Оценка по предметам</Text>
        {subjectArr.map((subjectArr, index) => (
          <SubjectEstimateRow key={index}>
            <Element>{subjectArr.label}</Element>
            <div style={{ width: '90%' }}>
              <ScrollContainer>
                {Array.from({ length: subjectArr.quantity }).map((_, buttonIndex) => (
                  <button
                    style={{ width: '50px', height: '50px', marginRight: '8px' }}
                    key={buttonIndex}
                  >{`${buttonIndex + 1}`}</button>
                ))}
              </ScrollContainer>
            </div>
          </SubjectEstimateRow>
        ))}
      </EstimateContent>
      <AnalyseTopContent>
        <AnalyseByTheme>
          <Text>Анализ по теме</Text>
          <AnalyseRow>
            <Text color={colors.font_gray}>Предмет</Text>
            <div style={{ display: 'flex', gap: '.5rem' }}>
              <Text color={colors.font_gray}>Достижение</Text>
              <ArrowDownOutlined style={{ color: `${colors.font_gray}` }} />
            </div>
          </AnalyseRow>
          {points.map((points, index) => (
            <AnalyseRow key={index}>
              {points.name}
              <CustomButton width="5rem">{`${Math.round((points.point * 100) / subjectArr[index].quantity)}%`}</CustomButton>
            </AnalyseRow>
          ))}
        </AnalyseByTheme>
        <AnalyseByTheme>
          <Text>Топ 10 участников</Text>
          {studentsRating.slice(0, maxDisplayItems).map((student, index) => (
            <AnalyseRow key={index}>
              <Text>
                {index + 1}.{student.name}
              </Text>
              <Text>{student.point}/140</Text>
            </AnalyseRow>
          ))}
          {studentsRating.length > maxDisplayItems && (
            <AnalyseRow>
              <Text>...</Text>
            </AnalyseRow>
          )}
        </AnalyseByTheme>
      </AnalyseTopContent>
      <ChartCont>
        <PointChart />
      </ChartCont>
    </div>
  );
};
