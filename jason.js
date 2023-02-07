// question 1
function checkTotalYears() {
  const balance = 30;
  const toReachHundredThousand = 100000 / balance;
  const toReachAMillion = 10000000 / balance;

  console.log("To reach $100000 ", toReachHundredThousand);
  console.log("To reach $1000000 ", toReachAMillion);
}

checkTotalYears();

// question 2

function checkSum() {
  const numbers = [40, 17, 28, 31, 41, 12, 19, 27, 38, 40, 18, 22, 33, 11];
  const halfway = numbers.length / 2;
  let forward = 0;
  let backward = halfway - 1;

  for (let index = 0; index < halfway; index++) {
    console.log(
      numbers[forward],
      " + ",
      numbers[backward],
      " ",
      numbers[forward] + numbers[backward] == 50
    );
    forward += 1;
    backward -= 1;
  }
}

checkSum();

// question 3
function capitalizeString(input) {
  const stringArr = input.split(" ");
  let output = "";
  for (let index = 0; index < stringArr.length; index++) {
    output +=
      stringArr[index][0].toUpperCase().concat(stringArr[index].slice(1)) + " ";
  }
  return output;
}

const result = capitalizeString(
  "hi. my name is John. i am a programmer. what is your name?"
);

console.log(result);

// question 4

function predictOrganismSize(startOrganismNum, averageDaily, noOfDays) {
  for (let start = 0; start < noOfDays; start++) {
    console.log("Day ", start + 1, ": ", startOrganismNum, " Organisms");
    startOrganismNum =
      startOrganismNum + startOrganismNum * (averageDaily / 100);
  }
}

predictOrganismSize(2, 50, 7);

// Question 5
function compareArrays(array1, array2) {
  let meetCondition = false;
  if (array1.length !== array2.length) {
    return "Array size are not the same and would cause program to break";
  }
  for (let ind = 0; ind < array1.length; ind++) {
    if (array1[ind] == array2[ind]) {
      meetCondition = true;
    } else {
      meetCondition = false;
      break;
    }
  }
  if (meetCondition) {
    return "Array contains the same values in the same order";
  } else {
    return "Array does not contain the same values or they are not in order";
  }
}

const compare = compareArrays([1, 2, 3, 4], [1, 2, 7, 4]);
console.log(compare);
