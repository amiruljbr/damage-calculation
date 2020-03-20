function attack(damage) {
  // Code disini
  var newDamage = 0
  newDamage = damage - 2
  return newDamage
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  // Code disini
  var result = 0
  for (let i = 0; i < numberOfAttacks; i++) {
    result += attack(damagePerAttack)
  }
  return result
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90