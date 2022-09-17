function modifyArr(arr, delay, setArr) {
    setTimeout(() => {
        setArr([...arr])
    }, delay)
}

export function bubbleSort(arr, setArr) {
    let delay = 1
    let isSorted = false
    for (let i = 0; i < arr.length; i++) {
        if (!isSorted) {
            isSorted = true
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    isSorted = false
                    let temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
                let newArr = [...arr]
                modifyArr(newArr, delay, setArr)
                delay = delay + 0.2
            }
        }

    }
    return delay
}

export function insertionSort(arr, setArr) {
    let delay = 20
    let i, key, j;
    let n = arr.length;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;

            let newArr = [...arr]
            modifyArr(newArr, delay, setArr)
            delay = delay + 5
        }
        arr[j + 1] = key;

    }
    return delay
}

export function selectionSort(arr, setArr) {
    let delay = 100
    let i, j, minId;
    let n = arr.length;

    for (i = 0; i < n - 1; i++) {
        minId = i;
        for (j = i + 1; j < n; j++)
            if (arr[j] < arr[minId])
                minId = j;

        let temp = arr[minId];
        arr[minId] = arr[i];
        arr[i] = temp;

        let newArr = [...arr]
        modifyArr(newArr, delay, setArr)
        delay = delay + 150
    }
    return delay
}

var delay1

export function mergeSort(arr, setArr) {
    delay1 = 100
    mergeSortCall(arr, 0, arr.length - 1, setArr)
    return delay1
}

function mergeSortCall(arr, l, r, setArr) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSortCall(arr, l, m, setArr);
    mergeSortCall(arr, m + 1, r, setArr);
    merge(arr, l, m, r, setArr);
}

function merge(arr, l, m, r, setArr) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    var i = 0;

    var j = 0;

    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

    let newArr = [...arr]
    modifyArr(newArr, delay1, setArr)
    delay1 = delay1 + 150
}

var delay2
export function quickSort(arr, setArr) {

    delay2 = 100
    quickSortCall(arr, 0, arr.length - 1, setArr)
    return delay2
}

function quickSortCall(arr, low, high, setArr) {
    if (low < high) {
        let pi = partition(arr, low, high, setArr);
        quickSortCall(arr, low, pi - 1, setArr);
        quickSortCall(arr, pi + 1, high, setArr);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high, setArr) {
    let pivot = arr[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
        let newArr = [...arr]
        modifyArr(newArr, delay2, setArr)
        delay2 = delay2 + 50
    }
    swap(arr, i + 1, high);
    return (i + 1);
}



