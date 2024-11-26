import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../../utils/constants';

export const LanguageItem = ({label, selected, onPress, code, flag}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.languageItem,
        {
          borderWidth: selected === code ? 2 : 1,
          borderColor: selected === code ? COLORS.primary : COLORS.lightGrey,
        },
      ]}>
      <Image source={flag} style={styles.flag} />
      <View style={styles.radioButton}>
        <View
          style={[
            styles.radioButtonIcon,
            selected === code && styles.radioButtonIconSelected,
          ]}
        />
      </View>
      <Text style={styles.languageTitle}>{label}</Text>
    </TouchableOpacity>
  );
};
