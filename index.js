function produceDrivingRange(range) {
  return function(one, two) {

    let num1 = parseInt(one.slice(0, 2))
    let num2 = parseInt(two.slice(0, 2))
    let distance = Math.abs(num1 - num2)
    if (distance > range)
      return `${distance - range} blocks out of range`
    else
      return `within range by ${range - distance}`
  }
}

function produceTipCalculator(percent) {
  return function(tip) {
    return tip*percent
  }
}


function createDriver() {
  let id = 0;

  return class driver{
    constructor(name){
      this.name = name;
      this.id = ++id;
    }
  };
}
