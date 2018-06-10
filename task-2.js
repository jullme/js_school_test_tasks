const compare = (a, b) => {
    return a - b;
};

const checkElements = (arr1, arr2) => {
    let check = true;
    arr1.sort(compare);
    arr2.sort(compare);
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            check = false;
            break;
        }
    }
    return check;
};

let arr1 = [11,47,54,22];
let arr2 = [11,22,48,54];

checkElements (arr1, arr2);