const getMergeSortAnimations = (array: Array<number>, bars: Array<HTMLElement>) => {
	if (array.length <= 1) return;
	let counter = [0];
	const duplicate = array.slice();
	mergeSortHelper(array, 0, array.length - 1, duplicate, bars, counter);
};

const mergeSortHelper = (
	mainArray: Array<number>,
	startIndex: number,
	endIndex: number,
	duplicateArray: Array<number>,
	bars: Array<HTMLElement>,
	counter: Array<number>
) => {
	if (startIndex === endIndex) return;

	const middleIndex = Math.floor((startIndex + endIndex) / 2);
	mergeSortHelper(
		duplicateArray,
		startIndex,
		middleIndex,
		mainArray,
		bars,
		counter
	);
	mergeSortHelper(
		duplicateArray,
		middleIndex + 1,
		endIndex,
		mainArray,
		bars,
		counter
	);
	doMerge(
		mainArray,
		startIndex,
		middleIndex,
		endIndex,
		duplicateArray,
		bars,
		counter
	);
};

const doMerge = (
	mainArray: Array<number>,
	startIndex: number,
	middleIndex: number,
	endIndex: number,
	duplicateArray: Array<number>,
	bars: Array<HTMLElement>,
	counter: Array<number>
) => {
	let k = startIndex;
	let i = startIndex;
	let j = middleIndex + 1;

	while (i <= middleIndex && j <= endIndex) {
		changeColor(i, j, "red", bars, counter);
		changeColor(i, j, "indigo", bars, counter);
		if (duplicateArray[i] < duplicateArray[j]) {
			changeBarHeight(k, duplicateArray[i], bars, counter);
			mainArray[k++] = duplicateArray[i++];
		} else {
			changeBarHeight(k, duplicateArray[j], bars, counter);
			mainArray[k++] = duplicateArray[j++];
		}
	}

	while (i <= middleIndex) {
		changeColor(i, i, "red", bars, counter);
		changeColor(i, i, "indigo", bars, counter);
		changeBarHeight(k, duplicateArray[i], bars, counter);
		mainArray[k++] = duplicateArray[i++];
	}
	while (j <= endIndex) {
		changeColor(j, j, "red", bars, counter);
		changeColor(j, j, "indigo", bars, counter);
		changeBarHeight(k, duplicateArray[j], bars, counter);
		mainArray[k++] = duplicateArray[j++];
	}
};

const changeColor = (
	indexOne: number,
	indexTwo: number,
	color: string,
	bars: Array<HTMLElement>,
	counter: Array<number>
) => {
	const barOneStyle = bars[indexOne].style;
	const barTwoStyle = bars[indexTwo].style;
	window.setTimeout(() => {
		barOneStyle.backgroundColor = color;
		barTwoStyle.backgroundColor = color;
		console.log(counter);
	}, counter[0] * 5);
	counter[0]++;
};

const changeBarHeight = (
	index: number,
	newHeight: number,
	bars: Array<HTMLElement>,
	counter: Array<number>
) => {
	const barStyle = bars[index].style;
	window.setTimeout(() => {
		barStyle.height = `${newHeight}px`;
	}, counter[0] * 5);
	counter[0]++;
};

export default getMergeSortAnimations;
