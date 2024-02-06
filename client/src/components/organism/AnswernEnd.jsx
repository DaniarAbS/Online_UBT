import { Button, Input } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { CustomButton } from '../atoms/CustomButton/CustomButton';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { Text } from '../atoms/CustomText/CustomText';
import { colors } from '../../base/colors';
import { RadioExample } from '../atoms/CustomRadio/CustomRadio';

const AnswerPartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
    gap: 30px;
`
const PrevNextBtnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const IconButton = styled.button`
    background-color: ${colors.black_green};
    /* width: 220px; */
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

`

const AnswerBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`


export const AnswerPart = ({ image1, image2, image3, image4}) => {
    return (
        <AnswerPartContainer>
            <PrevNextBtnsContainer>
                <IconButton>
                    <LeftCircleOutlined style={{color: `${colors.white}`, height: '20px', width: '20px', display: 'flex', alignItems: 'center'}}/>
                    <Text type='medium' color={colors.white} fontWeight='500'>Предыдущий</Text>
                </IconButton>
                <IconButton>
                    <Text type='medium' color={colors.white} fontWeight='500'>Следующий</Text>
                    <RightCircleOutlined style={{color: `${colors.white}`, height: '20px', width: '20px', display: 'flex', alignItems: 'center'}}/>
                </IconButton>
            </PrevNextBtnsContainer>
            <AnswerBlock>
                <RadioExample option1='A' option2='B' option3='C' option4='D' image1={image1} image2={image2} image3={image3} image4={image4}/>
            </AnswerBlock>
            <CustomButton bgColor={colors.black_green} color={colors.white} sizeType='endButton'>Завершить тест</CustomButton>
        </AnswerPartContainer>
    )
}