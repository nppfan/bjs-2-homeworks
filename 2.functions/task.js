function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		} else if (arr[i] < min) {
			min = arr[i]
		}
		sum += arr[i];
		avg = sum / arr.length;
	}
	avg = Number(avg.toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else if (arr[i] % 2 !== 0) {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	if (countEvenElement === 0) {
		return 0;
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}