import './App.css'
import {Accordion} from "./components/accordion/Accordion.tsx";
import {Rating, RatingValueType} from "./components/rating/Rating.tsx";
import {UnControlledAccordion} from "./components/accordion/UnControlledAccordion.tsx";
import {UnControlledRating} from "./components/rating/UnControlledRating.tsx";
import {useState} from "react";
import {OnOff} from "./components/onnOff/OnOff.tsx";
import {UnControlledOnOff} from "./components/onnOff/UnControlledOnOff.tsx";


export function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [isOn, setIsOn] = useState<boolean>(false)

    return (
        <div>
            <Accordion title={"Hello World"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <Accordion title={"World"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff onChange={setIsOn}/>
            <OnOff onChange={setIsOn}/>
            <UnControlledAccordion title={"Users"}/>
            <UnControlledAccordion title={"Menu"}/>
            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledOnOff isOn={isOn} onChange={setIsOn}/>
            <UnControlledOnOff isOn={isOn} onChange={setIsOn}/>
        </div>
    )
}

// type PageTitlePropsType = {
//     title: string
// }

// function PageTitle(props:PageTitlePropsType) {
//     return(
//             <h1>{props.title}</h1>
//         )
// }



