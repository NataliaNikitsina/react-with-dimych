// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';

import {Accordion} from './Accordion.tsx';
import {useState} from "react";
// import {useState} from "react";

const meta = {
    component: Accordion,
}satisfies Meta<typeof Accordion>;

export default meta;

const onChangeHandler = action('onChange');
const onclickHandler = action('onClick');

type Story = StoryObj<typeof meta>;

export const AccordionStory: Story = {
    args: {
        title: 'menu',
        collapsed: true,
        onChange: onChangeHandler,
        items: [{title: 'hi', value: '1'}, {title: 'hello', value: '1'}, {title: 'privet', value: '1'}],
        onClick: onclickHandler
    },
};


export const CollapsedAccordion = () => {
    return <Accordion title={"Collapsed Accordion"}
                      collapsed={true}
                      onChange={onChangeHandler}
                      items={[{title: 'hi', value: '1'}, {title: 'hello', value: '1'}, {title: 'privet', value: '1'}]}
                      onClick={onclickHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion title={"Opened Accordion"}
                      collapsed={false}
                      onChange={() => {
                      }}
                      items={[{title: 'hi', value: '1'}, {title: 'hello', value: '1'}, {title: 'privet', value: '1'}]}
                      onClick={onclickHandler}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return <Accordion title={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      items={[{title: 'hi', value: '1'}, {title: 'hello', value: '1'}, {title: 'privet', value: '1'}]}
                      onClick={onclickHandler}/>
}