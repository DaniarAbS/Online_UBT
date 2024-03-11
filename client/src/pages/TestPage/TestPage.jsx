import React from "react";
import styled from "styled-components";

import { QuestionBar } from "../../components/organism/QuestionsBar";
import { AnswerPart } from "../../components/organism/AnswernEnd";
import { QuestionContent } from "../../components/organism/QuestionContent";
import { Text } from "../../components/atoms/CustomText/CustomText";
import { ClockCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { RadioExample } from "../../components/atoms/CustomRadio/CustomRadio";
import { colors } from "../../base/colors";
import { useState } from "react";

import './TestPage.css'
import { AppstoreOutlined, WarningOutlined } from "@ant-design/icons";
import { CustomButton } from "../../components/atoms/CustomButton/CustomButton";
import { TimerComponent } from '../../components/atoms/TimerComponent'
import { subjectArr } from "../../data/data";


const TestContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    /* width: 80%; */
    width: 100%;
    gap: 1.5rem;

    @media screen and (max-width: 900px){
        
    }
`
// const QuestionAnswerContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     gap: 1.5;
// `
const AcceptContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`
const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    width: 100%;
    gap: 1.5;

    @media screen and (max-width: 1000px){
        flex-direction: column;
        width: 100%;
        order: 2;
    }
`
const MainInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    gap: 2rem;
    font-size: 20px;
    text-align: start;

    @media screen and (max-width: 900px){
        font-size: 15px;
    }
`
const IconTextContainer = styled.div`
    background-color: #F7F7F7;
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    
    @media screen and (max-width: 900px){
        font-size: 15px;
        width: 40%;
        padding: 5px;
    }
`
const GivenTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: .5rem;
    gap: 1.5rem;
    border-radius: 20px;
`
const AnswerBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2rem;
`
const PrevNextBtnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media screen and (max-width: 900px){
        order: 2;
        justify-content: space-evenly;
    }
`
const IconButton = styled.button`
    background-color: ${colors.black_green};
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 1000px){
        ${Text} {
            display: none;
            width: 100%;
        }
    }

`
const PopupContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 999;
`;

const TextIcon = ({ bgColor, text, color }) => {
	return (
		<IconTextContainer style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
			<ClockCircleOutlined height='30px' width='30px' />
			<Text>{text}</Text>
		</IconTextContainer>
	)
}

export const TestPage = ({ text, text2, text3, image1, image2, image3, image4 }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(subjectArr[0].quantity);
    const [subject, setSubject] = useState(subjectArr[0].label)
    
	const [popupVisible, setPopupVisible] = useState(false);
	const [buttonClicked, setButtonClicked] = useState(false);
	const [popupVisible2, setPopupVisible2] = useState(false);

	const togglePopup = () => {
		setPopupVisible(!popupVisible);
		setButtonClicked(!buttonClicked);
	};

	const togglePopup2 = () => {
		setPopupVisible2(!popupVisible2)
	}

    const optionSelect = (selectedOption) => {
        const selectedSubject = subjectArr.find((subject) => subject.label === selectedOption);
        setSubject(selectedOption)
        setSelectedQuantity(selectedSubject ? selectedSubject.quantity : null);
    }

	return (
		<TestContainer>
			<div className="main-container">
				<div className={`responsive-container ${popupVisible ? 'hidden' : ''}`}>
					<QuestionBar onSelect={optionSelect} quantity={selectedQuantity}/>
				</div>

				{popupVisible && (
					<div className="popup-container">
						<QuestionBar onSelect={optionSelect} quantity={selectedQuantity}/>
						<button onClick={togglePopup}>Close</button>
					</div>
				)}

				{popupVisible2 && (
					<PopupContainer>
						<WarningOutlined style={{ fontSize: '40px' }} />
						<Text >Вы хотите завершить экзамен сейчас?</Text>
						<div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
							<CustomButton sizeType='popupButton' color={colors.white} bgColor={colors.black_green} onClick={togglePopup2}>Отмена</CustomButton>
							<CustomButton sizeType='popupButton' color={colors.white} bgColor={colors.black_green} onClick={togglePopup2}>Завершить</CustomButton>
						</div>
					</PopupContainer>
				)}

			</div>
			{/* <AcceptContent> */}
				<MainContent>
					<GivenTaskContainer>
						<MainInfo>
							<Text weight='700'>{subject}</Text>
							<TextIcon bgColor='#f7f7f7' color='#000000' text={<TimerComponent initialTime='05:02:20'/>} />
						</MainInfo>
						<Text type='large' weight='400'>{text3}</Text>
						<img width='299px' height='394px' src="https://s3-alpha-sig.figma.com/img/2a00/682d/90b4330c798cd76f14e805bbd56b4c8f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZSS1WKr~mzu6oeAwBBVHMWXK6Mt86sDSGa-oJ5ZjSxcnJNxCIwuu6ywpVAsNQg6R9Qgbl5NtSr~vfy2-MXKkr9fgMa3h5ruvcizZzVEXBfkU56RVCz1StZ1~86ghjLW6NhQGSLkXSPpxWGoJnbfID9Iy8qaZqm9bItEj~~jXlXWTKzYKohRNVuy~TCUOTqvpmOWWy-W0zqxywfFP~LBE1CqjbXo-bG3H31mLwPq399X3wYykyaHmsKtwsQ41FdMJuLsODWRPEJD1eqNtTsfB3R8Uc2~90QeZ6CSt0jr12hpZzE~GBRt6c3Gbif9cocRtB-NUCJHrJ4ckBzsQPzkazw__" alt="Task" />
					</GivenTaskContainer>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'end'}}>
                        <AnswerBlock>
                            <PrevNextBtnsContainer>
                                <IconButton>
                                    <LeftCircleOutlined style={{ color: `${colors.white}`, height: '20px', width: '20px', display: 'flex', alignItems: 'center' }} />
                                    <Text className='hidden_text' type='medium' color={colors.white} fontWeight='500'>Предыдущий</Text>
                                </IconButton>
                                <button style={{width: '40%', height: '40px'}} className={`popup-button`}
                                    onClick={togglePopup}>
                                    <AppstoreOutlined className={`${buttonClicked ? 'clicked' : ''}`} />
                                </button>
                                <IconButton>
                                    <Text className='hidden_text' type='medium' color={colors.white} fontWeight='500'>Следующий</Text>
                                    <RightCircleOutlined style={{ color: `${colors.white}`, height: '20px', width: '20px', display: 'flex', alignItems: 'center' }} />
                                </IconButton>
                            </PrevNextBtnsContainer>
                            <RadioExample option1='A' option2='B' option3='C' option4='D' image1={image1} image2={image2} image3={image3} image4={image4} />
                        </AnswerBlock>
                        <CustomButton onClick={togglePopup2} bgColor={colors.black_green} color={colors.white} width='200px'>
                            Завершить тест
                        </CustomButton>
                    </div>
				</MainContent>
			{/* </AcceptContent> */}
		</TestContainer>
	)
}