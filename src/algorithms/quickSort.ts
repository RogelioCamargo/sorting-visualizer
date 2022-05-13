import { swap, changeColor, swapBarHeights } from "./util";

const animateQuickSort = (array: Array<number>, bars: Array<HTMLElement>) => {
	const animation = [0];
	quickSortHelper(array, 0, array.length - 1, bars, animation);
};

const quickSortHelper = (
	array: Array<number>,
	startIndex: number,
	endIndex: number,
	bars: Array<HTMLElement>,
	animation: Array<number>
) => {
	if (startIndex >= endIndex) return;

	const pivotIndex = startIndex;
	let leftIndex = startIndex + 1;
	let rightIndex = endIndex;

	while (rightIndex >= leftIndex) {
		changeColor(leftIndex, rightIndex, "red", bars, animation);
		changeColor(leftIndex, rightIndex, "indigo", bars, animation);
		if (
			array[leftIndex] > array[pivotIndex] &&
			array[rightIndex] < array[pivotIndex]
		) {
			swap(leftIndex, rightIndex, array);
			swapBarHeights(leftIndex, rightIndex, bars, animation);
		}
		if (array[leftIndex] <= array[pivotIndex]) leftIndex++;
		if (array[rightIndex] >= array[pivotIndex]) rightIndex--;
	}

	swap(pivotIndex, rightIndex, array);
	swapBarHeights(pivotIndex, rightIndex, bars, animation);
	const isLeftSubarraySmaller =
		rightIndex - 1 - startIndex < endIndex - (rightIndex + 1);
	if (isLeftSubarraySmaller) {
		quickSortHelper(array, startIndex, rightIndex - 1, bars, animation);
		quickSortHelper(array, rightIndex + 1, endIndex, bars, animation);
	} else {
		quickSortHelper(array, rightIndex + 1, endIndex, bars, animation);
		quickSortHelper(array, startIndex, rightIndex - 1, bars, animation);
	}
};

export default animateQuickSort;
