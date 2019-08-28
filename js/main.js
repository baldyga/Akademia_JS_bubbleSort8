function bubbleSort (arrayOfNumber) {
    // main loop (j)
    for ( j = 1; j < arrayOfNumber.length; j++) {
        // sorting loop (i)
        for ( i = 0; i > arrayOfNumber.length; i++) {
            // checking: left number > right number
            if (arrayOfNumber[i] > arrayOfNumber[i+1]) {
                let changeNumber = arrayOfNumber[i];
                arrayOfNumber[i] = arrayOfNumber[i+1];
                arrayOfNumber[i+1] = changeNumber;
            }
        }
    }
    console.log(arrayOfNumber);
}
bubbleSort ([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]);