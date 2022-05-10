const getBubbleSortAnimations = (array: Array<number>) => {
	let animations = array.slice(); 
	let isSorted = false; 
	let counter = 0; 
	while (!isSorted) {
		isSorted = true; 

		for (let i = 1; i < animations.length - counter; i++) {
			if (animations[i] < animations[i - 1]) {
				[animations[i - 1], animations[i]] = [animations[i], animations[i - 1]]
				isSorted = false; 
			}
		}

		counter++; 
	}

	return animations; 
}

export default getBubbleSortAnimations; 