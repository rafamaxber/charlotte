/* TODO: 
*  [] Improve load svg icon by sprite svg
*  [] Create other loading components to especific load
*/
import React from 'react';
import styled from 'styled-components';
import './Loading.css';
import svgLogo from '../../assets/loading-icon.svg';

const loadingBar = styled.div`
  position: relative;
`;

const Loading = () => (
  <loadingBar>
    <img className="img-loading" src={svgLogo} alt="loading..."/>
  </loadingBar>
);

export default Loading;
