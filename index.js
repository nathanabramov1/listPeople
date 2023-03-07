import people from './people.js'

const listPeople = (arr) => {

    // YOUR CODE HERE
    
}

//////////////////////////////
// please do not edit below :)
//////////////////////////////

// inputs and outputs
// see people.js for the input array

const expectedResult = [
    'Sakura, Park Slope (555-123-4567)',
    'Charles, Washington Heights',
    'Maria, Fordham (555-244-9999)',
    'Suresh, St. George (555-111-2222)',
    'Ariel, Bushwick',
    'Hua, Corona (555-822-7111)'
  ]  

// test feedback
const result = listPeople(people)
console.log("YOUR RESULT:")
console.log(result)

// if "bonus" is provided on the command line, expectedResult is alphabetically sorted by name
if (process.argv[2] == "bonus") {
    expectedResult.sort((a,b) => a.split(",")[0] < b.split(",")[0] ? a.split(",")[0] > b.split(",")[0] ? 1 : -1 : 0)
}

console.log("\nYOU SHOULD SEE:")
console.log(expectedResult)

if (Array.isArray(result) && result.every((item,index) => item === expectedResult[index])) {
    console.log("\nYOU NAILED IT!")
} else {
    console.log("\nGive it another shot and test again!")
}
