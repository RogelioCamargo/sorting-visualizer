const getBubbleSortAnimations = (array: Array<number>) => {
	let animations: Array<number[]> = []; 
	let isSorted = false; 
	let counter = 0; 
	while (!isSorted) {
		isSorted = true; 

		for (let i = 1; i < array.length - counter; i++) {
			animations.push([i, i - 1, -1]);
			animations.push([i, i - 1, 0]);
			if (array[i] < array[i - 1]) {
				animations.push([i, i - 1, 1]);
				[array[i - 1], array[i]] = [array[i], array[i - 1]]
				isSorted = false; 
			}
		}

		counter++; 
	}

	console.log()
	return animations;
}

export default getBubbleSortAnimations; 