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
