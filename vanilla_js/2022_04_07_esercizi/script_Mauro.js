function continuafino() {
  let test = Math.floor(Math.random() * 14 + 1);

  while (test % 3 !== 0) {
    console.log(test);
    test = Math.floor(Math.random() * 14 + 1);
  }

  console.log("Continua fino:", test);
}

function minmax(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (number of arr) {
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
  }

  console.log("Minmax:", min, max);
}

function find(arr, toFind) {
  let result = false;

  for (number of arr) {
    if (number === toFind) {
      result = true;
    }
  }

  console.log("Find:", result);
}

function isAscending(arr) {
  let placeholder = -1;
  let result = true;

  for (number of arr) {
    if (placeholder > number) {
      result = false;
      break;
    }
    placeholder = number;
  }

  console.log("IsAscending:", result);
}

function mostRecurring(arr) {
  let result = -1;
  let occurencies = -1;

  for (number of arr) {
    let temp = 0;
    for (occ of arr) {
      if (occ === number) {
        temp += 1;
      }
    }
    if (temp > occurencies) {
      result = number;
      occurencies = temp;
    }
  }

  console.log("MostRecurring:", result, occurencies);
}

function onlyVowels(str) {
  console.log("OnlyVowels:", str.replace(/[^aeiou]/g, ""));
}

continuafino();
minmax([4, 78, 43, 3, 567, 22, 45, 68, 11]);
find([4, 78, 43, 3, 567, 22, 45, 68, 11], 111);
isAscending([4, 8, 10, 55, 60, 90, 100, 168, 221]);
mostRecurring([4, 11, 4, 55, 55, 70, 71, 55, 11, 4, 4]);
onlyVowels("Valentina");

function minmaxJS(arr) {
  console.log("minmaxJS:", Math.min(...arr), Math.max(...arr));
}

function findJS(arr, toFind) {
  console.log("FindJS:", arr.includes(toFind));
}

function isAscendingJS(arr) {
  console.log(
    "IsAscendingJS:",
    arr.every((number, index) => index === 0 || number >= arr[index - 1])
  );
}

function mostRecurringJS(arr) {
  console.log(
    "MostRecurringJS:",
    ...arr.reduce(
      ([number, occurencies], current) => {
        const currentOcc = arr.filter((n) => current === n).length;
        return currentOcc > occurencies
          ? [current, currentOcc]
          : [number, occurencies];
      },
      [-1, -1]
    )
  );
}

minmaxJS([4, 78, 43, 3, 567, 22, 45, 68, 11]);
findJS([4, 78, 43, 3, 567, 22, 45, 68, 11], 111);
isAscendingJS([4, 8, 10, 55, 60, 90, 100, 168, 221, 200]);
mostRecurringJS([4, 11, 4, 55, 55, 70, 71, 55, 11, 4, 4]);
