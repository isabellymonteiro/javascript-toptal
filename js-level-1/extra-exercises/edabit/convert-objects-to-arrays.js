// https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

// primary solution
function toArray(obj) {
	const array = []
	
	for (let item in obj) {
		array.push([item, obj[item]])
	}
	
	return array
}

/* secondary solution

function toArray(obj) {
	return Object.keys(obj).reduce((array, currentKey) => {
		array.push([currentKey, obj[currentKey]])
		return array
	}, [])
}
*/