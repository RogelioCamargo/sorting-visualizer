const mergeSort = (array: Array<number>) => {
	const duplicate = array.slice();
	mergeSortHelper(array, 0, array.length - 1, duplicate);
	return array;
};

const mergeSortHelper = (
	mainArray: Array<number>,
	startIndex: number,
	endIndex: number,
	duplicateArray: Array<number>
) => {
	if (startIndex === endIndex) return;

	const middleIndex = Math.floor((startIndex + endIndex) / 2);
	mergeSortHelper(duplicateArray, startIndex, middleIndex, mainArray);
	mergeSortHelper(duplicateArray, middleIndex + 1, endIndex, mainArray);
	doMerge(mainArray, startIndex, middleIndex, endIndex, duplicateArray);
};

const doMerge = (
	mainArray: Array<number>,
	startIndex: number,
	middleIndex: number,
	endIndex: number,
	duplicateArray: Array<number>
) => {
	let k = startIndex;
	let i = startIndex;
	let j = middleIndex + 1;

	while (i <= middleIndex && j <= endIndex) {
		if (duplicateArray[i] < duplicateArray[j])
			mainArray[k++] = duplicateArray[i++];
		else mainArray[k++] = duplicateArray[j++];
	}

	while (i <= middleIndex) mainArray[k++] = duplicateArray[i++];
	while (j <= endIndex) mainArray[k++] = duplicateArray[j++];
};

export default mergeSort;
