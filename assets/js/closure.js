function counter(step) {
  let count = 0;

  function initialisation() {
    return (count += step);
  }

  return initialisation;
}

const functionCloneInit = counter(5);
console.log(functionCloneInit());
console.log(functionCloneInit());
console.log(functionCloneInit());

function counter1(count, step) {
  function initialisation() {
    // debugger;
    return (count += step);
  }

  return initialisation;
}

const functionCloneInit1 = counter1(1, 5);
console.log(functionCloneInit1());
console.log(functionCloneInit1());
console.log(functionCloneInit1());
