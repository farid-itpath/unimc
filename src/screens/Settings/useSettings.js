import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

export const useSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('it');
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const handleChangeLanguage = language => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };
  const handleBackPress = () => navigation.goBack();
  return {
    selectedLanguage,
    handleChangeLanguage,
    handleBackPress,

    t,
    i18n,
  };
};
