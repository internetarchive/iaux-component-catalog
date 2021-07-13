import { html } from 'lit-html';
import './donationform.css';
import '@internetarchive/donation-form';
import { DonationPaymentInfo, DonationType } from '@internetarchive/donation-form-data-models';

export default {
  title: 'Demos/DonationForm',
  argTypes: {
    donationType: {
      options: ['one-time', 'monthly'],
      control: { type: 'radio' }
    }
  }
};

const Template = (options: {
  donationAmount: number;
  donationType: DonationType;
  coverFees: boolean;
}) => {
  const donationInfo = new DonationPaymentInfo({
    donationType: options.donationType,
    amount: options.donationAmount,
    coverFees: options.coverFees
  })
  return html`
    <donation-form .donationInfo=${donationInfo}>
    </donation-form>
  `
};

export const Demo = Template.bind({});
Demo.args = {
  donationAmount: 5,
  donationType: DonationType.OneTime,
  coverFees: false
};
