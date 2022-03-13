import React, { useState } from 'react';

import { InputForm } from './components/InputForm';

export const SuddenDeath: React.VFC = () => {
    const [value, setValue] = useState('突然の死');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    const num = count(value)
    const upper = '＿人人人人人人＿'
    const emphasized = emphasize(value)
    const lower = '￣Y^Y^Y^Y^Y^Y^￣'
    return (
        <>
            <div>
                <InputForm value={value} onChange={onChange} />
            </div>
            <div>
                {upper}
                <br />
                {emphasized}
                <br />
                {lower}
            </div>
        </>
    )
}

const emphasize = (val: string) => {
    return '＞ ' + val + ' ＜'
}

const count = (str: string) => {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        (str[i].match(/[ -~]/)) ? len += 1 : len += 2;
    }
    return len;
}