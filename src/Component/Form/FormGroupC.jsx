import React from 'react';
import './Form.css';

export default function FormGroup(props) {
  return (
    <div className="form-group">
          <div className="txtWrapper">
            <label className='inputLabels' htmlFor="IRtxtInput">Loan Tenure</label>
            <div className="inputBox">
              <input type="number" id="IRtxtInput" className='txtInputs' onChange={props.myLT} value={props.LT<1?1:props.LT} />
              <span className="inputIcon">Year</span>
            </div>
          </div>
          <div className="rangeWrapper">
              <div className="rangeInputBox">
                <input type="range" id="range4LA" onChange={props.myLT} value={props.LT<1?1:props.LT} className='range' min='0' max='30' step={0.5}/>
              </div>
              <div className="rangeScale">
                <span className="scaleLine">
                  <span className="scaleText scaleText-1">
                    0
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-2">
                    5
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-3">
                  10
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-4">
                   15
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-5">
                    20
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-6">
                   25
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-7">
                    30
                  </span>
                </span>
              </div>
          </div>
        </div>
  )
}
