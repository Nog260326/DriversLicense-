import { FC, useState } from 'react';
import './DateFileComponent.css';

interface DateFiledComponentProps{
    filedName: string,
    handleCallback: Function,
}

export const DateFiledComponent: FC<DateFiledComponentProps> = (props) => {
    const [inputValue, setInputValue] = useState('');
    const change = (e: any) => {
        setInputValue(e.target.value);
    }
    
    return(
        <>
        <label className='dateFiled'>{props.filedName}:
            <input type="date" placeholder={props.filedName} value={inputValue} onChange={change}/>
        </label>
        <div>
            {props.handleCallback(inputValue)}
        </div>
        </>
    );
}