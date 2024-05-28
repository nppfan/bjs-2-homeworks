function getArrayParams(...arr) {
	let min = -Infinity;
	let max = Infinity;
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		} else if (arr[i] < min) {
			min = arr[i]
		}
		sum = arr[i];
		avg = min + max + sum / 3;
		avg.toFixed();
		avg = Number(avg);
	}
	return {
		min: min,
		max: max,
		avg: avg
	};
}
// function getArrayParams(arr) {
//   let min, max, sum, avg;
//   min = Infinity;
//   max = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > max) {
//           max = arr[i]
//       }
//       else if (arr[i] < min) {
//           min = arr[i]
//       }
          // sum = arr[i];
          // avg = min + max + sum / 3;
          // avg.toFixed();
          // avg = Number(avg);
//   }

//   return { min:min, max:max, avg:avg };
// }
function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
