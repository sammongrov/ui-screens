import React from 'react';
import renderer from 'react-test-renderer';
import { Alert } from 'react-native';
import Disclaimer from '../Disclaimer';

const onAccept = () => Alert.alert('Help');

it('Disclaimer renders correctly', () => {
  const tree = renderer
    .create(
      <Disclaimer
        onAccept={onAccept}
        header="header"
        content="content"
        accept="accept"
        locale="locale"
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('name', () => {
  // array
  expect(Array.isArray(['value'])).toBe(true);
});
