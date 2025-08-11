import {useState} from "react";

type OnOffPropsType = {
    onChange:(value:boolean) => void;
}

export const OnOff = (props:OnOffPropsType) => {

    const [isOn, setIsOn] = useState(false)

    const onStyle ={
        border: '2px solid black',
        height: '20px',
        width: '30px',
        display: 'inline-block',
        padding: '5px',
        marginBottom: '10px',
        backgroundColor: isOn ? 'green' : 'white',
    }
    const offStyle ={
        border: '2px solid black',
        height: '20px',
        width: '30px',
        display: 'inline-block',
        marginLeft: '3px',
        marginBottom: '10px',
        padding: '5px',
        backgroundColor: isOn ? 'white' : 'red',
    }
    const lampStyle ={
        border: '2px solid black',
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: isOn ? 'green' : 'red',
    }

    const onClicked = () => {
        setIsOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setIsOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div onClick={onClicked} style={onStyle}>Onn</div>
            <div onClick={offClicked} style={offStyle}>Off</div>
            <div style={lampStyle}/>
        </div>
    );
};

