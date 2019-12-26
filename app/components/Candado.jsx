import React from 'react';
import 'combination-lock-react/dist/index.css';




export default class Candado extends React.Component {



  render(){
    // make dial draggable
// Draggable.create(".dial", {
//   type: "rotation",
//   throwProps: true
// });
// // values 40 or above will be set to 0
// const combo = [20, 5, 30],
//   findCombo = function(comboArr) {
//     let dial = $(".dial"),
//       dialTrans = dial.css("transform"),
//       ticks = 40,
//       tickAngle = 360 / ticks,
//       numOffset = 0.5, // how far red arrow can be from number
//       // break down matrix value of dial transform and get angle
//       matrixVal = dialTrans
//         .split("(")[1]
//         .split(")")[0]
//         .split(","),
//       cos1 = matrixVal[0],
//       sin = matrixVal[1],
//       negSin = matrixVal[2],
//       cos2 = matrixVal[3],
//       angle = Math.round(Math.atan2(sin, cos1) * (180 / Math.PI)) * -1;
//     // convert negative angles to positive
//     if (angle < 0) {
//       angle += 360;
//     }
//     // check numbers found, stop loop if at first number not found
//     for (let i = 0; i < comboArr.length; ++i) {
//       if (!$(".num" + (i + 1)).hasClass("found")) {
//         if (
//           angle > (comboArr[i] - numOffset) * tickAngle &&
//           angle < (comboArr[i] + numOffset) * tickAngle
//         ) {
//           // make numbers green when found
//           $(".num" + (i + 1)).addClass("found");
//           // on unlock
//           if (i == comboArr.length - 1) {
//             $(".shackle").addClass("unlocked");
//             $(".top").addClass("pivot1");
//             $(".inner").addClass("pivot2");
//             $(".left").addClass("moveRight");
//             $(".dentL, .dentR").addClass("moveLeft");
//             // then lock again
//             setTimeout(function() {
//               $(".shackle").removeClass("unlocked");
//               $(".top").removeClass("pivot1");
//               $(".inner").removeClass("pivot2");
//               $(".left").removeClass("moveRight");
//               $(".dentL, .dentR").removeClass("moveLeft");
//               for (let j = 0; j < combo.length; ++j) {
//                 $(".num" + (j + 1)).removeClass("found");
//               }
//             }, 2400);
//           }
//         }
//         break;
//       }
//     }
//   };
// // show combination to user
// for (let i = 0; i < combo.length; ++i) {
//   if (combo[i] >= 40) {
//     combo[i] = 0;
//   }
//   $(".num" + (i + 1)).html(combo[i]);
// }
// // dial interaction (mouse)
// $(".dial").on("click", function() {
//   findCombo(combo);
// });
// // dial interaction (touch)
// $(".dial").on("touchend", function() {
//   findCombo(combo);
// });

    return(
      <div>
      // <div class="container">
      //   <div class="lock">
      //
      //     <div class="shackle">
      //       <div class="top">
      //         <div class="inner"></div>
      //       </div>
      //       <div class="left">
      //         <div class="dentL"></div>
      //         <div class="dentR"></div>
      //       </div>
      //       <div class="right"></div>
      //     </div>
      //
      //     <div class="arrow"></div>
      //   </div>
      //
      //   <div class="dial">
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //     <div class="tick"></div>
      //   </div>
      // </div>
      //
      // <div class="combo"><span class="num1"></span> <span class="num2"></span> <span class="num3"></span>
      // </div>
      //
      // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.5/TweenMax.min.js"></script>
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.5/utils/Draggable.min.js"></script>
      </div>
      );
  }
}
