import { swap } from "./util";

const animateHeapSort = (array: Array<number>) => {
	buildMaxHeap(array);
	for (let endIndex = array.length - 1; endIndex > 0; endIndex--) {
		swap(0, endIndex, array);
		shiftDown(0, endIndex - 1, array);
	}
};

const shiftDown = (
	currentIndex: number,
	endIndex: number,
	array: Array<number>
) => {
	let leftChildIndex = currentIndex * 2 + 1;
	while (leftChildIndex <= endIndex) {
		let rightChildIndex =
			currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
		let indexToSwap;
		if (
			rightChildIndex !== -1 &&
			array[rightChildIndex] > array[leftChildIndex]
		)
			indexToSwap = rightChildIndex;
		else indexToSwap = leftChildIndex;

		if (array[indexToSwap] <= array[currentIndex]) return;
		else {
			swap(indexToSwap, currentIndex, array);
			currentIndex = indexToSwap;
			leftChildIndex = currentIndex * 2 + 1;
		}
	}
};

const buildMaxHeap = (array: Array<number>) => {
	const firstParentIndex = Math.floor((array.length - 2) / 2);
	for (let currentIndex = firstParentIndex; currentIndex >= 0; currentIndex--)
		shiftDown(currentIndex, array.length - 1, array);
};

export default animateHeapSort;
