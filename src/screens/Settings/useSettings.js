import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {languageData} from '../../redux/reducres/languageSlice';

export const useSettings = () => {
  const {language} = useSelector(state => state.language);
  console.log('language: ', language);
  const [selectedLanguage, setSelectedLanguage] = useState(
    language ? language : 'it',
  );
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const handleChangeLanguage = language => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    dispatch(languageData(language));
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
