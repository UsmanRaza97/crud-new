import React from 'react';
import { useSelector } from 'react-redux';
const Karam = () => {
  const countValue = useSelector(state => state.counterReducer.countValue);
  return <div>{countValue}</div>;
};

export default Karam;
