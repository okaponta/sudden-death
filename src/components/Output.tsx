import React from 'react';
import styled from "styled-components";


type Props = {
    value: string,
}

export const Output: React.VFC<Props> = props => {
    const { value } = props
    const num = count(value)
    const upper = createUpper(num)
    const emphasized = emphasize(value)
    const lower = createLower(num)
    return (
        <>
            <CustomHoge>
                {upper}
                <br />
                {emphasized}
                <br />
                {lower}
                <br />
            </CustomHoge>
        </>
    )
};

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

const createUpper = (count: number) => {
    let res = '＿人'
    for (let i = 0; i < count / 2; i++) {
        res = res + '人'
    }
    return res + '＿'
}

const createLower = (count: number) => {
    let res = '￣^Y'
    for (let i = 0; i < count * 2 / 3; i++) {
        res = i % 2 ? res + 'Y' : res + '^'
    }
    return res + '￣'
}

export const CustomHoge = styled.div`
  font-family: 'RictyDiminished-Regular';
`;

