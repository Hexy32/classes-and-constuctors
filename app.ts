//CLASSES AND CONSTRUCTORS

class user {
  email
  name
  dateOfBirth
  dateCreated
  constructor(email: string, name: string, dateOfBirth: string) {
    this.email = email
    this.name = name
    this.dateOfBirth = dateOfBirth
    this.dateCreated = Date.now()
  }

  get age() {
    return this.dateCreated - this.dateOfBirthUnix
  }

  get dateOfBirthUnix() {
    return parseInt(new Date(this.dateOfBirth).getTime().toFixed(0))
  }

  get ageInYears() {
    return this.age / 3155692 / 10000
  }

  getUsername() {
    return this.email.split('@')[0]
  }
}

const userOne = new user('creepL@hotmail.com', 'Somebody Iam', '2004.10.19')

console.log({
  age: userOne.age,
  dateCreated: userOne.dateCreated,
  dateOfBirth: userOne.dateOfBirth,
  dateOfUnix: userOne.dateOfBirthUnix,
  username: userOne.getUsername(),
  ageInYears: userOne.ageInYears,
})

//ARRAYS AND MAPS

let array = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', userOne }

let map = [
  { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five' },
  { 6: 'six', 7: 'seve', 8: 'eight', 9: 'nine', 10: 'ten' },
  { 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fivteen' },
  { no: array },
  {
    'ohno!': {
      0: 'hehe',
      1: 'hehe2',
      'EVENWORSE?!?!?': [
        { lol: 1 },
        { no: 2, wow: { hehe: '?', 2: userOne } },
        { imDeadXD: { 2: '???' } },
      ],
    },
  },
]

console.log(map)
