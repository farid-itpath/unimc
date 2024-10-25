import {useNavigation} from '@react-navigation/native';

export const useEventDetails = () => {
  const navigation = useNavigation();
  const handlePressBack = () => navigation.goBack();
  return {
    handlePressBack,
  };
};
