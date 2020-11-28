import React from 'react';
//import { Container, Divider } from '@material-ui/core';
import styled from 'styled-components';
import Banner from "./HomePageComponents/Banner"
import SingleContent from "./HomePageComponents/SingleContent"
import MultiContent from "./HomePageComponents/MultiContent"
import Resources from "./HomePageComponents/Resources"
import InteractiveContent from "./HomePageComponents/InteractiveContent"
import Footer from "./HomePageComponents/Footer"

function App() {
  return (
    <div>
      <Banner />
      <SingleContent />
      <InteractiveContent />
      <MultiContent />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
