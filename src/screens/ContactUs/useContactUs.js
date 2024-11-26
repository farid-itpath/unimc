import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {contactUs} from '../../redux/reducres/aboutSlice';
import {SCREENS} from '../../utils/constants';

export const useContactUs = () => {
  const navigation = useNavigation();
  const [focusedField, setFocusedField] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {contactUsLoading, contactUsMessage} = useSelector(
    state => state.about,
  );
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const handleBackPress = () => navigation.goBack();
  const handleSubmit = values => {
    const formData = new FormData();
    Object.keys(values).forEach(key => formData.append(key, values[key]));
    dispatch(contactUs(formData));
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
    navigation.navigate(SCREENS.SETTINGS.name);
  };
  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required(t('name_is_required')),
    email: Yup.string()
      .email(t('invalid_email_address'))
      .required(t('email_is_required')),
    message: Yup.string()
      .min(50, t('message_must_be_at_least_50_characters'))
      .required(t('message_is_required')),
  });
  return {
    t,
    focusedField,
    setFocusedField,
    contactUsLoading,
    contactUsMessage,
    modalVisible,
    validationSchema,
    handleBackPress,
    handleSubmit,
    handleModalClose,
  };
};
