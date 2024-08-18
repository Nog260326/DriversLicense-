import { FC } from 'react';
import './NumberFiled.css';

interface NumberFiledComponentProps{
    filedName: string,
}

export const NumberFiledComponent: FC<NumberFiledComponentProps> = (props) => {
    return(
        <label className='numberFiled'>{props.filedName}:
            <input type="number" placeholder={props.filedName} />
        </label>
    );
}