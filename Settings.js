import React, { Component } from 'react';
import { Share, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import PropTypes from 'prop-types';
import { NavBar, Text, Screen, Icon, Button } from '@ui/components';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publicKey: '',
      mnemonic: '',
    };
  }

  componentWillMount = async () => {
    const { loadWallet } = this.props;
    const wallet = await loadWallet();
    this.setState({
      publicKey: wallet.publicKey,
      mnemonic: wallet.mnemonic,
    });
  };

  render = () => {
    const { publicKey, mnemonic } = this.state;
    return (
      <Screen>
        <NavBar
          leftComponent={
            <TouchableOpacity onPress={this.onBackPress}>
              <Icon name={this.navIconName} color={this.navIconColor} size={this.navIconSize} />
            </TouchableOpacity>
          }
          titleText="Settings"
        />
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <View style={[styles.centerColumnContainer, styles.padding15]}>
            <View style={styles.centerContainer}>
              <View>
                <Text style={styles.privateKeyTitle}>Public Key</Text>
                <Text style={styles.clientId}>{publicKey}</Text>
              </View>
              <View>
                <Text style={styles.privateKeyTitle}>Recovery phrase</Text>
                <Text style={styles.clientId}>{mnemonic}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Export"
                  onPress={() => {
                    Share.share({
                      message: `Public Key: ${publicKey} // Recovery phrase: ${mnemonic}`,
                      title: 'Wallet sec',
                    });
                  }}
                  buttonStyle={[styles.btnPrimaryBg, styles.margin5]}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </Screen>
    );
  };
}

Settings.propTypes = {
  loadWallet: PropTypes.func.isRequired,
};

Settings.defaultProps = {};
