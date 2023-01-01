import React from 'react';
import './Form.css';
import { FaRupeeSign } from 'react-icons/fa';

export default function FormGroup(props) {
  return (
    <div className="form-group">
          <div className="txtWrapper">
            <label className='inputLabels' htmlFor="LAtxtInput">Loan Amount</label>
            <div className="inputBox">
              <input type="number" id="LAtxtInput" className='txtInputs' onChange={props.myLa} value={props.LA} />
              <span className="inputIcon"><FaRupeeSign/></span>
            </div>
          </div>
          <div className="rangeWrapper">
              <div className="rangeInputBox">
                <input type="range" id="range4LA" onChange={props.myLa} value={props.LA} className='range' min='0' max='20000000' step={100000}/>
              </div>
              <div className="rangeScale">
                <span className="scaleLine">
                  <span className="scaleText scaleText-1">
                    0
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-2">
                    25L
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-3">
                  50L
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-4">
                    75L
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-5">
                    100L
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-6">
                    125L
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-7">
                    150L
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-8">
                    175L
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-9">
                    200L
                  </span>
                </span>
              </div>
          </div>
        </div>
  )
}
