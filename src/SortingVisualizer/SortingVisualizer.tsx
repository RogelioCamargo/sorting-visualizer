import { useState, useEffect } from "react";
import { getArrayFromRange } from "./util";
import {
	animateBubbleSort,
	animateMergeSort,
	animateQuickSort,
} from "../algorithms";
import animateHeapSort from "../algorithms/heapSort";

const SortingVisualizer = () => {
	const [array, setArray] = useState<number[]>([]);

	const arraySize = 100;

	useEffect(() => {
		setArray(getArrayFromRange(arraySize, 10, 700));
	}, []);

	const reset = () => {
		setArray(getArrayFromRange(arraySize, 10, 700));
	};

	const getBars = () => {
		const bars = Array.from(
			document.getElementsByClassName(
				"array-bar"
			) as HTMLCollectionOf<HTMLElement>
		);
		return bars;
	};

	const mergeSort = () => {
		const bars = getBars();
		animateMergeSort(array, bars);
	};

	const quickSort = () => {
		const bars = getBars();
		animateQuickSort(array, bars);
	};

	const heapSort = () => {
		const bars = getBars();
		animateHeapSort(array, bars);
	};

	const bubbleSort = () => {
		const bars = getBars();
		animateBubbleSort(array, bars);
	};

	return (
		<div className="grid grid-rows-2 h-screen">
			<nav className="flex justify-between bg-rose-600 items-center h-16 p-5">
				<div className="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="white"
					>
						<path d="M5 19h-4v-8h4v8zm6 0h-4v-18h4v18zm6 0h-4v-12h4v12zm6 0h-4v-4h4v4zm1 2h-24v2h24v-2z" />
					</svg>
					<h1 className="ml-1 font-bold text-xl text-white">
						Sorting Visualizer
					</h1>
				</div>
				<ul className="flex">
					<li>
						<button className="text-white w-28" onClick={reset}>
							Reset
						</button>
					</li>
					<li>
						<button className="text-white w-28" onClick={mergeSort}>
							Merge Sort
						</button>
					</li>
					<li>
						<button className="text-white w-28" onClick={quickSort}>
							Quick Sort
						</button>
					</li>
					<li>
						<button className="text-white w-28" onClick={heapSort}>
							Heap Sort
						</button>
					</li>
					<li>
						<button className="text-white w-28" onClick={bubbleSort}>
							Bubble Sort
						</button>
					</li>
				</ul>
			</nav>
			<div className="flex items-end px-5">
				{array.map((value, index) => (
					<div
						key={`${value},${index}`}
						className="array-bar w-1 m-px"
						style={{ backgroundColor: "#1DE1B6", height: `${value}px` }}
					/>
				))}
			</div>
		</div>
	);
};

export default SortingVisualizer;
