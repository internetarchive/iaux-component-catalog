import { html } from 'lit-html';
import '@internetarchive/waveform-progress';
import imageFile from './waveform.png';
import './style.css';
import { ZoneOfSilence } from '@internetarchive/waveform-progress';

export default {
  title: 'Demos/WaveformProgress',
  argTypes: {
    percentComplete: {
      control: { type: 'range', min: 0, max: 100, step: 0.1 }
    },
    width: {
      control: { type: 'range', min: 0, max: 600 }
    },
    height: {
      control: { type: 'range', min: 0, max: 300 }
    },
    zoneOfSilenceColor: {
      control: { type: 'color' }
    },
    fillColor: {
      control: { type: 'color' }
    }
  }
};

const Template = (options: {
  waveformUrl: string;
  interactive: boolean;
  percentComplete: number;
  zonesOfSilence?: ZoneOfSilence[];
  fillColor?: string;
  zoneOfSilenceColor?: string;
  width?: number;
  height?: number;
}) => {
  const styleContainer = document.documentElement.style;
  if (options.fillColor) styleContainer.setProperty('--fillColor', options.fillColor);
  if (options.zoneOfSilenceColor) styleContainer.setProperty('--zoneOfSilenceColor', options.zoneOfSilenceColor);
  if (options.width) styleContainer.setProperty('--waveformWidth', `${options.width}px`);
  if (options.height) styleContainer.setProperty('--waveformHeight', `${options.height}px`);

  return html`
    <waveform-progress
      .waveformUrl=${imageFile}
      ?interactive=${options.interactive}
      .percentComplete=${options.percentComplete}
      .zonesOfSilence=${options.zonesOfSilence ?? []}
    ></waveform-progress>
  `
};

const zone1: ZoneOfSilence = { startPercent: 23, endPercent: 27 }
const zone2: ZoneOfSilence = { startPercent: 42, endPercent: 47 }
const zone3: ZoneOfSilence = { startPercent: 58, endPercent: 60 }
const zone4: ZoneOfSilence = { startPercent: 78, endPercent: 85 }
const zonesOfSilence = [zone1, zone2, zone3, zone4];

export const Demo = Template.bind({});
Demo.args = {
  waveformUrl: imageFile,
  interactive: true,
  percentComplete: 25,
  zonesOfSilence: zonesOfSilence,
  width: 300,
  height: 100
};
