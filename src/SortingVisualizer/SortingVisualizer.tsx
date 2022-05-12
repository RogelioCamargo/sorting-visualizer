import { useState, useEffect } from "react";
import { getArrayFromRange } from "./util";
import { animateBubbleSort, animateMergeSort, animateQuickSort } from "../algorithms";

const SortingVisualizer = () => {
	const [array, setArray] = useState<number[]>([]);

	const arraySize = 150;

	useEffect(() => {
		setArray(getArrayFromRange(arraySize, 10, 600));
	}, []);

	const reset = () => {
		setArray(getArrayFromRange(arraySize, 10, 600));
	};

	const getBars = () => {
		const bars = Array.from(
		document.getElementsByClassName(
				"array-bar"
			) as HTMLCollectionOf<HTMLElement>
		);
		return bars; 
	}

	const mergeSort = () => {
		const bars = getBars();
		animateMergeSort(array, bars);
	};

	const quickSort = () => {
		const bars = getBars(); 
		animateQuickSort(array, bars); 
	};

	const heapSort = () => {
		console.log("DO HEAP SORT!");
	};

	const bubbleSort = () => {
		const bars = getBars();
		animateBubbleSort(array, bars);	
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
						className="array-bar w-1 m-px"
						style={{ backgroundColor: "indigo", height: `${value}px` }}
					/>
				))}
			</div>
		</div>
	);
};

export default SortingVisualizer;
