import { useState, useEffect } from "react";
import { getArrayFromRange } from "./util";
import { mergeSortAlgorithm } from "../algorithms";

const SortingVisualizer = () => {
	const [array, setArray] = useState<number[]>([]);

	useEffect(() => {
		setArray(getArrayFromRange(100, 10, 500));
	}, []);

	const reset = () => {
		setArray(getArrayFromRange(100, 10, 500));
	};

	const mergeSort = () => {
		// const mergeSortTest = () => {
		// 	const sortedArray = array.slice().sort((a, b) => a - b); 
		// 	const mergeSortedArray = mergeSortAlgorithm(array); 
		// 	for (let i = 0; i < array.length; i++) {
		// 		if (sortedArray[i] !== mergeSortedArray[i])
		// 			return false; 
		// 	}

		// 	return true; 
		// }

		// console.log(mergeSortTest());
	}

	const quickSort = () => {
		console.log("DO QUICK SORT!");
	}

	const heapSort = () => {
		console.log("DO HEAP SORT!");
	}

	const bubbleSort = () => {
		console.log("DO BUBBLE SORT")
	}

	return (
		<div>
			<h1 className="font-bold">Sorting Visualizer</h1>
			<div>
				<button className="bg-indigo-600 text-white w-32" onClick={reset}>Reset</button>
				<button className="bg-blue-600 text-white w-32" onClick={(mergeSort)}>Merge Sort</button>
				<button className="bg-red-600 text-white w-32" onClick={quickSort}>Quick Sort</button>
				<button className="bg-green-600 text-white w-32" onClick={heapSort}>Heap Sort</button>
				<button className="bg-orange-600 text-white w-32" onClick={bubbleSort}>Bubble Sort</button>
			</div>
			<div className="flex justify-center">
				{array.map((value, index) => (
					<div
						key={`${value},${index}`}
						className="w-2 bg-indigo-600 m-px"
						style={{ height: `${value}px` }}
					/>
				))}
			</div>
		</div>
	);
};

export default SortingVisualizer;
