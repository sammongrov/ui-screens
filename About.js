import React, { Component } from 'react';
import { Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';
import { NavBar, Text, Screen, Icon, Button } from '@ui/components';
import { translate } from '../../../src/i18n';

export default class About extends Component {
  constructor(props) {
    super(props);
    const {
      appLogo,
      versionNo,
      buildNo,
      website,
      email,
      poweredBy,
      onHelpPress,
      onBackPress,
      navIconName,
      navIconColor,
      navIconSize,
      buttonTitle,
    } = this.props;

    this.appLogo = appLogo;
    this.versionNo = versionNo;
    this.buildNo = buildNo;
    this.website = website;
    this.email = email;
    this.poweredBy = poweredBy;
    this.onHelpPress = onHelpPress;
    this.onBackPress = onBackPress;
    this.navIconName = navIconName;
    this.navIconColor = navIconColor;
    this.navIconSize = navIconSize;
    this.buttonTitle = buttonTitle;
  }

  render() {
    const { appLogo } = this.props;
    return (
      <Screen>
        <NavBar
          leftComponent={
            <TouchableOpacity onPress={this.onBackPress}>
              <Icon name={this.navIconName} color={this.navIconColor} size={this.navIconSize} />
            </TouchableOpacity>
          }
          titleText="About"
        />
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <View style={[styles.centerColumnContainer, styles.padding15]}>
            <View style={styles.alignCenterJustifyEnd}>
              <Image source={appLogo} style={styles.logo} />
            </View>
            <View style={styles.centerContainer}>
              <Text style={[styles.subtext, styles.margin5]}>
                {translate('Version')}: {this.versionNo}
              </Text>
              <Text style={[styles.subtext3, styles.margin5]}>
                {translate('Build')}: {this.buildNo}
              </Text>
              <Button
                title={this.buttonTitle}
                onPress={this.onHelpPress}
                buttonStyle={[styles.btnPrimaryBg, styles.margin5]}
              />
              <Text style={[styles.subtext1, styles.margin5]}>{this.website}</Text>
              <Text style={[styles.subtext1, styles.margin5]}>{this.email}</Text>
              <Text style={[styles.subtext1, styles.margin5]}>{this.poweredBy}</Text>
            </View>
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

About.propTypes = {
  versionNo: PropTypes.string.isRequired,
  buildNo: PropTypes.string.isRequired,
  website: PropTypes.string,
  email: PropTypes.string,
  poweredBy: PropTypes.string,
  appLogo: PropTypes.number.isRequired,
  onHelpPress: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  navIconName: PropTypes.string.isRequired,
  navIconColor: PropTypes.string.isRequired,
  navIconSize: PropTypes.number.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

About.defaultProps = {
  website: 'www.mongrov.com',
  email: 'support@mongrov.com',
  poweredBy: 'Powered by Mongrov, Inc.',
};
