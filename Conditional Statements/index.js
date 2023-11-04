// conditional statement
// 1.if

if (10 < 20) {
  console.log("true");
} else {
  console.log("else block");
}

//2. else if
if (2 > 5) {
  console.log("block 1");
} else if (3 < 2) {
  console.log("block 2");
} else {
  console.log(" else block");
}

//3. switch
/*
  switch(value){
    case 1: block 1
            break;
    case 2: block2
            break;
    .
    .
    .
    default: default case;                
  }
  
 */

let a = 4;
switch (a) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Sunday");
}
