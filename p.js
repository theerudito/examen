const test = {
  name: 'exnm',
  lastName: 'exln',
  age:17,
  address: {
    pricipalStreet: 'Av. 17 de julio',
    secondaryStreet: 'Av. 22',
    apartment: {
      floor: 'first',
      number: 33
    }
  }
}

test.address.apartment = {newHome: 22};
console.log({test})