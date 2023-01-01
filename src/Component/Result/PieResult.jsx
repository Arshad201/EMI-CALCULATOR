import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, plugins} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Title, Legend, plugins);

// const data = {
//   labels: ['Total Interest', 'Principle Loan Amount'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [22, 19],
//       backgroundColor: [
//         '#FF4E02',
//         'green',
//       ],
//       borderColor: [
//         '#EEEEEE'
//       ],
//       borderWidth: 10,
      
//     },
//   ],
// };

// const myOpt = {
//   plugins: {
//       title: {
//           display: true,
//           text: 'Break-up of Total Payment',
//           color:'red',
//           position:'bottom',
//           backgroundColor:'black',
//           font:{
//             size:'25px',
//             famiy:'Helvetica Neue'
//           }
//       },
//       legend:{
//         padding:35,
//         position:'bottom'
//       }
//       ,
//       tooltip:{
//         backgroundColor:"#E7878",
//         displayColors:false,
//         color:'black',
//         padding:15,
//         borderWidth:2,
//         borderColor:"black",
//         callbacks:{
//             label:(context)=>{
//                 return `${context.label} is${context.raw}%`;
//             }
//         }
//     }
//   },
//   responsive:true
// }

export default function PieResult(props) {

  return (
    <div className='result'>
      <Pie data={props.data} options={props.option} />
      </div>
  )
}
