

var niz = [1, 2, 1, 5, 4, 2];

function duplikat() {
    var vrednost1 = [];
    for (var i = 0; i < niz.length; ++i) {
        var vrednost2 = niz[i];
        if (vrednost1.indexOf(vrednost2) !== -1) {
            return true;
        }
        vrednost1.push(vrednost2);
    }
    return false;
}

console.log(duplikat());

