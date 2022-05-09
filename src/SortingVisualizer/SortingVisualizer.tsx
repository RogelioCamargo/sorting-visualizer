import { useState, useEffect } from "react";
import { getArrayFromRange } from "./util";
import { getMergeSortAnimations } from "../algorithms";

const SortingVisualizer = () => {
	const [array, setArray] = useState<number[]>([]);

	useEffect(() => {
		setArray(getArrayFromRange(200, 10, 600));
	}, []);

	const reset = () => {
		setArray(getArrayFromRange(200, 10, 600));
	};

	const mergeSort = () => {
		const animations = getMergeSortAnimations(array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = Array.from(
				document.getElementsByClassName(
					"array-bar"
				) as HTMLCollectionOf<HTMLElement>
			);
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIndex, barTwoIndex] = animations[i];
				const barOneStyle = arrayBars[barOneIndex].style;
				const barTwoStyle = arrayBars[barTwoIndex].style;
				const color = i % 3 === 0 ? "red" : "indigo";
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * 1);
			} else {
				setTimeout(() => {
					const [barOneIndex, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIndex].style;
					barOneStyle.height = `${newHeight}px`;
				}, i * 1);
			}
		}
	};

	const quickSort = () => {
		console.log("DO QUICK SORT!");
	};

	const heapSort = () => {
		console.log("DO HEAP SORT!");
	};

	const bubbleSort = () => {
		console.log("DO BUBBLE SORT");
	};

	return (
		<div>
			<h1 className="font-bold">Sorting Visualizer</h1>
			<div>
				<button className="bg-indigo-600 text-white w-32" onClick={reset}>
					Reset
				</button>
				<button className="bg-blue-600 text-white w-32" onClick={mergeSort}>
					Merge Sort
				</button>
				<button className="bg-red-600 text-white w-32" onClick={quickSort}>
					Quick Sort
				</button>
				<button className="bg-green-600 text-white w-32" onClick={heapSort}>
					Heap Sort
				</button>
				<button className="bg-orange-600 text-white w-32" onClick={bubbleSort}>
					Bubble Sort
				</button>
			</div>
			<div className="flex justify-center items-end">
				{array.map((value, index) => (
					<div
						key={`${value},${index}`}
						className="array-bar w-1 bg-indigo-600 m-px"
						style={{ height: `${value}px` }}
					/>
				))}
			</div>
		</div>
	);
};

export default SortingVisualizer;
