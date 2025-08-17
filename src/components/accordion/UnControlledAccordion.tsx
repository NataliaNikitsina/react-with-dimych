import {useState} from "react";

type AccordionTitlePropsType = {
    title: string
    onClick?: () => void;
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

type AccordionPropsType = {
    title: string
}

export function UnControlledAccordion(props: AccordionPropsType) {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const onClickHandler = () => {
        setIsCollapsed(!isCollapsed);
    }

        return (
            <div>
                <AccordionTitle title={props.title} onClick={onClickHandler}/>
                {isCollapsed && <AccordionBody/>}
            </div>
        )
}