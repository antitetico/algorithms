var numbers = [10,9,8,7,6,1,2,3,4,5];

function bubblesort(array) {
	
	for (var i = 0; i < array.length; i++){
		for (var j = 0; j < array.length - 1 - i; j++) {
			//console.log("i: " +i);
			//console.log("j: " +j);
			//console.log(array);
			if (array[j+1]<array[j]) {
				var swap = array[j+1];
				array[j+1]= array[j];
				array[j]= swap; 
			}
			//console.log(array);
		}	
		//console.log(array);
	}
	return array;
}

console.log(bubblesort(numbers));
