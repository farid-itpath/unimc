import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../../utils/constants';

export const LanguageItem = ({label, selected, onPress, code, flag}) => {
  return (
    <View
      style={[
        styles.languageItem,
        {
          borderWidth: selected === code ? 2 : 1,
          borderColor: selected === code ? COLORS.primary : COLORS.lightGrey,
        },
      ]}>
      <Image source={flag} style={styles.flag} />
      <TouchableOpacity style={styles.radioButton} onPress={onPress}>
        <View
          style={[
            styles.radioButtonIcon,
            selected === code && styles.radioButtonIconSelected,
          ]}
        />
      </TouchableOpacity>
      <Text style={styles.languageTitle}>{label}</Text>
    </View>
  );
};
