// src/components/button.stories.jsx
import React from 'react';
import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Another Button',
};