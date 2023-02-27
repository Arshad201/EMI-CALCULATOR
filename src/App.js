import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import './App.css';
import Form from './Component/Form/Form';
import Result from './Component/Result/Result';

function App() {

  const [LA, setLA] = useState(0);
  const [IR, setIR] = useState(5);
  const [LT, setLT] = useState(1);
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
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


  const myLa = (e) => {
    setLA(e.target.value);

  }

  const myIR = (e) => {
    setIR(e.target.value);
  }
  const myLT = (e) => {
    setLT(e.target.value);
  }



  const monthlyRate = IR / (12 * 100);
  const timeInMonth = LT < 1 ? 1 * 12 : LT * 12;
  const onePlusR = (1 + monthlyRate) ** timeInMonth;
  const denominator = onePlusR - 1;
  const rawEMI = LA * monthlyRate * onePlusR / denominator;
  const EMI = Math.ceil(rawEMI);

  const rawTA = rawEMI * timeInMonth;
  const TA = Math.ceil(rawTA);

  const TIPraw = rawTA - LA;
  const TIP = Math.trunc(TIPraw);

  const rawTIinPercentage = (TIPraw/rawTA)*100;
  const TIinPercentage = rawTIinPercentage.toFixed(1);
  const principleOfLA = (100-rawTIinPercentage).toFixed(1);
 

  const data = {
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
  const option = {
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
    checking
      <Navbar toggleMode={toggleMode} mode={mode} txtColor={{color:modeColor.color}} bgColor={{backgroundColor:modeColor.backgroundColor, borderColor:modeColor.borderColor}}/>
      <Form myLa={myLa} LA={LA} myIR={myIR} IR={IR} myLT={myLT} LT={LT} styleElm={{backgroundColor:modeColor.backgroundColor, color:modeColor.color}}/>
      <Result emi={EMI.toLocaleString('en-IN')} tip={TIP.toLocaleString('en-IN')} ta={TA.toLocaleString('en-IN')} data={data} option={option} styleElm={{backgroundColor:modeColor.backgroundColor, color:modeColor.color}}/>
    </>
  );
}

export default App;
