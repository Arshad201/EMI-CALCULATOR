import React from 'react';
import FormGroupA from './FormGroupA';
import FormGroupB from './FormGroupB';
import FormGroupC from './FormGroupC';


export default function Form(props) {

  
  
  return (
    <div className='Wrapper'>
      <form action="" className="formForEmiCal box" style={props.styleElm}>
        <FormGroupA myLa={props.myLa} LA={props.LA}/>
        <FormGroupB myIR={props.myIR} IR={props.IR}/>
        <FormGroupC myLT={props.myLT} LT={props.LT}/>
      </form>
    </div>
  )
}
