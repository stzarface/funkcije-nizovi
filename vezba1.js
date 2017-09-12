
// var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
// var trazenaVrednost = 4;
// var vrednostZaZamenu = 25;


// for (var i = 0; i < niz.length; i++) {
// 	if (trazenaVrednost === niz[i]) {
// 		niz[i] = vrednostZaZamenu;
// 	}
// }
// console.log(niz);

// var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
// var trazenaVrednost = 4;
// var vrednostZaZamenu = 25;
// var noviNiz = [];

// for (var i = 0; i < niz.length; i++) {
// 	var medjuNiz = niz[i];
// 	if (trazenaVrednost !== medjuNiz) {
// 		noviNiz.push(medjuNiz);
// 	} else if (trazenaVrednost === medjuNiz) {
// 		noviNiz.push(vrednostZaZamenu);
// 	}
// }
// console.log(noviNiz);


var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
var trazenaVrednost = 4;
var vrednostZaZamenu = 25;
var noviNiz = [];

function vezba1 (jedan, dva, tri) {
	for (var i = 0; i < niz.length; i++) {
		var medjuNiz = niz[i];
		if (trazenaVrednost !== medjuNiz) {
			noviNiz.push(medjuNiz);
		} else if (trazenaVrednost === medjuNiz) {
			noviNiz.push(vrednostZaZamenu);
		}
	}
	return noviNiz;
}
vezba1(niz, trazenaVrednost, vrednostZaZamenu);
console.log(noviNiz);
