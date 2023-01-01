import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';


export default function TxtResult(props) {
  return (
    <div className='result'>
      <div className="emi-box">
        <span className="EMiTitle">
        Loan EMI
        </span>
        <span className="emiNum">
          <span className="icon-emi"><FaRupeeSign/></span>
        {props.emi}
        </span>
      </div>
      <div className="toIpayable">
      <span className="tipTitle">
      Total Interest Payable
        </span>
        <span className="tipNum">
          <span className="icon-tip"><FaRupeeSign/></span>
          {props.tip}
        </span>
      </div>
      <div className="total-payment">
      <span className="tpTitle">
      Total Payment
(Principal + Interest)
        </span>
        <span className="tpNum">
          <span className="icon-tp"><FaRupeeSign/></span>
          {props.ta}
        </span>
      </div>
    </div>
  )
}
