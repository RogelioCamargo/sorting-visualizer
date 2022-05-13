import { changeColor, changeBarHeight } from "./util";
import { primaryColor, secondaryColor } from "./constants";

const animateMergeSort = (array: Array<number>, bars: Array<HTMLElement>) => {
	if (array.length <= 1) return;
	const animation = [0];
	const duplicate = array.slice();
	mergeSortHelper(array, 0, array.length - 1, duplicate, animation, bars);
};

const mergeSortHelper = (
	mainArray: Array<number>,
	startIndex: number,
	endIndex: number,
	duplicateArray: Array<number>,
	animation: Array<number>,
	bars: Array<HTMLElement>
) => {
	if (startIndex === endIndex) return;

	const middleIndex = Math.floor((startIndex + endIndex) / 2);
	mergeSortHelper(
		duplicateArray,
		startIndex,
		middleIndex,
		mainArray,
		animation,
		bars
	);
	mergeSortHelper(
		duplicateArray,
		middleIndex + 1,
		endIndex,
		mainArray,
		animation,
		bars
	);
	doMerge(
		mainArray,
		startIndex,
		middleIndex,
		endIndex,
		duplicateArray,
		animation,
		bars
	);
};

const doMerge = (
	mainArray: Array<number>,
	startIndex: number,
	middleIndex: number,
	endIndex: number,
	duplicateArray: Array<number>,
	animation: Array<number>,
	bars: Array<HTMLElement>
) => {
	let k = startIndex;
	let i = startIndex;
	let j = middleIndex + 1;

	while (i <= middleIndex && j <= endIndex) {
		changeColor(i, j, secondaryColor, bars, animation);
		changeColor(i, j, primaryColor, bars, animation);
		if (duplicateArray[i] < duplicateArray[j]) {
			changeBarHeight(k, duplicateArray[i], bars, animation);
			mainArray[k++] = duplicateArray[i++];
		} else {
			changeBarHeight(k, duplicateArray[j], bars, animation);
			mainArray[k++] = duplicateArray[j++];
		}
	}

	while (i <= middleIndex) {
		changeColor(i, i, secondaryColor, bars, animation);
		changeColor(i, i, primaryColor, bars, animation);
		changeBarHeight(k, duplicateArray[i], bars, animation);
		mainArray[k++] = duplicateArray[i++];
	}
	while (j <= endIndex) {
		changeColor(j, j, secondaryColor, bars, animation);
		changeColor(j, j, primaryColor, bars, animation);
		changeBarHeight(k, duplicateArray[j], bars, animation);
		mainArray[k++] = duplicateArray[j++];
	}
};

export default animateMergeSort;
