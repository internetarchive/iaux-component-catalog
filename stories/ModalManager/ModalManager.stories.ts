import { html } from 'lit-html';
import './modalmanager.css';
import '@internetarchive/modal-manager';
import { ModalConfig, ModalManager } from '@internetarchive/modal-manager';

export default {
  title: 'Demos/ModalManager',
  argTypes: {
  }
};

const Template = (options: {
  visible: boolean;
}) => {
  setTimeout(() => {
    const manager = document.querySelector('modal-manager') as ModalManager;
    if (options.visible) {
      const config = new ModalConfig();
      config.headline = html`Hi, Everybody!`;
      config.message = html`Hi, Doctor Nick!`;
      manager.showModal({ config });
    } else {
      manager.closeModal();
    }
  })

  return html`
    <modal-manager>
    </modal-manager>
  `
};

export const Demo = Template.bind({});
Demo.args = {
  visible: false,
};
