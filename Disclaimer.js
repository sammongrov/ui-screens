import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import theme, { styles } from 'react-native-theme';
import { Screen, NavBar, Button, Text } from '@ui/components';
import { translate } from '../../../src/i18n';

export default class Disclaimer extends Component {
  constructor(props) {
    super(props);
    const { header, content, accept, onAccept, locale, safeBgColors } = this.props;
    this.header = header;
    this.content = content;
    this.accept = accept;
    this.onAccept = onAccept;
    this.locale = locale;
    this.safeBgColors = safeBgColors;
  }

  componentWillMount() {
    theme.setRoot(this);
  }

  render() {
    return (
      <Screen safeBgColors={this.safeBgColors}>
        <NavBar titleText="Disclaimer" />
        <View style={[styles.flex1, styles.disclaimerContainer]}>
          <View style={styles.primaryContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.paraText}>{this.content}</Text>
            </ScrollView>
          </View>
          <Button
            testID="accept-button"
            onPress={this.onAccept}
            title={this.accept}
            buttonStyle={[styles.disclaimerButtonStyle]}
            containerStyle={[styles.paddingHorizontal80, styles.paddingVertical8]}
          />
        </View>
      </Screen>
    );
  }
}

Disclaimer.propTypes = {
  onAccept: PropTypes.func.isRequired,
  header: PropTypes.string,
  content: PropTypes.string.isRequired,
  accept: PropTypes.string,
  locale: PropTypes.string,
  safeBgColors: PropTypes.array,
};

Disclaimer.defaultProps = {
  header: translate('Disclaimer', this.locale),
  accept: translate('IAccept', this.locale),
  locale: null,
  safeBgColors: ['#000', '#000'],
};
