import { useState, useEffect } from "react";
import { getArrayFromRange } from "./util";
import { getBubbleSortAnimations, getMergeSortAnimations } from "../algorithms";

const SortingVisualizer = () => {
	const [array, setArray] = useState<number[]>([]);

	const arraySize = 100;
	const algorithmSpeed = 10;

	useEffect(() => {
		setArray(getArrayFromRange(arraySize, 10, 600));
	}, []);

	const reset = () => {
		setArray(getArrayFromRange(arraySize, 10, 600));
	};

	const animateMergeSort = () => {
		const bars = Array.from(
		document.getElementsByClassName(
				"array-bar"
			) as HTMLCollectionOf<HTMLElement>
		);
		getMergeSortAnimations(array, bars);
	};

	const quickSort = () => {
		console.log("DO QUICK SORT!");
	};

	const heapSort = () => {
		console.log("DO HEAP SORT!");
	};

	const animateBubbleSort = () => {
		const animations = getBubbleSortAnimations(array);
		for (let i = 0; i < animations.length; i++) {
			console.log(i);
			const arrayBars = Array.from(
				document.getElementsByClassName(
					"array-bar"
				) as HTMLCollectionOf<HTMLElement>
			);
				
			const [barOneIndex, barTwoIndex, instruction] = animations[i];
			const isColorChange = instruction !== 1;
			if (isColorChange) {
				const barOneStyle = arrayBars[barOneIndex].style;
				const barTwoStyle = arrayBars[barTwoIndex].style;
				const color = instruction === -1 ? "red" : "indigo";
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * algorithmSpeed);
			} else {
				setTimeout(() => {
					const [barOneIndex, barTwoIndex] = animations[i];
					const barOneStyle = arrayBars[barOneIndex].style;
					const barTwoStyle = arrayBars[barTwoIndex].style;
					const placeholder = barOneStyle.height; 
					barOneStyle.height = barTwoStyle.height;
					barTwoStyle.height = placeholder; 
				}, i * algorithmSpeed);
			}
		}		
	};

	return (
		<div>
			<h1 className="font-bold">Sorting Visualizer</h1>
			<div>
				<button className="bg-indigo-600 text-white w-32" onClick={reset}>
					Reset
				</button>
				<button className="bg-blue-600 text-white w-32" onClick={animateMergeSort}>
					Merge Sort
				</button>
				<button className="bg-red-600 text-white w-32" onClick={quickSort}>
					Quick Sort
				</button>
				<button className="bg-green-600 text-white w-32" onClick={heapSort}>
					Heap Sort
				</button>
				<button className="bg-orange-600 text-white w-32" onClick={animateBubbleSort}>
					Bubble Sort
				</button>
			</div>
			<div className="flex justify-center items-end">
				{array.map((value, index) => (
					<div
						key={`${value},${index}`}
						className="array-bar w-1 m-px"
						style={{ backgroundColor: "indigo", height: `${value}px` }}
					/>
				))}
			</div>
		</div>
	);
};

export default SortingVisualizer;
