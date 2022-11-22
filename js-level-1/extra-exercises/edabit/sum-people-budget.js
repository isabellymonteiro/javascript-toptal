// https://edabit.com/challenge/tmnCStcrkdWbreKP5

function getBudgets(arr) {
	return arr.reduce((total, person) => {
		return total + person.budget
	}, 0)
}