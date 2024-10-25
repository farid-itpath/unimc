import {useNavigation} from '@react-navigation/native';

export const useNewsDetails = () => {
  const navigation = useNavigation();
  const handlePressBack = () => navigation.goBack();
  return {
    handlePressBack,
  };
};
