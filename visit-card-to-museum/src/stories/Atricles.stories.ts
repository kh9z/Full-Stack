import type { Meta, StoryObj } from '@storybook/react';

import favoriteArticle from "@/components/favorite-article";
import {number} from "prop-types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Layout/favoriteArticle',
    component: favoriteArticle,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    args: {
        article: {
            id: 1,
            body: "body",
            title: "title"
        },
    }
} satisfies Meta<typeof favoriteArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};