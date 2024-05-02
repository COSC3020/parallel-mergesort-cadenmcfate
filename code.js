//source for learning about promise.all() -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
//source for further learning on async and parallel -> https://www.npmjs.com/package/async-parallel
const async = require('async');

async function PMS(x, lo, hi, tmp) {
    if (lo >= hi) return;
    let mid = Math.floor((lo + hi) / 2);
    const leftp = PMS(x, lo, mid, tmp);     //previously: msort(x, lo, mid, tmp);
    const rightp = PMS(x, mid+1, hi, tmp);  //previously: msort(x, mid+1, hi, tmp);
    await Promise.all([leftp, rightp]);     //new
    merge(x, lo, mid, hi, tmp);
}

async function mergesort(x) {
    var tmp = [];
    sort = await PMS(x, 0, x.length-1, tmp);     //previously: msort(x, 0, x.length-1, tmp);
}

function merge(x, lo, mid, hi, tmp) { //same as slides
    var a = lo, b = mid+1;
    for (var k = lo; k <= hi; k++) {
        if (a <= mid && (b > hi || x[a] < x[b])) {
            tmp[k] = x[a++];
        } else {
            tmp[k] = x[b++];
        }
    }
    for (var k = lo; k <= hi; k++) {
        x[k] = tmp[k];
    }
}


