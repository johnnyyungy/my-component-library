// SimpleButton.stories.jsx
import React from 'react';
import SimpleButton from './SimpleButton';

export default {
  title: 'Components/SimpleButton',
  component: SimpleButton,
  parameters: {
    docs: {
      description: {
        component: 'A simple button component.',
      },
    },
  },
};

const Template = (args) => <SimpleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  onClick: () => console.log('Button clicked!'),
};

Primary.parameters = {
  docs: {
    description: {
      story: 'The primary button variant.',
    },
    source: {
      code: `<SimpleButton label="Click Me" onClick={() => console.log('Button clicked!')} />`,
      language: 'jsx',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Cancel',
  onClick: () => console.log('Cancel button clicked!'),
};

Secondary.parameters = {
  docs: {
    description: {
      story: 'A secondary button variant, used for cancel or less important actions.',
    },
    source: {
      code: `<SimpleButton label="Cancel" onClick={() => console.log('Cancel button clicked!')} />`,
      language: 'jsx',
    },
  },
};