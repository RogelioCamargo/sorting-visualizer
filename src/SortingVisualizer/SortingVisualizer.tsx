import { useState, useEffect } from "react";
import { getArrayFromRange } from "./util";

const SortingVisualizer = () => {
	const [array, setArray] = useState<number[]>([]);

	useEffect(() => {
		setArray(getArrayFromRange(100, 10, 500));
	}, []);

	return (
		<div>
			<h1>Sorting Visualizer</h1>
			{array.map((value) => (
				<p>{value}</p>
			))}
		</div>
	);
};

export default SortingVisualizer;
