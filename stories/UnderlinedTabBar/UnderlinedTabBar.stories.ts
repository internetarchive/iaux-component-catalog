import { html } from 'lit-html';
import '@internetarchive/underlined-tab-bar';


export default {
  title: 'Demos/UnderlinedTabBar',
  argTypes: {
    underLineThick: {
      control: { type: 'range', min: 0, max: 10, step: 1 }
    },
    buttonSpacing: {
      control: { type: 'range', min: 0, max: 10, step: 1 }
    },
    fontSize: {
      control: { type: 'range', min: 0, max: 50, step: 1 }
    },
    tabTextColor: {
      control: { type: 'color' }
    },
    underlineColor: {
      control: { type: 'color' }
    },
    loadingDotColor: {
      control: { type: 'color' }
    },
  }
};

const Template = (options: {
  buttonSpacing: number;
  itemClicked: number;
  fontSize:number;
  isLoading: boolean;
  underLineThick?: number;
  mainBackgroundColor?: string;
  tabTextColor?: string;
  underlineColor?: string;
  loadingDotColor?: string;
}) => {
  const styleContainer = document.documentElement.style;
  if (options.underLineThick) styleContainer.setProperty('--tabBarUnderlineThickness', `${options.underLineThick}px`);
  if (options.tabTextColor) styleContainer.setProperty('--tabBarTextColor', options.tabTextColor);
  if (options.underlineColor) styleContainer.setProperty('--tabBarUnderlineColor', options.underlineColor);
  if (options.loadingDotColor) styleContainer.setProperty('--tabBarLoadingDotColor', options.loadingDotColor);
  if (options.buttonSpacing) styleContainer.setProperty('--tabBarbuttonSpacing', `${options.buttonSpacing}px`);
  if (options.fontSize) styleContainer.setProperty('--tabBarFontSize', `${options.fontSize}px`);

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
  fontSize: 15,
  buttonSpacing: 0,
  isLoading: false,
  underLineThick: 2,
  tabTextColor: 'black',
  underlineColor: 'black',
  loadingDotColor: 'green',
};
