var weight1;
var weight2;
var maxWeight;

function tezina(weight1, weight2, maxWeight) {

	if (weight1 + weight2 <= maxWeight) {
		console.log("Nosimo oba.");
	} else if (weight1 > maxWeight && weight2 > maxWeight) {
		console.log("Ne mozemo ni jedan da ponesemo");
	} else if (weight1 > maxWeight && weight2 <= maxWeight) {
		console.log("Nosimo drugi.");
	} else if (weight1 <= maxWeight && weight2 > maxWeight) {
		console.log("Mozemo prvi.");
	} else if (weight1 <= maxWeight && weight2 <= maxWeight && weight1 + weight2 > maxWeight) {
		console.log("Mozemo da biramo koji cemo ali ne mozemo oba.");
	}
	
}

tezina(6, 5, 10);