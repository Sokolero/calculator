// =============== CALCULATOR HANDLER ==============================================================

// --- To convert the String list to the Number list --------------
const stringsToNumbers = (strings) => strings.map((item) => Number(item));

// --- To convert the Number to the String
const numberToString = (number) => String(number);


// --- Simply addition of arguments ----------
export const summ = (numbers) => {
  const _numbers = stringsToNumbers(numbers);
  return numberToString(_numbers.reduce((previous, current) => {
    return previous + current;
  }, 0));
};

// --- Subtraction of arguments ---------------
export const subtract = (numbers) => {
  const _numbers = stringsToNumbers(numbers);
  return String(_numbers.length > 1 ? _numbers[0] - _numbers[1] : _numbers[0]);
};

// --- Multiplication of list of numbers -------
export const multi = (numbers) => {
  const _numbers = stringsToNumbers(numbers);
  return numberToString(_numbers.reduce((previous, current) => {
    return previous * current;
  }, 1));
};

// --- Division of numbers ---------------------
export const div = (numbers) => {
  const _numbers = stringsToNumbers(numbers);
  return String(_numbers.length > 1 ? _numbers[0] / _numbers[1] : _numbers[0]);
};

// --- Calculate of the percent ----------------
export const percent = (numbers) => {
  return String((Number(numbers[0]) / 100) * Number(numbers[1]));
}

// --- Backspace numbers -----
export const backspace = (state) => ({
  displayValue: state.displayValue.length > 1 ? state.displayValue.slice(0, state.displayValue.length - 1) : "0"
});

// --- Clear display ---------
export const clear = (state) => ({
  displayValue: "0",
  mode: "reset",
  valueListing: [],
  action: summ,
});


// --- Typing number, switch mode ------
export const typeNumber = (state, number) => {

  if (state.mode === "reset") {
    return {
      displayValue: number,
      mode: "typing",
      valueListing: [...state.valueListing, number],
    };
  }

  if (state.mode === "typing") {
    return {
      displayValue: state.displayValue === "0" ? number : state.displayValue + number,
      valueListing: [...state.valueListing.slice(0, -1), state.displayValue === "0" ? number : state.displayValue + number],
    };
  }
};

// --- Apply arithmetic action by clicked button -----------
export const applyAction = (state, btnValue) => {

  const mapping = {
    "+": summ,
    "-": subtract,
    "x": multi,
    "/": div,
    "%": percent,
  };

  return {
    mode: "reset",
    action: mapping[btnValue],
  };
};


// --- To calculate current expression -------------
export const result = (state, value) => {

  if (state.valueListing.length === 0) {
    return;
  }

  return {
    displayValue: state.action(state.valueListing),
    valueListing: [],
    mode: "reset",
  }
}
