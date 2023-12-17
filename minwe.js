// let  weights= [30,25,20]
// let d=4
// function findMinWeight(weights, d) {
// for(let i = 0; i < d; i++){
//     weights.sort()
//     let chocolate = weights.pop()
//     let minW = Math.floor(chocolate / 2);
//     weights.push(minW)
//   }
//   let sum = 0;
//   for (let i = 0; i <= weights.length; i++){
//     sum += weights[i]
//     return sum;
//   }
// }
//   console.log(findMinWeight(weights, 4))
function findMinWeight(weights, d) {
    // Realiza la operación de dividir por la mitad para cada día
    for (let day = 1; day <= d; day++) {
      for (let i = 0; i < weights.length; i++) {
        weights[i] = weights[i] / 2;
      }
    }
  
    // Calcula el peso total después de los 4 días
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  
    return totalWeight;
  }
  
  const weights = [30, 25, 20];
  const d = 4;
  const minWeight = findMinWeight(weights, d);
  
  console.log("Peso mínimo después de", d, "días:", minWeight);
  