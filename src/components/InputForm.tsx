import React from 'react';

type Props = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputForm: React.VFC<Props> = props => {
    const { value, onChange } = props
    return (
        <>
            <input type="text" value={value} onChange={onChange} />
        </>
    );
};
