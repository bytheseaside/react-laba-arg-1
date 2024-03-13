// my code
let specialVariables = {
  dates: [],
  infinity: [],
  minusInfinity: [],
  nan: [],
};

class Serializable {
  serialize() {
    const objEntries = Object.entries(this);
    for (let i = 0; i < objEntries.length; i++) {
      if (objEntries[i][1] instanceof Date) {
        specialVariables['dates'].push(objEntries[i][0]);
      }
      if (objEntries[i][1] === Infinity) {
        specialVariables['infinity'].push(objEntries[i][0]);
      }
      if (objEntries[i][1] === -Infinity) {
        specialVariables['minusInfinity'].push(objEntries[i][0]);
      }
      if (isNaN(objEntries[i][1]) && typeof objEntries[i][1] !== 'string' && typeof objEntries[i][1] !== 'object') {
        specialVariables['nan'].push(objEntries[i][0]);
      }
      if (
        typeof objEntries[i][1] !== 'string' &&
        typeof objEntries[i][1] !== 'object' &&
        typeof objEntries[i][1] !== 'number'
      ) {
        throw Error('This data type is not supported');
      }
    }
    return JSON.stringify(this) + '%' + this.constructor.name;
  }

  wakeFrom(serialized) {
    const serializedClass = serialized.split('%')[1];
    const obj = JSON.parse(serialized.split('%')[0]);

    if (serializedClass === this.constructor.name) {
      const entries = Object.entries(obj);
      for (let i = 0; i < entries.length; i++) {
        let currentEntry = entries[i][0];
        if (specialVariables['dates'].includes(currentEntry)) {
          const isoDate = entries[i][1].substring(0, 10);
          this[currentEntry] = new Date(isoDate);
        } else if (specialVariables['infinity'].includes(currentEntry)) {
          this[currentEntry] = Infinity;
        } else if (specialVariables['minusInfinity'].includes(currentEntry)) {
          this[currentEntry] = -Infinity;
        } else if (specialVariables['nan'].includes(currentEntry)) {
          this[currentEntry] = NaN;
        } else {
          this[currentEntry] = entries[i][1];
        }
      }
      return this;
    } else {
      throw Error("Can't wake up from another class.");
    }
  }
}

// code from the task
class UserDTO extends Serializable {
  constructor({
    firstName,
    lastName,
    phone,
    birth,
    age,
    money,
    wants,
    hasDog,
    favouriteNumber,
    nan,
    shoppingList,
    superpowers,
  } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
    this.age = age;
    this.money = money;
    this.wants = wants;
    this.hasDog = hasDog;
    this.favouriteNumber = favouriteNumber;
    this.nan = nan;
    this.shoppingList = shoppingList;
    this.superpowers = superpowers;
  }

  printInfo() {
    console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`);
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
  age: 54,
  money: -Infinity,
  wants: Infinity,
  hasDog: null,
  favouriteNumber: -0,
  nan: NaN,
  shoppingList: ['apples', 'oranges'],
  superpowers: {
    power1: 'flying',
    power2: 'invisibility',
  },
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);
console.log(resurrectedTolik);

console.log(resurrectedTolik instanceof UserDTO); // true
//console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author } = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class
