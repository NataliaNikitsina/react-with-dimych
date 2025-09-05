
type ItemType = {
    title: string,
    value: string,
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:string) => void
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(item => {
                return <li onClick={()=>{props.onClick(item.value)}} key={item.value}>{item.title}</li>})}
        </ul>
    )
}

type AccordionPropsType = {
    title: string
    collapsed?:boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value:string) => void
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.title} onChange={props.onChange}/>
                {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        )
}