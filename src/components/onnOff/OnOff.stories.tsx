import {Meta, StoryObj} from '@storybook/react-vite';
import { action } from 'storybook/actions';
import {OnOff} from './OnOff.tsx';


const meta = {
    component: OnOff,
}satisfies Meta<typeof OnOff>;

export default meta;

type Story = StoryObj<typeof meta>;

const onChangeHandler = action('onChange');

export const OnOffStory: Story = {
    args: {
       onChange:onChangeHandler
    },
};


