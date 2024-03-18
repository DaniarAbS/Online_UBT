// GradesTable.jsx
import React, { useState } from "react";
import {QuestionDatabase} from "../QuestionsForm/QuestionsForm"; // If the file is QuestionsForm.jsx
import "./SubjectAnalysisForm.css"; // Make sure to create a corresponding CSS file for styling
import styled from "styled-components";

const Table = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    width: 100%;

    & > *:first-child {
        font-weight: bold;
    }
    @media (max-width: 768px) {
      font-size: 0.3rem;
    }
    @media (max-width: 992px) {
      font-size: 1rem;
    }
`
const TableRow = styled.div`
    display: flex;
`
const Cell = styled.div`
    flex: 1;
    padding: 10px;
    @media (max-width: 768px) {
      padding: 7px 3px;
      font-size: 0.5rem;
    }
`
const ChangeButton = styled.button`
  color: #000;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: min-content;
  background-color: unset;
  font-size: 0.8rem;
`;

const GradesTable = () => {

  const [currentPage, setCurrentPage] = useState(0);

  // Replace with your actual data source
  const gradesData = [
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    // ... more data
  ];

  
const itemsPerPage = 10;
const startIndex = currentPage * itemsPerPage;
const endIndex = Math.min(startIndex + itemsPerPage, gradesData.length);
const visibleData = gradesData.slice(startIndex, endIndex);


  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
};

const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
};

  return (
    <div className="box">
      <div className="title">
        <h1 className="text-lg font-bold mb-4">Анализ предмета</h1>
      </div>
      <div className="grades-table-container">
        <h2>Оценка по предметам</h2>
        <div style={{display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'end', borderRadius: '0 0 1rem 1rem', paddingTop: '1rem'}}>
                    <Table>
                        <TableRow>
                            <Cell>#</Cell>
                            <Cell>Имя</Cell>
                            <Cell>Фамилия</Cell>
                            <Cell>Класс</Cell>
                            <Cell>Средний балл</Cell>
                            <Cell>Результаты 1 экзамена</Cell>
                            <Cell>Результаты 2 экзамена</Cell>
                        </TableRow>
                        {visibleData.map((gradesData, index) => (
                            <TableRow key={index}>
                                <Cell>{startIndex + index + 1}</Cell>
                                <Cell>{gradesData.name}</Cell>
                                <Cell>{gradesData.surname}</Cell>
                                <Cell>{gradesData.class}</Cell>
                                <Cell>{gradesData.avgGrade}</Cell>
                                <Cell>{gradesData.exam1}</Cell>
                                <Cell>{gradesData.exam2}</Cell>
                            </TableRow>
                        ))}
                    </Table>
                    <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>        
                        <ChangeButton onClick={handlePrevPage} disabled={currentPage === 0}>
                        {'<'}
                        </ChangeButton>
                        <ChangeButton onClick={handleNextPage} disabled={endIndex >= gradesData.length || visibleData.length === 0}>
                        {'>'}
                        </ChangeButton>
                    </div>
        </div>
      </div>
      <QuestionDatabase />
    </div>
  );
};

export default GradesTable;
