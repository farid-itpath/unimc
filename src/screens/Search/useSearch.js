import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';

export const useSearch = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigation = useNavigation();
  const handleOpenFilterModal = () => setModalVisible(true);
  const handleCloseFilterModal = () => setModalVisible(false);
  const toggleFitlerItem = filterItem =>
    setSelectedOptions(
      selectedOptions.includes(filterItem)
        ? selectedOptions.filter(item => item !== filterItem)
        : [...selectedOptions, filterItem],
    );
  const handlePressBack = () => navigation.goBack();
  const handlePressResultItem = () =>
    navigation.navigate(SCREENS.EVENTDETAILS.name);
  return {
    modalVisible,
    selectedOptions,
    handleOpenFilterModal,
    handleCloseFilterModal,
    toggleFitlerItem,
    handlePressBack,
    handlePressResultItem,
  };
};
