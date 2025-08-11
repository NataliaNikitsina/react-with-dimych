type OnOffPropsType = {
    isOn: boolean,
    onChange: (value:boolean) => void,
}

export const UnControlledOnOff = (props:OnOffPropsType) => {

    const onStyle ={
        border: '2px solid black',
        height: '20px',
        width: '30px',
        display: 'inline-block',
        padding: '5px',
        marginBottom: '10px',
        backgroundColor: props.isOn ? 'green' : 'white',
    }
    const offStyle ={
        border: '2px solid black',
        height: '20px',
        width: '30px',
        display: 'inline-block',
        marginLeft: '3px',
        marginBottom: '10px',
        padding: '5px',
        backgroundColor:  props.isOn ? 'white' : 'red',
    }
    const lampStyle ={
        border: '2px solid black',
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor:  props.isOn ? 'green' : 'red',
    }

    return (
        <div>
            <div onClick={()=>{props.onChange(true)}} style={onStyle}>Onn</div>
            <div onClick={ ()=>{props.onChange(false)}} style={offStyle}>Off</div>
            <div style={lampStyle}/>
        </div>
    );
};

