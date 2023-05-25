// Code your solution in this file!
function distanceFromHqInBlocks(a){
    if (a > 42){
        return a - 42
    }
    if (a < 42){
        return 42 - a
    }
}

function distanceFromHqInFeet(a){
    if (a > 42){
        return (a - 42) * 264
    }
    if (a < 42){
        return (42 - a) * 264
    }
}

function distanceTravelledInFeet(a,b){
    if ((a-b) > 0){
        return (a-b) * 264
    }
    if ((a-b) < 0){
        return (((a-b)*-1) * 264)
    }
}

function calculatesFarePrice(start,destination){
    if (distanceTravelledInFeet(start,destination) < 400){
        return 0
    }
    if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start,destination) < 2000){
        return 0.02 * (distanceTravelledInFeet(start,destination)-400)
    }
    if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500){
        return 25
    }
    if (distanceTravelledInFeet(start,destination) > 2500){
        return 'cannot travel that far'
    }
}