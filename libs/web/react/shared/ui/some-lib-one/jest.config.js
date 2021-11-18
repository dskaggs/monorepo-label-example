module.exports = {
  displayName: 'web-react-shared-ui-some-lib-one',
  preset: '../../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../../coverage/libs/web/react/shared/ui/some-lib-one',
};
