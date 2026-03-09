const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = [];
	let currChunk = []
	let sum = 0;

	for(let i = 0;i<arr.length;i++){
		let num = arr[i];
		if(sum+num<=n){
			currChunk.push(num);
			sum += num;
		}
		else{
			res.push(currChunk);
			currChunk = [num];
			sum = num;
		}
	}
	if(currChunk.length>0){
		res.push(currChunk);
	}
	return res;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
