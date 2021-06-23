import '@internetarchive/ia-topnav';
import { html } from 'lit-html';
import './topnav.css';
import { topNavConfig, topNavMenuConfig } from './TopNavConfig';

export default {
  title: 'Demos/TopNav',
};

const Template = (options: {
  hideSearch: boolean;
  screenName: string;
  username: string;
}) => html`
  <ia-topnav
    .config=${topNavConfig}
    .menus=${topNavMenuConfig}
    ?hideSearch=${options.hideSearch}
    .screenName=${options.screenName}
    .username=${options.username}
  >
  </ia-topnav>
`;

export const Demo = Template.bind({});
Demo.args = {
  hideSearch: false,
  screenName: '',
  username: ''
};
