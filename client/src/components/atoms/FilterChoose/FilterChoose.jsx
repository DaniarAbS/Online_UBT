import React from 'react';
import { Flex, Radio } from 'antd';
import { filterData } from '../../../data/filter_select';
import { CheckOutlined } from '@ant-design/icons';
import { useState } from 'react';

import './FilterChoose.css'

export const FilterChoose = (props) => {
  const [selectedButton, setSelectedButton] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedButton(value);
    props.onDataReceived(value);
  };

  return (
    <Flex vertical gap="middle">
      <Radio.Group onChange={handleChange} defaultValue='' size="large" style={{ borderRadius: 0 }}>
        {filterData.map((filter, index) => (
          <Radio.Button
            key={index}
            value={filter.name}
            checked={selectedButton === filter.name}
            // onChange={handleChange}
          >
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              {filter.name}
              {selectedButton === filter.name && <CheckOutlined style={{ marginLeft: 8 }} />}
            </div>
          </Radio.Button>
        ))}
      </Radio.Group>
    </Flex>
  )
}