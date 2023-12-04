const findFirstRepeated = (gifts) => {
  const occurrences = {};

  for (let i = 0; i < gifts.length; i++) {
    const currentId = gifts[i];

    if (occurrences[currentId] !== undefined)
      return currentId;

    occurrences[currentId] = { index: i };
  }

  return -1;
}


const example = [2, 1, 3, 5, 3, 2];

const firstRepeated = findFirstRepeated(example);
console.log(firstRepeated);
