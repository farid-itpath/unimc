import React from 'react';
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
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import {styles} from './style';
import {COLORS} from '../../utils/constants';
import {ICONS} from '../../assets';
import CustomModal from './Modal';
import {useContactUs} from './useContactUs';

const ContactUs = () => {
  const {
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
  } = useContactUs();

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
          <Text style={styles.headerTitle}>{t('contact_us')}</Text>
          <View />
        </View>
        <Formik
          initialValues={{full_name: '', email: '', message: ''}}
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
              <View style={styles.textInputView}>
                <TextInput
                  style={[
                    styles.textInput,
                    focusedField === 'full_name' && {
                      borderColor: COLORS.primary,
                    },
                  ]}
                  placeholder={t('name')}
                  onChangeText={handleChange('full_name')}
                  onBlur={() => {
                    handleBlur('full_name');
                    setFocusedField('');
                  }}
                  onFocus={() => setFocusedField('full_name')}
                  value={values.full_name}
                  placeholderTextColor={COLORS.grey}
                />
                {touched.full_name && errors.full_name && (
                  <Text style={styles.errorText}>*{t(errors.full_name)}</Text>
                )}
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  style={[
                    styles.textInput,
                    focusedField === 'email' && {borderColor: COLORS.primary},
                  ]}
                  placeholder={t('email')}
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
              <View style={styles.textInputView}>
                <TextInput
                  style={[
                    styles.textInput,
                    styles.textArea,
                    focusedField === 'message' && {borderColor: COLORS.primary},
                  ]}
                  placeholder={t('message')}
                  multiline
                  numberOfLines={4}
                  onChangeText={handleChange('message')}
                  placeholderTextColor={COLORS.grey}
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
              <TouchableOpacity
                disabled={contactUsLoading}
                style={styles.buttonApplyView}
                onPress={handleSubmit}>
                <Text style={styles.buttonApplyTitle}>{t('submit')}</Text>
                {contactUsLoading && <ActivityIndicator color={COLORS.white} />}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
      <CustomModal
        visible={!!(modalVisible && contactUsMessage)}
        onClose={handleModalClose}
        AllowButtonText={'OK'}
        message={contactUsMessage}
      />
    </SafeAreaView>
  );
};

export default ContactUs;
