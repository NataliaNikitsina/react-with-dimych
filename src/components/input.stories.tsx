import {ChangeEvent, useRef, useState} from "react";
// import {action} from "storybook/actions";


const meta = {
    // component:
};

export default meta;


export const UncontrolledInput = () => {
    return <input/>
};

export const ControlledInputFixedValue = () => {
    return <input value={'it-incubator.by'}/>
};

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    return <> <input onChange={(e)=>setValue(e.currentTarget.value)}/> - {value} </>
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const onclickHandler = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <> <input ref={inputRef}/>  <button onClick={onclickHandler}>Save</button> - actual value: {value} </>
};


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onchangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onchangeHandler}/>
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true);
    const onchangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onchangeHandler}/>
};

export const ControlledCSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onchangeHandler = (e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onchangeHandler}>
        <option>none</option>
        <option value={1}>Minsk</option>
        <option value={2}>Moscow</option>
        <option value={3}>Kiev</option>
    </select>
};

