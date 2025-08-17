// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import {Meta, StoryObj} from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { Accordion } from './Accordion.tsx';
// import {useState} from "react";

const meta = {
    component: Accordion,
}satisfies Meta<typeof Accordion>;

export default meta;

const onChangeHandler = action('onChange');

type Story = StoryObj<typeof meta>;

export const AccordionStory: Story = {
    args: {
        title: 'hello',
        collapsed: true,
        onChange: onChangeHandler,
    },
};


// export const CollapsedAccordion = () => {
//     return  <Accordion title={"Collapsed Accordion"}
//                        collapsed={true}
//                        onChange={onChangeHandler}/>
// }
//
// export const OpenedAccordion = () => {
//     return <Accordion title={"Opened Accordion"}
//                       collapsed={false}
//                       onChange={() => {}}/>
// }
//
// export const AccordionDemo = () => {
//     const [collapsed, setCollapsed] = useState<boolean>(false);
//
//     return <Accordion title={"Accordion"}
//                       collapsed={collapsed}
//                       onChange={() => {setCollapsed(!collapsed)}}/>
// }