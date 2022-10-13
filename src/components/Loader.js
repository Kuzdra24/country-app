import React from 'react';
import ReactLoading from 'react-loading';
 
const Loader = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={'50px'} width={'50px'} />
);
 
export default Loader;