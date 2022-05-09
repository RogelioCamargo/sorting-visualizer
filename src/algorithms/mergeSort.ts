const getMergeSortAnimations = (array: Array<number>): Array<number[]> => {
	if (array.length <= 1) return [[]]; 
	const animations: Array<number[]> = []; 
	const duplicate = array.slice();
	mergeSortHelper(array, 0, array.length - 1, duplicate, animations);
	return animations;
};

const mergeSortHelper = (
	mainArray: Array<number>,
	startIndex: number,
	endIndex: number,
	duplicateArray: Array<number>, 
	animations: Array<number[]>
) => {
	if (startIndex === endIndex) return;

	const middleIndex = Math.floor((startIndex + endIndex) / 2);
	mergeSortHelper(duplicateArray, startIndex, middleIndex, mainArray, animations);
	mergeSortHelper(duplicateArray, middleIndex + 1, endIndex, mainArray, animations);
	doMerge(mainArray, startIndex, middleIndex, endIndex, duplicateArray, animations);
};

const doMerge = (
	mainArray: Array<number>,
	startIndex: number,
	middleIndex: number,
	endIndex: number,
	duplicateArray: Array<number>, 
	animations: Array<number[]>
) => {
	let k = startIndex;
	let i = startIndex;
	let j = middleIndex + 1;

	while (i <= middleIndex && j <= endIndex) {
		animations.push([i, j]); 
		animations.push([i, j]); 
		if (duplicateArray[i] < duplicateArray[j]) {
			animations.push([k, duplicateArray[i]]); 
			mainArray[k++] = duplicateArray[i++];
		}
		else {
			animations.push([k, duplicateArray[j]]); 
			mainArray[k++] = duplicateArray[j++];
		}
	}

	while (i <= middleIndex) {
		animations.push([i, i]); 
		animations.push([i, i]); 
		animations.push([k, duplicateArray[i]])
		mainArray[k++] = duplicateArray[i++];
	}
	while (j <= endIndex) {
		animations.push([j, j]); 
		animations.push([j, j]); 
		animations.push([k, duplicateArray[j]]); 
		mainArray[k++] = duplicateArray[j++];
	}
};

export default getMergeSortAnimations;
