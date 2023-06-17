import React from 'react';
import {View} from 'react-native';

interface GapProps {
  height?: number;
  width?: number;
}

const Gap = ({height, width}: GapProps) => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
