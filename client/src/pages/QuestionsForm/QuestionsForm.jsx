import React, { useState } from "react";
import "./QuestonsForm.css";
import styled from "styled-components";
import addImg from "../../assets/imgs/add.png";

const Table = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    width: 1000px;

    & > *:first-child {
        font-weight: bold;
    }
    @media (max-width: 992px) {
      width: 800px;
    }
    @media (max-width: 768px) {
      width: 800px;
    }
`
const TableRow = styled.div`
    display: flex;
`
const Cell = styled.div`
    width: 100%;
    flex: 1;
    padding: 10px 30px;
    @media (max-width: 768px) {
      padding: 10px 20px;
    }
`
const ChangeButton = styled.button`
  color: #000;
  font-size: 1.5rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: min-content;
  background-color: unset;
`;

// The main component for the page
const QuestionDatabase = () => {
  // This could be fetched from an API or passed as props

  const [currentPage, setCurrentPage] = useState(0);

  const topics = [
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    // ... other topics
  ];

  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, topics.length);
  const visibleData = topics.slice(startIndex, endIndex);
  
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
  };
  
  const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  return (
    <div className="question-box">
      <div className="title">
        <h1 className="text-lg font-bold mb-4">База вопросов</h1>
      </div>
      <div className="app-container">
        <div className="main-content">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end', borderRadius: '0 0 1rem 1rem', padding: '20px'}}>
                    <Table>
                        <TableRow>
                            <Cell>#</Cell>
                            <Cell>Название темы</Cell>
                            <Cell>Вопросы 1 балл</Cell>
                            <Cell>Вопросы 2 балл</Cell>
                            <Cell>Добавить</Cell>
                        </TableRow>
                        {visibleData.map((topics, index) => (
                            <TableRow key={index}>
                                <Cell>{topics.id}</Cell>
                                <Cell>{topics.name}</Cell>
                                <Cell>{topics.onePointQuestions}</Cell>
                                <Cell>{topics.twoPointsQuestions}</Cell>
                                <Cell><img src={addImg} /></Cell>
                            </TableRow>
                        ))}
                    </Table>
                    <div style={{display: 'flex', marginRight: '140px', gap: '1rem', alignItems: 'center'}}>        
                        <ChangeButton onClick={handlePrevPage} disabled={currentPage === 0}>
                        {'<'}
                        </ChangeButton>
                        <ChangeButton onClick={handleNextPage} disabled={endIndex >= topics.length || visibleData.length === 0}>
                        {'>'}
                        </ChangeButton>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDatabase;
