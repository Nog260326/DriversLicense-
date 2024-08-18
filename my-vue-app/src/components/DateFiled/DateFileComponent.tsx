import { FC } from 'react';
import './DateFileComponent.css';

interface DateFiledComponentProps{
    filedName: string,
}

export const DateFiledComponent: FC<DateFiledComponentProps> = (props) => {
    return(
        <label className='dateFiled'>{props.filedName}:
            <input type="date" placeholder={props.filedName} />
        </label>
    );
}