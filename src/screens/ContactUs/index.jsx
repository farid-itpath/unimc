import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../utils/constants';
import {ICONS} from '../../assets';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {heightScale} from '../../utils/helper';

const ContactUs = ({navigation}) => {
  const {t} = useTranslation();
  const [focusedField, setFocusedField] = useState('');

  const handleBackPress = () => navigation.goBack();
  const handleSubmit = values => {
    console.log('Form Data:', values);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('Name is required')),
    email: Yup.string()
      .email(t('Invalid email address'))
      .required(t('Email is required')),
    message: Yup.string()
      .min(50, t('Message must be at least 50 characters'))
      .required(t('Message is required')),
  });

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
          <Text style={styles.headerTitle}>{t('Contact Us')}</Text>
          <View />
        </View>
        <Formik
          initialValues={{name: '', email: '', message: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              {/* Name Input */}
              <View style={{gap: 5, marginBottom: heightScale(40)}}>
                <TextInput
                  style={[
                    styles.textInput,
                    focusedField === 'name' && {borderColor: COLORS.primary},
                  ]}
                  placeholder={t('Name')}
                  onChangeText={handleChange('name')}
                  onBlur={() => {
                    handleBlur('name');
                    setFocusedField('');
                  }}
                  onFocus={() => setFocusedField('name')}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>*{t(errors.name)}</Text>
                )}
              </View>

              {/* Email Input */}
              <View style={{gap: 5, marginBottom: heightScale(40)}}>
                <TextInput
                  style={[
                    styles.textInput,
                    focusedField === 'email' && {borderColor: COLORS.primary},
                  ]}
                  placeholder={t('Email')}
                  placeholderTextColor={COLORS.grey}
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={() => {
                    handleBlur('email');
                    setFocusedField('');
                  }}
                  onFocus={() => setFocusedField('email')}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>*{t(errors.email)}</Text>
                )}
              </View>

              {/* Message Input */}
              <View style={{gap: 5, marginBottom: heightScale(40)}}>
                <TextInput
                  style={[
                    styles.textInput,
                    styles.textArea,
                    focusedField === 'message' && {borderColor: COLORS.primary},
                  ]}
                  placeholder={t('Message')}
                  multiline
                  numberOfLines={4}
                  onChangeText={handleChange('message')}
                  onBlur={() => {
                    handleBlur('message');
                    setFocusedField('');
                  }}
                  onFocus={() => setFocusedField('message')}
                  value={values.message}
                />
                {touched.message && errors.message && (
                  <Text style={styles.errorText}>*{t(errors.message)}</Text>
                )}
              </View>

              {/* Submit Button */}
              <TouchableOpacity
                style={styles.buttonApplyView}
                onPress={handleSubmit}>
                <Text style={styles.buttonApplyTitle}>{t('Submit')}</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;
