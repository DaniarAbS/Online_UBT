import React from "react";
import styled from 'styled-components';
import { Text } from "../components/atoms/CustomText/CustomText";
import excelIcon from '../assets/img/excel.png';
import { colors } from "../base/colors";
import { ChooseSubject } from "../components/atoms/CustomSelect";
import { subjectArr } from "../data/data";
import { ColumnChart } from "./ColumnChart";
import { studentsData } from "../data/data";
import { useState } from "react";
import { CustomButton } from "../components/atoms/CustomButton/CustomButton";
import { PointChart } from "./PointChart";

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
    }
`
const ButtonsContainer = styled.div`
    display: flex;
    gap: 2rem;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .5rem;
    width: 20rem;
    height: 2rem;
    align-items: center;
`
const Button = styled.button`
    padding: 10px 20px;
    background-color: #f7f7f7;
    color: #000;
    border-radius: ${props => (props.firstChild ? '10px 0 0 10px' : props.lastChild ? '0 10px 10px 0' : '0')};
`
const IconButton = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 7px;
    background-color: #f7f7f7;
    color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    @media screen and (max-width: 1000px){
        display: none;
    }
`
const Icon = styled.img`
    width: 20px;  
    height: 20px;
`;
const ButtonText = styled.span`
    font-size: 10px;
`
const TwoTextButton = styled.div`
    background-color: ${colors.black_green};
    color: ${colors.white};
    font-weight: bold;
    width: 40%;
    height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 2rem;
    font-size: 2rem;

    @media screen and (max-width: 1000px){
        ${Text} {
            display: none;
        }
        width: 30%;
        height: 80px;
        font-weight: normal;
        font-size: 1rem;
    }
`
const Table = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    width: 100%;

    & > *:first-child {
        font-weight: bold;
    }
`
const TableRow = styled.div`
    display: flex;
`
const Cell = styled.div`
    flex: 1;
    padding: 8px;
`
const ChangeButton = styled.button`
  color: #000;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: min-content;
  background-color: unset;
`;
const FilterContent = styled.div`
    display: flex; 
    align-items: center; 
    gap: 1rem; 
    font-size: 1.3rem;
    font-weight: bold;

    @media screen and (max-width: 1000px) {
        font-size: 1rem;
        flex-direction: column;
        align-items: start;
    }
`
const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${colors.black_green};
    padding: 2rem;
    border-radius: 1rem 1rem 0 0;

    @media screen and (max-width: 1000px){
        flex-direction: column;
        gap: 1rem;

        & > *:last-child{
            gap: .5rem;
            
            & > *:first-child{
                border-radius: 1rem 0 0 1rem;
            }
            & > *:last-child{
                border-radius: 0 1rem 1rem 0;
            }
        }
    }
`
const TwoElementContainer = styled.div`
    display: flex;
    gap: 1rem;
    height: 3rem;

    @media screen and (max-width: 1000px){

    }
`

export const ExamAnalyse = () => {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    const filteredAndSortedStudents = studentsData
    .filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b.point - a.point);

    const itemsPerPage = 10;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredAndSortedStudents.length);
    const visibleData = filteredAndSortedStudents.slice(startIndex, endIndex);


    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
    };

    const handleSearch = () => {
        setCurrentPage(0); // Reset page when searching
      };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
      };

    const rangeText = `${startIndex + 1}-${endIndex} из ${filteredAndSortedStudents.length}`;

    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '1rem', gap: '2rem'}}>
            <TitleContainer>
                <Text fontSize='30px' weight='bold'>Анализ экзамена</Text>
                <ButtonsContainer>
                    <IconButton>
                        <Icon src={excelIcon} alt="Excel Icon"/>
                        <ButtonText>EXCEL</ButtonText>
                    </IconButton>
                    <ButtonContainer>
                        <Button firstChild>Общие</Button>
                        <Button>Предметы</Button>
                        <Button lastChild>Темы</Button>
                    </ButtonContainer>
                </ButtonsContainer>
            </TitleContainer>
            <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', padding: '1rem'}}>
                <TwoTextButton>
                    <Text>Средний балл</Text>
                    <Text>59/140</Text>
                </TwoTextButton>
                <TwoTextButton>
                    <Text>Средний балл</Text>
                    <Text>59/140</Text>
                </TwoTextButton>
                <TwoTextButton>
                    <Text>Средний балл</Text>
                    <Text>59/140</Text>
                </TwoTextButton>
            </div>
            <FilterContent>
                <Text>Топ 10 по предмету</Text>
                <ChooseSubject iconWidth='10rem' options={subjectArr}/>
                <Text>и среди классов</Text>
                <ChooseSubject iconWidth='10rem' options={subjectArr}/>
                <Text>INNOVERSE SCHOOL</Text>
            </FilterContent>
            <ColumnChart />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <TableHeader>
                    <TwoElementContainer>
                        <input style={{padding: '0 1rem', borderRadius: '0.5rem'}} type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search by name" />
                        <CustomButton bgColor={colors.white} color={colors.black} onClick={handleSearch} width='7rem'>Искать</CustomButton>
                    </TwoElementContainer>
                    <TwoElementContainer>
                        <CustomButton bgColor={colors.white} color={colors.black} width='7rem'>Общие</CustomButton>
                        <CustomButton bgColor={colors.white} color={colors.black} width='7rem'>Детальные баллы</CustomButton>
                    </TwoElementContainer>
                </TableHeader>
                <div style={{display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'end', backgroundColor: '#f7f7f7', borderRadius: '0 0 1rem 1rem', padding: '1rem'}}>
                    <Table>
                        <TableRow>
                            <Cell>#</Cell>
                            <Cell>Имя фамилия</Cell>
                            <Cell>Средний балл</Cell>
                            <Cell>Класс</Cell>
                            <Cell>Действия</Cell>
                        </TableRow>
                        {visibleData.map((studentsData, index) => (
                            <TableRow key={index}>
                                <Cell>{startIndex + index + 1}</Cell>
                                <Cell>{studentsData.name}</Cell>
                                <Cell>{studentsData.point}</Cell>
                                <Cell>{studentsData.group}</Cell>
                                <Cell>Подробнее</Cell>
                            </TableRow>
                        ))}
                    </Table>
                    <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                        <Text>{rangeText}</Text>          
                        <ChangeButton onClick={handlePrevPage} disabled={currentPage === 0}>
                        {'<'}
                        </ChangeButton>
                        <ChangeButton onClick={handleNextPage} disabled={endIndex >= filteredAndSortedStudents.length || visibleData.length === 0}>
                        {'>'}
                        </ChangeButton>
                    </div>
                </div>
            </div>
            <PointChart />
        </div>
    )
}