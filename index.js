// Code your solution in this file!
// function distanceFromHqInBlocks(street){
//     let blockDistance = street - 42
//     return blockDistance
// }
// const distance = distanceFromHqInBlocks(50)

// console.log(distance)

function distanceFromHqInBlocks(currentStreet){
    const hqStreet =  42
    return Math.abs(currentStreet - hqStreet)
}


const distance = distanceFromHqInBlocks(32)
console.log(distance)

function distanceFromHqInFeet(currentStreet){
    const feetDistance = distanceFromHqInBlocks(currentStreet) * 264
    return feetDistance
}
console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, destination) {
    let travelledDistance = destination - start 
    return Math.abs(travelledDistance * 264)

}
console.log(distanceTravelledInFeet(1,40))

function calculatesFarePrice(start,distance) {
   const distanceFt = distanceTravelledInFeet(start,distance)
   let farePrice = 0
   if (distanceFt <= 400){
        return farePrice = 0
   }
    else if(distanceFt >400 && distanceFt <=2000 ){
        return farePrice = (distanceFt -400) * 0.02
    }
      else if (distanceFt >2000 && distanceFt <=2500){
            return farePrice = 25
      }
      else if (distanceFt >2500){
        return `cannot travel that far`
      }
  }
  