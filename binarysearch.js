var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

function binarysearch(array, number) {
	var lower = 0;
	var upper = array.length - 1;
	
	var mid = Math.floor((upper + lower) / 2);
	
	while (lower <= upper) {
			
		if (array[mid] == number)
			return number + " is at position " + mid + " in the array." ;
		if (array[mid] < number)
			lower = mid + 1;
		if (array[mid] > number)
			upper = mid - 1;
		
		mid = Math.floor((upper + lower) / 2);
	}
	return -1;
}

console.log(binarysearch(primes, 67));
