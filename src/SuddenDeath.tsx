import React, { useState } from 'react';

import { InputForm } from './components/InputForm';
import { Output } from './components/Output';

import { createGlobalStyle } from 'styled-components';

export const SuddenDeath: React.VFC = () => {
    const [value, setValue] = useState('突然の死');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    return (
        <>
            <Globalstyle />
            <h1>突然の死</h1>
            <InputForm value={value} onChange={onChange} />
            <Output value={value} />
        </>
    )
}

export const Globalstyle = createGlobalStyle` 
 @font-face {
    font-family: 'RictyDiminished-Regular';
    src: url('./fonts/RictyDiminished-Regular.ttf') format('truetype');
  }
`;
