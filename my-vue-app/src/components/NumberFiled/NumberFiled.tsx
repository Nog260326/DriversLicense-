import { FC, useState } from 'react';
import './NumberFiled.css';

interface NumberFiledComponentProps{
    filedName: string,
    handleCallback: Function,
}

export const NumberFiledComponent: FC<NumberFiledComponentProps> = (props) => {
    const [inputValue, setInputValue] = useState('');
    const change = (e: any) => {
        setInputValue(e.target.value);
    }

    return(
        <>
            <label className='numberFiled'>{props.filedName}:
                <input type="number" placeholder={props.filedName} value={inputValue} onChange={change} />
            </label>
            <div>
                {props.handleCallback(parseInt(inputValue))}
            </div>
        </>
    );
}