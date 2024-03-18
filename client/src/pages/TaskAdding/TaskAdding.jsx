import './TaskAdding.css'
import { Text } from '../../components/atoms/CustomText/CustomText';
import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { RightOutlined, FormOutlined, CheckOutlined, CloseOutlined, UploadOutlined } from '@ant-design/icons';
import { sizes } from '../../base/sizes';
import { TextWithBg } from '../../components/atoms/TextBg';
import { colors } from '../../base/colors';
import Input from 'antd/es/input/Input';
import AddImage from '../../assets/icons/add_image_icon.png'
import { Button, Upload } from 'antd';

const WholeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
    }
`
const ChoosePartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: .5rem;
`
const PointContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
`
const ThemesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
const ThemeVisibleContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
`
const VisibilityContent = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 2px #ACACAC;
    padding: 1rem;
    border-radius: 10px;
    gap: 1rem;
`
const HiddenContent = styled.div`
    display: flex;
    flex-direction: column;
`
const ThemeElementRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
`
const TruncatedText = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px; /* Adjust this width according to your needs */
    font-size: ${sizes.mediumPlus};
`;
const RotatableIcon = styled(RightOutlined)`
  transition: transform 0.5s ease;
  transform: ${(props) => (props.rotated ? 'rotate(90deg)' : 'rotate(0)')};
`;

const AddingQuestionContainer = styled.div`
    display: flex;
    background-color: ${colors.background_gray};
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    min-height: 430px;
    width: 616px;
    padding: 2rem;
`
const InputImgRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    gap: 2rem;
`
const ApproveCancelContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60px;
`

const props = {
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'yyy.png',
        status: 'done',
        url: 'https://www.bing.com/images/search?view=detailV2&ccid=7n0UkdFf&id=4228CFCC5CD5C58B8B619A1C2732DF5A3F100AC7&thid=OIP.7n0UkdFfcM6ItZsiBHe4YQHaKi&mediaurl=https%3a%2f%2fpbs.twimg.com%2fmedia%2fFFY-i4gXoAkGIQg%3fformat%3djpg%26name%3dlarge&exph=1600&expw=1125&FORM=IRPFED&ck=F74B44087667412AAABAC0C7F9E6E29C&reqid=C06F457FEC14440E965578F677F9B079&selectedIndex=2&itb=0&idpp=insfeed',
      },
    ],
  };

export const TaskAdding = () => {   
    const [visibleItemIndex, setVisibleItemIndex] = useState(-1);
    const [selectedDiv, setSelectedDiv] = useState(null);
    const [lastClickedButton, setLastClickedButton] = useState(null);

    const handleButtonClick = (buttonNumber) => {
      setLastClickedButton(buttonNumber);
    };

    const handleClick = (divNumber) => {
      setSelectedDiv(divNumber);
    };

    const renderElement = (divNumber) => {
      const isSelected = selectedDiv === divNumber;

      return (
        <div
          onClick={() => handleClick(divNumber)}
          style={{
            cursor: 'pointer',
          }}
        >
          {isSelected ? <CheckOutlined /> : <CloseOutlined />}
        </div>
      );
    };
    


    const items = [
        {
            topic: 'Основные свойства логарифма',
            subtopics: [
                'Суретте көрсетілген параболаның формуласын табыңыз', 
                'Суретте көрсетілген параболаның формуласын табыңыз', 
                'Суретте көрсетілген параболаның формуласын табыңыз'
            ]
        },
        {
            topic: 'Линейные уравнения',
            subtopics: [
                'Основные понятия', 
                'Решение уравнений', 
                'Примеры'
            ]
        },
        {
            topic: 'Линейные уравнения',
            subtopics: ['Основные понятия', 'Решение уравнений', 'Примеры']
        },
        {
            topic: 'Линейные уравнения',
            subtopics: ['Основные понятия', 'Решение уравнений', 'Примеры']
        },
        // Add more topics and subtopics as needed
    ];

    const fileInputRef = useRef(null);
    const graduateDisplayRef = useRef(null);

  const updateFileInput = () => {
    const fileInput = fileInputRef.current;
    if (fileInput.files.length > 1) {
      // Reset the file input if more than one file is selected
      fileInput.value = '';
      graduateDisplayRef.current.value = '';
    } else if (fileInput.files.length === 1) {
      graduateDisplayRef.current.value = fileInput.files[0].name;
    } else {
      graduateDisplayRef.current.value = '';
    }
  };


    const toggleVisibility = (index) => {
        setVisibleItemIndex(visibleItemIndex === index ? -1 : index);
    };

    return (
      <WholeContainer>
        <ChoosePartContainer>
            <Text>Выберите тип вопроса:</Text>
            <PointContainer>
                <button 
                style={{
                  backgroundColor: lastClickedButton === 1 ? colors.black_green : colors.font_gray,
                }}
                onClick={() => handleButtonClick(1)} padding='.5rem 2rem'>1 балл</button>
                <button 
                style={{
                  backgroundColor: lastClickedButton === 2 ? colors.black_green : colors.font_gray,
                }}
                onClick={() => handleButtonClick(2)} padding='.5rem 2rem'>2 балл</button>
            </PointContainer> 
            <Text>Выберите тему:</Text>
            <ThemesContainer>
                {items.map((item, index) => (
                    <div key={index}>
                        <VisibilityContent>
                            <ThemeVisibleContent>
                                <Text type='largePlus'>{item.topic}</Text>
                                <RotatableIcon rotated={visibleItemIndex === index} onClick={() => toggleVisibility(index)}/>
                            </ThemeVisibleContent>
                            { visibleItemIndex === index &&  (
                                <HiddenContent className={visibleItemIndex === index ? 'visible-content' : 'hidden-content'}>
                                    <ul style={{paddingInlineStart: '20px', display: 'flex', flexDirection: 'column', gap: '1rem',}}>
                                        {item.subtopics.map((subtopic, subIndex) => (
                                            <li key={subIndex}>
                                                <ThemeElementRow>
                                                    <TruncatedText title={subtopic}>{subtopic}</TruncatedText>
                                                    <FormOutlined />   
                                                </ThemeElementRow>
                                            </li>
                                        ))}
                                    </ul>
                                </HiddenContent>
                            )}
                        </VisibilityContent>
                    </div>
                ))}
            </ThemesContainer>
        </ChoosePartContainer>
        <AddingQuestionContainer>
            <InputImgRow>
                <Input placeholder='Введите текст' variant='borderless' style={{borderBottom: 'solid 2px #acacac', borderRadius: '0', width: '100%'}}/>
                <img src={AddImage} alt="Add_image_icon" />
            </InputImgRow>
            <ApproveCancelContent>
                <CheckOutlined style={{fontSize: '24px', fontWeight: 'bold'}}/>
                <CloseOutlined style={{fontSize: '24px', fontWeight: 'bold'}}/>
            </ApproveCancelContent>
        </AddingQuestionContainer>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            {renderElement(1)}
            <div className='file-input-container'>
              <input
                className='graduation file-input'
                type='text'
                placeholder='Выписка учебного заведения'
                ref={graduateDisplayRef}
              />
              <input
                id='graduationInput'
                className='file-input'
                type='file'
                style={{ display: 'none' }}
                accept='.pdf, .doc, .docx'
                onChange={updateFileInput}
                ref={fileInputRef}
              />
              <label className='file-input-icon' htmlFor='graduationInput'>
                <UploadOutlined />
              </label>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            {renderElement(2)}
            <div className='file-input-container'>
              <input
                className='graduation file-input'
                type='text'
                placeholder='Выписка учебного заведения'
                ref={graduateDisplayRef}
              />
              <input
                id='graduationInput'
                className='file-input'
                type='file'
                style={{ display: 'none' }}
                accept='.pdf, .doc, .docx'
                onChange={updateFileInput}
                ref={fileInputRef}
              />
              <label className='file-input-icon' htmlFor='graduationInput'>
                <UploadOutlined />
              </label>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            {renderElement(3)}
            <div className='file-input-container'>
              <input
                className='graduation file-input'
                type='text'
                placeholder='Выписка учебного заведения'
                ref={graduateDisplayRef}
              />
              <input
                id='graduationInput'
                className='file-input'
                type='file'
                style={{ display: 'none' }}
                accept='.pdf, .doc, .docx'
                onChange={updateFileInput}
                ref={fileInputRef}
              />
              <label className='file-input-icon' htmlFor='graduationInput'>
                <UploadOutlined />
              </label>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            {renderElement(4)}
            <div className='file-input-container'>
              <input
                className='graduation file-input'
                type='text'
                placeholder='Выписка учебного заведения'
                ref={graduateDisplayRef}
              />
              <input
                id='graduationInput'
                className='file-input'
                type='file'
                style={{ display: 'none' }}
                accept='.pdf, .doc, .docx'
                onChange={updateFileInput}
                ref={fileInputRef}
              />
              <label className='file-input-icon' htmlFor='graduationInput'>
                <UploadOutlined />
              </label>
            </div>
          </div>
        </div>
      </WholeContainer>
    )
}