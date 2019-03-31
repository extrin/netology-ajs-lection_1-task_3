function compare_numbers(value_1, value_2) {
  "use strict";
  return value_1 - value_2;
}

function get_sorted_scores(scores) {
  "use strict";
  let sorted_scores = scores;
  return sorted_scores.sort(compare_numbers).reverse();
}

function array_input_ok(array) {
  if (Array.isArray(array)) {
    if (!array.some(isNaN)) return true;
    else return false;
  } else return false;
}

function get_best_score(scores) {
  "use strict";
  if (array_input_ok(scores)) {
    return get_sorted_scores(scores)[0];
  } else {
    console.log("01 Input is not OK");
    return 0;
  }
}

function get_average_from_top_3(scores) {
  "use strict";
  if (array_input_ok(scores)) {
    const top_3 = get_sorted_scores(scores).slice(0, 3);
    return +((top_3[0] + top_3[1] + top_3[2]) / 3).toFixed(2);
  } else {
    console.log("01 Input is not OK");
    return 0;
  }
}

const sample_scores = [74989, 74990, 84990, 62000, 58480, 61800];
const best_score = get_best_score(sample_scores);
const average_score = get_average_from_top_3(sample_scores);
document.getElementById("data").innerHTML += sample_scores;
console.log("Sample scores:" + sample_scores);
document.getElementById("best_score").innerHTML += best_score;
console.log("Best scores:" + best_score);
document.getElementById("average_score").innerHTML += average_score;
console.log("Average score:" + average_score);
