import React from 'react';
import PieResult from './PieResult';
import TxtResult from './TxtResult';
import './Result.css';

export default function Result(props) {
  return (
    <div className='Wrapper'>
      <div className="box" style={props.styleElm}>
        <div className="flex-container">
      <TxtResult emi={props.emi} tip={props.tip} ta={props.ta}/>
      <PieResult data={props.data} option={props.option}/>
        </div>
      </div>
    </div>
  )
}
