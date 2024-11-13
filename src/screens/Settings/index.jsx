import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import './../../locale/i18n';
import {COLORS, LANGUAGES, SCREENS} from '../../utils/constants';
import {ICONS} from '../../assets';
import {styles} from './style';
import {useSettings} from './useSettings';
import {LanguageItem} from './LanguageItem';
import {useSelector} from 'react-redux';
import {heightScale} from '../../utils/helper';

const Settings = ({navigation}) => {
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
          <Text style={styles.headerTitle1}>{t('Select Language')}</Text>
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

          <View style={{marginTop: heightScale(100)}}>
            <Text style={styles.headerTitle1}>
              {t('Having a problem? Contact us.')}
            </Text>
            <TouchableOpacity
              style={styles.buttonApplyView}
              onPress={() => navigation.navigate(SCREENS.CONTACT_US.name)}>
              <Text style={styles.buttonApplyTitle}>{t('Contact Us')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
