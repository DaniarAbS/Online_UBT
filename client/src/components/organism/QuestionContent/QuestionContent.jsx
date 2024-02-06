import React from 'react';
import styled from 'styled-components';
import { Text } from '../../atoms/CustomText/CustomText';
import { ClockCircleOutlined } from "@ant-design/icons";

const QuestionContainer = styled.div`
    display: flex;
    background-color: #f7f7f7;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const MainInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    background-color: white;
`

const IconTextContainer = styled.div`
    background-color: #F7F7F7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3px 25px;
    border-radius: 10px;
    /* gap: 10px; */
`

const GivenTaskContainer = styled.div`
    background-color: #f7f7f7;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 2rem 0;
    gap: 1.5rem;
    border-radius: 20px;
`

const TextIcon = ({bgColor, text, color, width, heigth}) => {
return (
    <IconTextContainer style={{backgroundColor: `${bgColor}`, color: `${color}`, width: `${width}`, heigth: `${heigth}`}}>
        <ClockCircleOutlined height='30px' width='30px'/>
        <Text type='largex'>{text}</Text>
    </IconTextContainer>
)
}

export const QuestionContent = ({text, text2, text3, widthImg, heigthImg}) => {
    return (
        <QuestionContainer>
            <MainInfo>
                <Text type='largex' weight='700'>{text}</Text>
                <TextIcon bgColor='#F7F7F7' color='#000000' width='164px' heigth='48px' text={text2}/>
            </MainInfo>
            <GivenTaskContainer>
                <Text type='large' weight='400'>{text3}</Text>
                <img width={widthImg} height={heigthImg} src="https://s3-alpha-sig.figma.com/img/2a00/682d/90b4330c798cd76f14e805bbd56b4c8f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZSS1WKr~mzu6oeAwBBVHMWXK6Mt86sDSGa-oJ5ZjSxcnJNxCIwuu6ywpVAsNQg6R9Qgbl5NtSr~vfy2-MXKkr9fgMa3h5ruvcizZzVEXBfkU56RVCz1StZ1~86ghjLW6NhQGSLkXSPpxWGoJnbfID9Iy8qaZqm9bItEj~~jXlXWTKzYKohRNVuy~TCUOTqvpmOWWy-W0zqxywfFP~LBE1CqjbXo-bG3H31mLwPq399X3wYykyaHmsKtwsQ41FdMJuLsODWRPEJD1eqNtTsfB3R8Uc2~90QeZ6CSt0jr12hpZzE~GBRt6c3Gbif9cocRtB-NUCJHrJ4ckBzsQPzkazw__" alt="Task" />
            </GivenTaskContainer>
        </QuestionContainer>
    )
}