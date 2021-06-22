import { html } from 'lit-html';
import '@internetarchive/ia-topnav';
import './topnav.css';
import { defaultTopNavConfig, topNavMenuConfig } from './TopNavConfig';

export const TopNav = (options: {
  hideSearch: boolean;
  screenName: string;
  username: string;
}) => html`
  <ia-topnav
    .config=${defaultTopNavConfig}
    .menus=${topNavMenuConfig}
    ?hideSearch=${options.hideSearch}
    .screenName=${options.screenName}
    .username=${options.username}
  >
  </ia-topnav>
`;
