import '!style-loader!css-loader!../src/styles/globals.css';
// import 'keen-slider/keen-slider.min.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
