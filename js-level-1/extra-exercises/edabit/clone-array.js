// https://edabit.com/challenge/RiyXDZNZAD4fj9xfJ

function clone(arr) {
	arr.push([...arr])
	return arr
}