const getBubbleSortAnimations = (array: Array<number>, bars: Array<HTMLElement>) => {
	let isSorted = false; 
	let counter = 0; 
	let animation = [0]; 
	while (!isSorted) {
		isSorted = true; 
		for (let i = 1; i < array.length - counter; i++) {
			changeColor(i, i - 1, "red", bars, animation);
			changeColor(i, i - 1, "indigo", bars, animation);
			if (array[i] < array[i - 1]) {
				swapBarHeights(i, i - 1, bars, animation);
				[array[i - 1], array[i]] = [array[i], array[i - 1]]
				isSorted = false; 
			}
		}

		counter++; 
	}
}

const changeColor = (
	indexOne: number,
	indexTwo: number,
	color: string,
	bars: Array<HTMLElement>,
	animation: Array<number>
) => {
	const barOneStyle = bars[indexOne].style;
	const barTwoStyle = bars[indexTwo].style;
	window.setTimeout(() => {
		barOneStyle.backgroundColor = color;
		barTwoStyle.backgroundColor = color;
		console.log(animation);
	}, animation[0] * 2.5);
	animation[0]++;
};

const swapBarHeights = (
	indexOne: number,
	indexTwo: number,
	bars: Array<HTMLElement>,
	counter: Array<number>
) => {
	const barOneStyle = bars[indexOne].style;
	const barTwoStyle = bars[indexTwo].style;
	window.setTimeout(() => {
		const height = barOneStyle.height;
		barOneStyle.height = barTwoStyle.height;
		barTwoStyle.height = height;
	}, counter[0] * 2.5);
	counter[0]++;
};

export default getBubbleSortAnimations; 