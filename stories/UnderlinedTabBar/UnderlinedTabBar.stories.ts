import { html } from 'lit-html';
import '@internetarchive/underlined-tab-bar';


export default {
  title: 'Demos/UnderlinedTabBar',
  argTypes: {
    underLineThick: {
      control: { type: 'range', min: 0, max: 10, step: 1 }
    },
    mainBackgroundColor: {
      control: { type: 'color' }
    },
    tabTextColor: {
      control: { type: 'color' }
    },
    underlineColor: {
      control: { type: 'color' }
    },
  }
};

const Template = (options: {
  itemClicked: number;
  isLoading: boolean;
  underLineThick?: number;
  mainBackgroundColor?: string;
  tabTextColor?: string;
  underlineColor?: string;
}) => {
  const styleContainer = document.documentElement.style;
  if (options.underLineThick) styleContainer.setProperty('--underLineThick', `${options.underLineThick}px`);
  if (options.mainBackgroundColor) styleContainer.setProperty('--mainBackgroundColor', options.mainBackgroundColor);
  if (options.tabTextColor) styleContainer.setProperty('--tabTextColor', options.tabTextColor);
  if (options.underlineColor) styleContainer.setProperty('--underlineColor', options.underlineColor);

  return html`
    
    <iaux-underlined-tab-bar
      ?isLoading=${options.isLoading}
        onitemclicked=${options.itemClicked}
        .entries=${[
          { displayName: 'UPLOADS' },
          { displayName: 'POSTS' },
          { displayName: 'REVIEWS' },
          { displayName: 'COLLECTIONS' },
          { displayName: 'LOANS' },
          { displayName: 'WEB ARCHIVE' },
        ]}
      >
      
      </iaux-underlined-tab-bar>
    `
};

export const Demo = Template.bind({});
Demo.args = {
  isLoading: false,
  underLineThick: 2,
  mainBackgroundColor: '#a38064',
  tabTextColor: '#e9ecf0',
  underlineColor: '#e9ecf0',
};
