const path = require('path');

const pathToInlineSvg = path.resolve(__dirname, '../assets/icons');

module.exports = ({ config }) => {
  config.resolve.alias = {
    'next/image': path.resolve(__dirname, '../__mocks__/NextJSImageMock.js'),
    '@public': path.resolve(__dirname, '../public'),
    '@': path.resolve(__dirname, '../src'),
  };
  const rules = config.module.rules;

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
  fileLoaderRule.exclude = pathToInlineSvg;

  rules.push({
    test: /\.svg$/,
    include: pathToInlineSvg,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  });

  return config;
};
