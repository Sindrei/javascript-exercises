const findTheOldest = (a) => {
  const oldestPerson = a.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = getAge(
      currentPerson.yearOfDeath,
      currentPerson.yearOfBirth
    );
    return oldestAge > currentAge ? oldest : currentPerson;
  });
  return oldestPerson;
};

function getAge(death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
