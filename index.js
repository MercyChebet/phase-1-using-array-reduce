const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


let totalBatteries = 0;

totalBatteries = batteryBatches.reduce((total, batch) => {
      return total + batch;
} , 0);



// Code your solution here
