// ExamAnalysis.js
import React, { useState } from "react";
import "./AnalysisExam.css";
import "../../assets/imgs/search-icon.png";
import "../../assets/imgs/close-icon.png";
import editImg from "../../assets/imgs/edit.png"
import exitImg from "../../assets/imgs/exit.png"
import { DatePicker } from "antd";
import styled from "styled-components";
import { exams } from "../../data/data";
import { Input, Space } from 'antd';
const { Search } = Input;


const Table = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-wrap: wrap;
    text-align: start;
    & > *:first-child {
        font-weight: bold;
    }
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    @media (max-width: 992px) {
      font-size: 1rem;
      padding: 10px 0px;
    }
`
const TableRow = styled.div`
    display: flex;
`
const Cell = styled.div`
    width: 10px;
    flex: 1;
    text-wrap: wrap;
    padding: 10px 30px;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    @media (max-width: 992px) {
      padding: 10px;
      font-size: 0.8rem;
      
    }
`
const ChangeButton = styled.button`
  color: #000;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: min-content;
  background-color: unset;
  `;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const ExamAnalysis = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredExams = exams.filter((exam) =>
    exam.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [loginData, setLoginData] = useState({ iin: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log("Login Data:", loginData);
    // Handle login logic here
  };
  const [focused, setFocused] = useState({
    iin: false,
    password: false,
  });

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };


    
const itemsPerPage = 10;
const startIndex = currentPage * itemsPerPage;
const endIndex = Math.min(startIndex + itemsPerPage, exams.length);
const visibleData = exams.slice(startIndex, endIndex);


const handleNextPage = () => {
  setCurrentPage((prevPage) => prevPage + 1);
};

const handlePrevPage = () => {
  setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
};

  return (
    <div className="container">
        <div className="first-container">
          <h3>Экзамены</h3>
          <div className="searchBar">
            {/* <input
              type="text"
              placeholder="Поиск"
              value={searchTerm}
              onChange={handleSearchChange}
            /> */}
            
            <Search
              placeholder="Поиск"
              allowClear
              onSearch={handleSearchChange}
              style={{
                width: 300,
                borderBottom: '1px solid #000',
              }}
            />
            {/* <button class="close-icon"></button> */}
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'end', borderRadius: '0 0 1rem 1rem', paddingTop: '1rem'}}>
                    <Table>
                        <TableRow style={{backgroundColor: '#009172', color: 'white', fontWeight: 400, fontSize: '1.2rem', gap: '30px'}}>
                            <Cell>Название на казахском языке</Cell>
                            <Cell>Название на русском языке</Cell>
                            <Cell>Название на английском языке</Cell>
                            <Cell>Осталось</Cell>
                            <Cell>Дата начала</Cell>
                            <Cell>Дата окончания</Cell>
                            <Cell>Сдавших</Cell>
                            <Cell>Icons</Cell>
                        </TableRow>
                        {visibleData.map((exams, index) => (
                            <TableRow key={index}>  
                                <Cell>{exams.nameKazakh}</Cell>
                                <Cell>{exams.nameRussian}</Cell>
                                <Cell>{exams.nameEnglish}</Cell>
                                <Cell>{exams.timeLeft}</Cell>
                                <Cell>{exams.startDate}</Cell>
                                <Cell>{exams.endDate}</Cell>
                                <Cell className="participants">{exams.participants}</Cell>
                                <Cell className="icons"><img src={editImg} /><img src={exitImg} /></Cell>
                            </TableRow>
                        ))}
                    </Table>
                    <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>        
                        <ChangeButton onClick={handlePrevPage} disabled={currentPage === 0}>
                        {'<'}
                        </ChangeButton>
                        <ChangeButton onClick={handleNextPage} disabled={endIndex >= exams.length || visibleData.length === 0}>
                        {'>'}
                        </ChangeButton>
                    </div>
        </div>
        <button onClick={openModal} className="createButton">
          Создать экзамен
        </button>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <div className="modal-main">
                <h2>Создать экзамен</h2>
                <form onSubmit={handleSubmit} className="form">
                  <DatePicker
                    placeholder="Начало дата/время*"
                    onChange={onChange}
                    picker="day"
                  />
                  <DatePicker
                    placeholder="Начало дата/время*"
                    onChange={onChange}
                    picker="day"
                  />
                </form>

                <h2>Тип вопросов</h2>
                <label>
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  Рандомные вопросы
                </label>

                <label>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  Последние вопросы
                </label>

                <div className="buttons">
                  <button className="cancelButton">Отмена</button>
                  <button onClick={closeModal} className="saveButton">
                    Сохранить
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};
export default ExamAnalysis;
