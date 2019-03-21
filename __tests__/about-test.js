import React from 'react';
import renderer from 'react-test-renderer';
import { Alert } from 'react-native';
import About from '../About';

const mockOnPress = jest
  .fn()
  .mockImplementationOnce(() => Alert.alert('Help is pressed'))
  .mockImplementationOnce(() => Alert.alert('Back is pressed'));

it('About renders correctly', () => {
  const tree = renderer
    .create(
      <About
        versionNo="12.35.67"
        buildNo="1.2.3"
        website="www.mongrov.com"
        email="support@mongrov.com"
        poweredBy="Powered by Mongrov, Inc."
        appLogo={777}
        onHelpPress={mockOnPress}
        onBackPress={mockOnPress}
        navIconName="icon1.jpg"
        navIconColor="#fff"
        navIconSize={30}
        buttonTitle="Press Me"
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
