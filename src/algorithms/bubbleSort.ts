import { primaryColor, secondaryColor } from "./constants";
import { changeColor, swapBarHeights } from "./util";

const animateBubbleSort = (array: Array<number>, bars: Array<HTMLElement>) => {
	let isSorted = false; 
	let counter = 0; 
	const animation = [0]; 
	while (!isSorted) {
		isSorted = true; 
		for (let i = 1; i < array.length - counter; i++) {
			changeColor(i, i - 1, secondaryColor, bars, animation);
			changeColor(i, i - 1, primaryColor, bars, animation);
			if (array[i] < array[i - 1]) {
				swapBarHeights(i, i - 1, bars, animation);
				[array[i - 1], array[i]] = [array[i], array[i - 1]]
				isSorted = false; 
			}
		}

		counter++; 
	}
}

export default animateBubbleSort; 