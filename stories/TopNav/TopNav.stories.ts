import '@internetarchive/ia-topnav';
import type { IATopNav } from '@internetarchive/ia-topnav';
import { html } from 'lit-html';
import { TopNav } from './TopNav';

export default {
  title: 'Demos/TopNav',
  argTypes: {
    // hideSearch: { default: false },
  },
};

const Template = (args) => TopNav(args);

export const TopNavDemo = Template.bind({});
TopNavDemo.args = {
  hideSearch: false,
  screenName: '',
  username: ''
};
