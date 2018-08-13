var numbers = [22,11,99,88,9,7,42];

function selectionsort(array) {
	for (var i = 0; i < array.length - 1; i++) {
		//console.log(i);
		var min = array[i];
		var minIndex = i;
		for (var j = i+1; j < array.length; j++) {
			//console.log(j);
			if (array[j]<min) {
				min = array[j];
				minIndex = j;
			}		
		}
		//console.log("min: " + min + ", minIndex: " + minIndex);
		if (minIndex > i)
			var swap = array[i];
			array[i] = array[minIndex];
			array[minIndex] = swap;
		//console.log(array);
	}
	return array;
}

console.log(selectionsort(numbers));
