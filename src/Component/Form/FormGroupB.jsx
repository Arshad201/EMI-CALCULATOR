import React from 'react';
import './Form.css';
import { AiOutlinePercentage } from 'react-icons/ai';

export default function FormGroup(props) {
  return (
    <div className="form-group">
          <div className="txtWrapper">
            <label className='inputLabels' htmlFor="IRtxtInput">Interest Rate</label>
            <div className="inputBox">
              <input type="number" id="IRtxtInput" className='txtInputs' onChange={props.myIR} value={props.IR} />
              <span className="inputIcon"><AiOutlinePercentage/></span>
            </div>
          </div>
          <div className="rangeWrapper">
              <div className="rangeInputBox">
                <input type="range" id="range4LA" onChange={props.myIR} value={props.IR} className='range' min='5' max='20' step={0.25}/>
              </div>
              <div className="rangeScale">
                <span className="scaleLine">
                  <span className="scaleText scaleText-1">
                    5
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-2">
                    7.5
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-3">
                  10
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-4">
                    12.5
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-5">
                    15
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-6">
                    17.5
                  </span>
                </span>
                <span className="scaleLine">
                  <span className="scaleText scaleText-7">
                    20
                  </span>
                </span>
              </div>
          </div>
        </div>
  )
}
