import React from 'react';
import styles from './CustomRadio.module.css'
import { Flex, Radio } from 'antd';
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