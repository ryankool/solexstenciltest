// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'CoolComponent',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    buttonText: { control: 'text' },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `<cool-component button-text="${args.buttonText}" color-button="${args.color}"></cool-component>`;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  buttonText: 'hello world',
  color: 'primary',
};
export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Secondary.args = {
  buttonText: 'hello secondary',
  color: 'secondary',
};
