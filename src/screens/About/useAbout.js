import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAbout, getBannerImages} from '../../redux/reducres/aboutSlice';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';
import {useTranslation} from 'react-i18next';

export const useAbout = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [viewPositions, setViewPositions] = useState({});
  const [collapsed, setCollapse] = useState([]);
  const scrollRef = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {aboutData, aboutCategories, aboutImagesId, aboutBannerImages} =
    useSelector(state => state.about);
  const {t} = useTranslation();
  const handleSelectCategory = index => {
    if (index === 0) {
      setCollapse(prevState => {
        const newState = [...prevState];
        return newState.map(_ => true);
      });
    } else {
      setCollapse(prevState => {
        const newState = [...prevState];
        newState[index - 1] = true;
        return newState;
      });
    }
    setSelectedCategory(index);
    scrollRef.current.scrollTo({y: 500, animated: true});
  };
  const handleLayout = (event, viewId) => {
    const {y} = event.nativeEvent.layout;
    setViewPositions(prev => ({...prev, [viewId]: y}));
  };
  const scrollToView = viewId => {
    const position = viewPositions[viewId - 1];
    if (position) {
      scrollRef.current.scrollTo({
        y: position,
        animated: true,
      });
    } else {
      scrollRef.current.scrollTo({
        y: -100,
        animated: true,
      });
    }
  };
  const handlePressSettings = () => navigation.navigate(SCREENS.SETTINGS.name);
  const handleToggleCollapse = index => {
    setCollapse(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  useEffect(() => {
    dispatch(getAbout());
  }, []);
  useEffect(() => {
    dispatch(getBannerImages(aboutImagesId));
  }, [aboutImagesId]);
  useEffect(() => {
    setCollapse(new Array(aboutCategories?.length).fill(true));
  }, [aboutCategories]);
  return {
    selectedCategory,
    scrollRef,
    aboutData,
    aboutCategories,
    aboutBannerImages,
    t,
    collapsed,
    handleSelectCategory,
    handleLayout,
    scrollToView,
    handlePressSettings,
    handleToggleCollapse,
  };
};
