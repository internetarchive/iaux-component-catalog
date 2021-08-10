import { html } from 'lit-html';
import '@internetarchive/scrubber-bar';

export default {
  title: 'Demos/ScrubberBar',
  argTypes: {
    trackFillColor: {
      control: { type: 'color' }
    },
    trackColor: {
      control: { type: 'color' }
    },
    markerHeightExpanded: {
      control: { type: 'range', min: 0, max: 40, step: 1 }
    },
    markerHeightCollapsed: {
      control: { type: 'range', min: 0, max: 40, step: 1 }
    },
  }
};

const Template = (options: {
  value: number;
  min: number;
  max: number;
  step: number;
  sectionMarkerPercentages: number[];
  expandSectionMarkers: boolean;
  trackFillColor?: string;
  trackColor?: string;
  markerHeightExpanded?: number;
  markerHeightCollapsed?: number;
}) => {
  const styleContainer = document.documentElement.style;
  if (options.trackFillColor) styleContainer.setProperty('--trackFillColor', options.trackFillColor);
  if (options.trackColor) styleContainer.setProperty('--trackColor', options.trackColor);
  if (options.markerHeightExpanded) styleContainer.setProperty('--markerHeightExpanded', `${options.markerHeightExpanded}px`);
  if (options.markerHeightCollapsed) styleContainer.setProperty('--markerHeightCollapsed', `${options.markerHeightCollapsed}px`);

  return html`
    <scrubber-bar
      .value=${options.value}
      .min=${options.min}
      .max=${options.max}
      .step=${options.step}
      .sectionMarkerPercentages=${options.sectionMarkerPercentages}
      ?expandSectionMarkers=${options.expandSectionMarkers}
    >
    </scrubber-bar>
  `
};

export const Demo = Template.bind({});
Demo.args = {
  value: 0,
  min: 0,
  max: 100,
  step: 0.1,
  sectionMarkerPercentages: [10, 25, 37],
  expandSectionMarkers: false,
  trackFillColor: 'rgba(50, 114, 182, 1)',
  trackColor: 'rgba(100, 100, 100, 0.2)',
  markerHeightExpanded: 25,
  markerHeightCollapsed: 10,
};
