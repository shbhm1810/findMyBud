import React, {useRef} from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('screen').width;
export const IMAGE_HEIGHT = Dimensions.get('screen').height * 0.13;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const BannerCarousel = props => {
  const {renderChildComponent, caraouselData} = props;
  const carouselRef = useRef(null);

  return (
    <Carousel
      layout="default"
      ref={carouselRef}
      data={caraouselData}
      renderItem={renderChildComponent}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      inactiveSlideShift={15}
      useScrollView={true}
      autoplay={true}
      autoplayInterval={4000}
      loop
    />
  );
};

export default BannerCarousel;
