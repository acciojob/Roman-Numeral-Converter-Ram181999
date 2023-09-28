function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

	  let result = '';
    let i = 0;

    while (num > 0) {
        const [roman, value] = obj[i];

        if (num >= value) {
            result += roman;
            num -= value;
        } else {
            // Handle subtraction cases (e.g., 4, 9, 40, 90, etc.)
            const nextI = i + (i % 2 === 0 ? 2 : 1); // Move to the next valid index
            const [nextRoman, nextValue] = obj[nextI];

            if (num + nextValue >= value) {
                result += nextRoman + roman;
                num -= (value - nextValue);
            } else {
                i++;
            }
        }
    }

    return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
