import { FC, useState } from 'react';
import './TextFiledComponent.css';

interface TextFiledComponentProps{
    filedName: string,
    handleCallback: Function,
}

export const TextFiledComponent: FC<TextFiledComponentProps> = (props) => {
    const [inputValue, setInputValue] = useState('');
    const change = (e: any) => {
        setInputValue(e.target.value);
    }
    return(
        <>
        <label className='textFiled'>{props.filedName}:
            <input type="text" placeholder={props.filedName} value={inputValue} onChange={change}/>
        </label>
        <div>
            {props.handleCallback(inputValue)}
        </div>
        </>
    );
}