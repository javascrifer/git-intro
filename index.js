function iWillDefinitelyHaveConflicts(a, b) {
	const iWillCreateConflicts = () => {
		const _a = a + 1;
		const _b = b + 2;
		return _a + _b;
	};

	return iWillCreateConflicts();
}

console.log(iWillDefinitelyHaveConflicts(10, 12));
