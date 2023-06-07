// import {Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {data} from '../../components/slide';
import Slide from '../../components/slide/Slide';
import {Image} from 'react-native';

const OnBoard = ({navigation}: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex(prevIndex => prevIndex + 1);
    } else {
      navigation.navigate('SignIn');
    }
  };

  const handleSkip = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Slide
      img={data[activeIndex].img}
      heading={data[activeIndex].heading}
      text={data[activeIndex].text}
      OnNext={handleNext}
      navigation={navigation}
      OnSkip={handleSkip}
      activeIndex={activeIndex}
    />
  );
};

export default OnBoard;
