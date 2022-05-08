import { useState, useEffect } from "react";
import { getArrayFromRange } from "./util";

const SortingVisualizer = () => {
	const [array, setArray] = useState<number[]>([]);

	useEffect(() => {
		setArray(getArrayFromRange(100, 10, 300));
	}, []);

	const reset = () => {
		setArray(getArrayFromRange(100, 10, 300));
	};

	return (
		<div>
			<h1 className="font-bold">Sorting Visualizer</h1>
			<button className="bg-indigo-600 text-white w-32" onClick={reset}>Reset</button>
			<div className="flex justify-center">
				{array.map((value) => (
					<div
						className="w-2 bg-indigo-600 m-px"
						style={{ height: `${value}px` }}
					/>
				))}
			</div>
		</div>
	);
};

export default SortingVisualizer;
