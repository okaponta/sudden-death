import React from 'react';
import styled from "styled-components";

type Props = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputForm: React.VFC<Props> = props => {
    const { value, onChange } = props
    return (
        <>
            入力欄：
            <input type="text" value={value} onChange={onChange} />
        </>
    );
};
