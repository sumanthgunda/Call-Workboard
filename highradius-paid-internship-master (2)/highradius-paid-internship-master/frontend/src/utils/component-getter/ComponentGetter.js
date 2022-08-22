import React from "react";
import { CARDS } from "../constant";
import FirstCard from "../../components/HomePage/FirstCard";
import SixthCard from "../../components/HomePage/SixthCard";

function componentGetter(props) {
  const { componentId, data, index, data1 } = props;

  if((Object.keys(data).length === 0) || (Object.keys(data1).length === 0)){
return <FirstCard data={data}/>
  }

  else if (data[index] === undefined && index !== 5) {
    return null;
  } else if (componentId === CARDS.FIRST_CARD) {
    return <FirstCard data={data[index]} />;
  } else if (componentId === CARDS.SIXTH_CARD && data1 !== null) {
    return <SixthCard data={data && data[0]} data1={data1 && data1} />;
  } else return null;
}

export default componentGetter;
