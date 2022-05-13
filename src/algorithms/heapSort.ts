import { primaryColor, secondaryColor } from "./constants";
import { swap, swapBarHeights, changeColor } from "./util";

const animateHeapSort = (array: Array<number>, bars: Array<HTMLElement>) => {
	const animation = [0];
	buildMaxHeap(array, bars, animation);
	for (let endIndex = array.length - 1; endIndex > 0; endIndex--) {
		swapBarHeights(0, endIndex, bars, animation); 
		swap(0, endIndex, array);
		shiftDown(0, endIndex - 1, array, bars, animation);
	}
};

const shiftDown = (
	currentIndex: number,
	endIndex: number,
	array: Array<number>, 
	bars: Array<HTMLElement>,
	animation: Array<number>
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
		
		changeColor(indexToSwap, currentIndex, secondaryColor, bars, animation);
		changeColor(indexToSwap, currentIndex, primaryColor, bars, animation);
		if (array[indexToSwap] <= array[currentIndex]) return;
		else {
			swapBarHeights(indexToSwap, currentIndex, bars, animation)
			swap(indexToSwap, currentIndex, array);
			currentIndex = indexToSwap;
			leftChildIndex = currentIndex * 2 + 1;
		}
	}
};

const buildMaxHeap = (array: Array<number>, bars: Array<HTMLElement>, animation: Array<number>) => {
	const firstParentIndex = Math.floor((array.length - 2) / 2);
	for (let currentIndex = firstParentIndex; currentIndex >= 0; currentIndex--)
		shiftDown(currentIndex, array.length - 1, array, bars, animation);
};

export default animateHeapSort;
