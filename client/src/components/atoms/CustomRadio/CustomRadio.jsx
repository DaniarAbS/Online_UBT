import React from 'react';
import { useState } from 'react';
import styles from './CustomRadio.module.css'

import { Flex, Radio } from 'antd';
import { Text } from '../CustomText/CustomText';
import { colors } from '../../../base/colors';
import styled from 'styled-components';


const onChange = (e) => {
  console.log(`${e.target.value}`);
};
export const CustomRadio = ({text1, text2, text3, width}) => (
    <Flex vertical gap='medium'>
        <Radio.Group className={styles.radioGroup} onChange={onChange} defaultValue="">
        <Radio.Button className={styles.radioButton} value={text1}>{text1}</Radio.Button>
        <br />
        <Radio.Button className={styles.radioButton} value={text2}>{text2}</Radio.Button>
        <br />
        <Radio.Button className={styles.radioButton} value={text3}>{text3}</Radio.Button> 
        </Radio.Group>
    </Flex>
);

const ChoicesContainer = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 452px;
  border-radius: 10px;
  padding: 10px;

  @media screen and (max-width: 900px){
    width: 100%;
  }
`

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioImage = styled.img`
  width: 157px; // Adjust the width as needed
  height: 90px; // Adjust the height as needed
  /* margin-left: 10px; */
`;

export const RadioExample = ({option1, option2, option3, option4, image1, image2, image3, image4}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <ChoicesContainer>
      <Text color={colors.black} type='large' weight='600'>Ответ:</Text>
      <RadioLabel>
        <input
          type="radio"
          value={option1}
          checked={selectedOption === `${option1}`}
          onChange={handleRadioChange}
        />
        <Text type='largex' weight='500'>{option1}</Text>
        <RadioImage src={image1} alt={`Image for ${option1}`} />
      </RadioLabel>

      <RadioLabel>
        <input
          type="radio"
          value={option2}
          checked={selectedOption === `${option2}`}
          onChange={handleRadioChange}
        />
        <Text type='largex' weight='500'>{option2}</Text>
        <RadioImage src={image2} alt={`Image for ${option2}`} />
      </RadioLabel>

      <RadioLabel>
        <input
          type="radio"
          value={option3}
          checked={selectedOption === `${option3}`}
          onChange={handleRadioChange}
        />
        <Text type='largex' weight='500'>{option3}</Text>
        <RadioImage src={image3} alt={`Image for ${option3}`} />
      </RadioLabel>

      <RadioLabel>
        <input
          type="radio"
          value={option4}
          checked={selectedOption === `${option4}`}
          onChange={handleRadioChange}
        />
        <Text type='largex' weight='500'>{option4}</Text>
        <RadioImage src={image4} alt={`Image for ${option4}`} />
      </RadioLabel>
    
    </ChoicesContainer>
  );
};