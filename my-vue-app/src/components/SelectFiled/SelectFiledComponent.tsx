import { FC } from 'react';
import './SelectFiledComponent.css';

interface SelectFiledComponentProps{
    filedName: string,
    handleCallback: Function
}

export const SelectFiledComponent: FC<SelectFiledComponentProps> = (props) => {
    return(
        <>
        <label className='selectFiled'>{props.filedName}:
            <select name="CarKind" id="CarKind">
                <option value="A">A</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="C1">C1</option>
                <option value="D">D</option>
                <option value="D1">D1</option>
                <option value="D2">D2</option>
                <option value="D3">D3</option>
                <option value="E">E</option>
                <option value="1">1</option>
            </select>
        </label>
        <div>
            {props.handleCallback("correct")}
        </div>
        </>
    );
}