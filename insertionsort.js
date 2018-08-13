var numbers = [22,11,99,88,9,7,42];

function insertionsort(array) {

	for (var i = 1; i < array.length; i++) {
	
		var item = array[i];

		var j = i - 1;
		while (array[j] > item && j >= 0) {
			array[j+1] = array[j];
			j=j-1;
		}
		array[j+1] = item;
	}
	return array;
}

console.log(insertionsort(numbers));
