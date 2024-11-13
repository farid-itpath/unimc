import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import './../../locale/i18n';
import {COLORS, LANGUAGES} from '../../utils/constants';
import {ICONS} from '../../assets';
import {styles} from './style';
import {useSettings} from './useSettings';
import {LanguageItem} from './LanguageItem';

const Settings = () => {
  const {selectedLanguage, handleChangeLanguage, handleBackPress, t} =
    useSettings();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        backgroundColor={COLORS.extraLightGrey}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <TouchableHighlight
            onPress={handleBackPress}
            underlayColor={COLORS.primaryExtraLight}
            style={styles.backIconView}>
            <Image source={ICONS.back} style={styles.backIcon} />
          </TouchableHighlight>
          <Text style={styles.headerTitle}>{t('settings')}</Text>
          <View />
        </View>
        <View style={styles.languageSection}>
          {LANGUAGES.map((item, index) => (
            <LanguageItem
              key={index}
              selected={selectedLanguage}
              label={item.title}
              code={item.code}
              onPress={() => handleChangeLanguage(item.code)}
              flag={item.flag}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
