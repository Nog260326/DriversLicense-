import { FC } from 'react';
import './TextFiledComponent.css';

interface TextFiledComponentProps{
    filedName: string,
}

export const TextFiledComponent: FC<TextFiledComponentProps> = (props) => {
    return(
        <label className='textFiled'>{props.filedName}:
            <input type="text" placeholder={props.filedName} />
        </label>
    );
}