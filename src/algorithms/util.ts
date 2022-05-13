const ALGORITHM_SPEED = 1;

const changeColor = (
	indexOne: number,
	indexTwo: number,
	color: string,
	bars: Array<HTMLElement>,
	animation: Array<number>
) => {
	animation[0]++;
	const barOneStyle = bars[indexOne].style;
	const barTwoStyle = bars[indexTwo].style;
	window.setTimeout(() => {
		barOneStyle.backgroundColor = color;
		barTwoStyle.backgroundColor = color;
	}, animation[0] * ALGORITHM_SPEED);
};

const swapBarHeights = (
	indexOne: number,
	indexTwo: number,
	bars: Array<HTMLElement>,
	animation: Array<number>
) => {
	animation[0]++;
	const barOneStyle = bars[indexOne].style;
	const barTwoStyle = bars[indexTwo].style;
	window.setTimeout(() => {
		const height = barOneStyle.height;
		barOneStyle.height = barTwoStyle.height;
		barTwoStyle.height = height;
	}, animation[0] * ALGORITHM_SPEED);
};

const changeBarHeight = (
	index: number,
	newHeight: number,
	bars: Array<HTMLElement>,
	counter: Array<number>
	) => {
	counter[0]++;
	const barStyle = bars[index].style;
	window.setTimeout(() => {
		barStyle.height = `${newHeight}px`;
	}, counter[0] * ALGORITHM_SPEED);
};

const swap = (indexOne: number, indexTwo: number, array: Array<number>) => {
	[array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];
};

export { swap, changeColor, swapBarHeights, changeBarHeight }