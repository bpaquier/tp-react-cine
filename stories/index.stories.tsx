import React from 'react';
import BaseComponent, {
  BaseComponentProps,
} from '../components/@BaseComponent/index';

export default {
  title: 'Base Component',
  component: BaseComponent,
  parameters: {
    docs: { description: { component: 'Base component test' } },
  },
};

const Template = (args: BaseComponentProps) => <BaseComponent {...args} />;
export const Basic = Template.bind({});

Basic.args = {
  className: 'classTest',
};
