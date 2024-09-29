function speedDetector(){
const speedlimit= 70
// FOR SPEEDS LOWER THAN THE SPEED LIMIT
if(speed<=70){
    console.log("Ok")
}
// FOR SPEEDS HIGHER THAN THE SPEED LIMIT
else if{
    // calculating demerit points
    let demeritpoints=Math.floor((speed - speedlimit)/ 5 )
    console.log("Points" + demeritpoints)
// TO SHOW IF LICENSE IS SUSPENDED OR FUNCTIONAL
    if(demeritpoints>12);{
        console.log("LICENSE SUSPENDED")
    }
  }
}

let speedofcar = 120
speedDetector(speedofcar)