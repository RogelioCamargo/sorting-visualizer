const getNumberFromRange = (min: number, max: number): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

const getArrayFromRange = (
	amount: number,
	min: number,
	max: number
): Array<number> => {
	const array = [];
	for (let i = 0; i < amount; i++) array.push(getNumberFromRange(min, max));
	return array;
};

const getArrayInReverse = (
	amount: number,
): Array<number> => {
	const array = [];
	for (let i = amount; i > 5; i--) array.push(i);

	return array;
};

export { getNumberFromRange, getArrayFromRange, getArrayInReverse };
