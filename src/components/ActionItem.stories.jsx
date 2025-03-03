// ActionItem.stories.jsx
import React from 'react';
import ActionItem from './ActionItem';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styles from './ActionItem.stories.module.css';
import { Source } from '@storybook/addon-docs'; // Import Source

export default {
  title: 'Components/ActionItem',
  component: ActionItem,
  parameters: {
    docs: {
      description: {
        component: `
          The \`ActionItem\` component is used for interactive elements like buttons or links.
          It supports two appearances: \`primary\` and \`secondary\`, and can optionally include icons.
        `,
      },
    },
  },
};

const Template = (args) => <ActionItem {...args} />;

export const AllButtonVariations = () => (
    <div className={styles.container}>
      <Template appearance="primary" children="Add Item" />
      <Template appearance="secondary" children="Remove Item" />
      <Template appearance="primary" children="Add" icon={<AiOutlinePlus />} />
      <Template appearance="secondary" children="Remove" icon={<AiOutlineMinus />} />
      <Template appearance="primary" children="" icon={<AiOutlinePlus />} />
      <Template appearance="secondary" children="" icon={<AiOutlineMinus />} />
    </div>
  );

  AllButtonVariations.parameters = {
    docs: {
      description: {
        story: `
          This story shows all variations of the \`ActionItem\` component:
  
          -   **Primary**: Used for main actions.
          -   **Secondary**: Used for secondary or less important actions.
          -   **With Icon**: Includes an icon alongside the text.
          -   **Icon Only**: Only includes an icon, no text.
        `,
      },
      source: {
        code: `
        <ActionItem appearance="primary" children="Add Item" />
        <ActionItem appearance="secondary" children="Remove Item" />
        <ActionItem appearance="primary" children="Add" icon={<AiOutlinePlus />} />
        <ActionItem appearance="secondary" children="Remove" icon={<AiOutlineMinus />} />
        <ActionItem appearance="primary" children="" icon={<AiOutlinePlus />} />
        <ActionItem appearance="secondary" children="" icon={<AiOutlineMinus />} />
        `,
        language: 'jsx', 
      },
    },
  };