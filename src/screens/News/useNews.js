import {useRef, useState} from 'react';

export const useNews = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const scrollRef = useRef();
  const handleSelectCategory = index => {
    setSelectedCategory(index);
    scrollRef.current.scrollTo({y: 500, animated: true});
  };
  return {selectedCategory, scrollRef, handleSelectCategory};
};
