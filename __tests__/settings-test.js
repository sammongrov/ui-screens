import React from 'react';
import renderer from 'react-test-renderer';
import { Share } from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Alert } from 'react-native';
import Settings from '../Settings';

configure({ adapter: new Adapter() });

jest.mock('Share', () => {
  const share = {
    share: jest.fn(),
  };
  return share;
});

const loadWallet = () => Alert.alert('Help');

it('About renders correctly', () => {
  const tree = renderer.create(<Settings loadWallet={loadWallet} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Settings button is clicked', () => {
  const rootComponent = shallow(<Settings />);
  const firstButton = rootComponent.find('Button').first();
  firstButton.props().onPress();
  expect(Share.share).toBeCalled();
});
