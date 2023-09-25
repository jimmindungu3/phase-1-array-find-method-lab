// code your solution here

const superbowlResults = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(superbowlResults) {
    const winningYearObject = superbowlResults.find(resultObject => resultObject.result === "W");
  
    if (winningYearObject) {
      return winningYearObject.year;
    } else {
      return undefined;
    }
  }
  