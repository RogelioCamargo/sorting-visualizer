const animateQuickSort = (array: Array<number>, bars: Array<HTMLElement>) => {
	quickSortHelper(array, 0, array.length - 1); 
	return array; 

}; 

const quickSortHelper = (array: Array<number>, startIndex: number, endIndex: number) => {
	if (startIndex >= endIndex) return; 

	const pivotIndex = startIndex; 
	let leftIndex = startIndex + 1; 
	let rightIndex = endIndex; 

	while (rightIndex >= leftIndex) {
		if (array[leftIndex] > array[pivotIndex] && array[rightIndex] < array[pivotIndex]) 
			swap(leftIndex, rightIndex, array);
		if (array[leftIndex] <= array[pivotIndex]) leftIndex++; 
		if (array[rightIndex] >= array[pivotIndex]) rightIndex--; 
	}

	swap(pivotIndex, rightIndex, array); 
	const isLeftSubarraySmaller = (pivotIndex - 1) - startIndex < endIndex - (pivotIndex + 1);  
	if (isLeftSubarraySmaller) {
		quickSortHelper(array, startIndex, pivotIndex - 1); 
		quickSortHelper(array, pivotIndex + 1, endIndex);
	}
	else {
		quickSortHelper(array, pivotIndex + 1, endIndex);
		quickSortHelper(array, startIndex, pivotIndex - 1); 
	}
}

const swap = (indexOne: number, indexTwo: number, array: Array<number>) => {
	[array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];
}

export default animateQuickSort; 