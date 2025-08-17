// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import {Meta, StoryObj} from '@storybook/react-vite';
import { action } from 'storybook/actions';

import {Rating, RatingValueType} from './Rating.tsx';
import {useState} from "react";

const meta = {
    component: Rating,
}satisfies Meta<typeof Rating>;

export default meta;

const onChangeHandler = action('onChange');

type Story = StoryObj<typeof meta>;

export const RatingStory0: Story = {
    args: {
        value: 0,
        onClick:onChangeHandler
    },
};
export const RatingStory1: Story = {
    args: {
        value: 1,
        onClick:onChangeHandler
    },
};
export const RatingStory2: Story = {
    args: {
        value: 2,
        onClick:onChangeHandler
    },
};
export const RatingStory3: Story = {
    args: {
        value: 3,
        onClick:onChangeHandler
    },
};
export const RatingStory4: Story = {
    args: {
        value: 4,
        onClick:onChangeHandler
    },
};
export const RatingStory5: Story = {
    args: {
        value: 5,
        onClick:onChangeHandler
    },
};

export const CgangeRating = () =>{
    const [rating, setRating] = useState<RatingValueType>(3)
    return (<Rating value={rating} onClick={setRating}/>)
};


