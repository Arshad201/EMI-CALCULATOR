import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import './App.css';
import Form from './Component/Form/Form';
import Result from './Component/Result/Result';

function App() {

  let [LA, setLA] = useState(0);
  let [IR, setIR] = useState(5);
  let [LT, setLT] = useState(1);
  let [mode, setMode] = useState(false);

  let toggleMode = () => {
    setMode(!mode);
  };

  let modeColor;
  if(mode===false){   
    modeColor = {
      color:'black',
      backgroundColor:'white',
      borderColor:'black'
    }
    document.body.style.backgroundColor='white';
  }else{
    modeColor = {
      color:'white',
      backgroundColor:'black',
      borderColor:'white'
    }
    document.body.style.backgroundColor='black';
  }


  let myLa = (e) => {
    setLA(e.target.value);

  }

  let myIR = (e) => {
    setIR(e.target.value);
  }
  let myLT = (e) => {
    setLT(e.target.value);
  }



  let monthlyRate = IR / (12 * 100);
  let timeInMonth = LT < 1 ? 1 * 12 : LT * 12;
  let onePlusR = (1 + monthlyRate) ** timeInMonth;
  let denominator = onePlusR - 1;
  let rawEMI = LA * monthlyRate * onePlusR / denominator;
  let EMI = Math.trunc(rawEMI);

  let rawTA = rawEMI * timeInMonth;
  let TA = Math.round(rawTA);

  let TIPraw = rawTA - LA;
  let TIP = Math.trunc(TIPraw);

  let rawTIinPercentage = (TIPraw/rawTA)*100;
  let TIinPercentage = rawTIinPercentage.toFixed(1);
  let principleOfLA = (100-rawTIinPercentage).toFixed(1);
  // console.log(TIinPercentage);
  // console.log(principleOfLA);

  let data = {
    labels: ['Total Interest', 'Principle Loan Amount'],
    datasets: [
      {
        label: '# of Votes',
        data:[TIinPercentage, principleOfLA],
        backgroundColor: [
          '#FF4E02',
          'green',
        ],
        borderColor: [
          '#EEEEEE'
        ],
        borderWidth: 1,

      },
    ],
  }
  let option = {
    plugins: {
      title: {
        display: true,
        text: 'Break-up of Total Payment',
        color: modeColor.color,
        position: 'bottom',
        backgroundColor: 'black',
        font: {
          size: '25px',
          famiy: 'Helvetica Neue'
        }
      },
      legend: {
        padding: 35,
        position: 'bottom',
        labels:{
          color:modeColor.color,
          font:{
            size:15
          }
        }
      }
      ,
      tooltip: {
        backgroundColor: "#E7878",
        displayColors: false,
        color: 'black',
        padding: 15,
        borderWidth: 2,
        borderColor: "black",
        callbacks: {
          label: (context) => {
            return `${context.label} : ${context.raw}%`;
          }
        }
      }
    },
    responsive: true
  }

  return (
    <>
      <Navbar toggleMode={toggleMode} mode={mode} txtColor={{color:modeColor.color}} bgColor={{backgroundColor:modeColor.backgroundColor, borderColor:modeColor.borderColor}}/>
      <Form myLa={myLa} LA={LA} myIR={myIR} IR={IR} myLT={myLT} LT={LT} styleElm={{backgroundColor:modeColor.backgroundColor, color:modeColor.color}}/>
      <Result emi={EMI.toLocaleString('en-IN')} tip={TIP.toLocaleString('en-IN')} ta={TA.toLocaleString('en-IN')} data={data} option={option} styleElm={{backgroundColor:modeColor.backgroundColor, color:modeColor.color}}/>
    </>
  );
}

export default App;
