import s from './Select.module.css'
import {useState, KeyboardEvent, useEffect} from "react";

type ItemType = {
    title: string,
    value: any,
}


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState<any>(props.value)

    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toogleItems = () => setActive(!active)
    const onItemCLick = (value: any) => {
        props.onChange(value);
        toogleItems()
    }

    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i=0; i<props.items.length; i++) {
                if(props.items[i].value ===hoveredElementValue){
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i+1] : props.items[i-1];
                    if(pretendentElement){
                        props.onChange(pretendentElement.value);
                        return
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value);
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
                <span className={s.main} onClick={toogleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map((item: ItemType, i) => <div
                            onMouseEnter={() => setHoveredElementValue(item.value)}
                            className={s.item + ' ' + (hoveredItem===item ? s.selected : '')}
                            key={i}
                            onClick={() => {
                                onItemCLick(item.value)
                            }}>{item.title}</div>)}
                    </div>
                }

            </div>
        </>
    );
};

