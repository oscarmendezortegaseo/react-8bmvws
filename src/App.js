import React from "react";
import PropsType from "prop-types";

import Header from "./Header";
import Counter from './Counter';
import Player from "./Player";
import Buttons from './Buttons';
import Footer from './Footer';

import LogicCounter from "./Logic/Counter";



const App = (props) => {
  const[counter, setCounter] = React.useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  const[video, setVideo] = React.useState({
    title: "video ejemplo",
    video: "peuVFBTt47o"
  })



  React.useEffect(() => {
    setInterval(() => {
      const getCounter = LogicCounter(props.endDate);
      setCounter(getCounter);
    }, 1000);
  }, []);

  return (
    <>
      <Header key="Header" />
     
      <Counter key="Counter" {...counter} />
      <Player key="Player" {...video} />
  
      <Buttons key="Botonera" changeVideo={setVideo} />
      <Footer key="Footer" />
    </>
  )
};

App.propsTypes = {
  endDate: PropsType.string,
};

App.defaultProps = {
    endDate: "11/01/2023 00:00 AM"
};


export default App;