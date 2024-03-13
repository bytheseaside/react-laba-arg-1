class Serializable {
  serialize() {
    for (let prop in this) {
      if (this[prop] instanceof Date) {
        this[prop] = this[prop].toString();
      }
      if (this[prop] === -0) {
        this[prop] = 0;
      }
      if (this[prop] === Infinity || this[prop] === -Infinity) {
        this[prop] = this[prop].toString();
      }
      if (typeof this[prop] === 'number' && isNaN(this[prop])) {
        this[prop] = 'NaN';
      }
      if (this[prop] === null) {
        this[prop] = 'null';
      }
    }
    return `${this.constructor.name}  ${JSON.stringify(this)}`;
  }
  wakeFrom(serial) {
    let serialConstructor = serial.split('  ')[0];
    let serialObj = serial.split('  ')[1];
    if (this.constructor.name != serialConstructor) {
      throw new Error(`Serialized line is from a different class.`);
    }
    let resurrected = JSON.parse(serialObj);
    for (let prop in resurrected) {
      if (resurrected[prop] === 'null') {
        resurrected[prop] = null;
      }
      if (typeof resurrected[prop] === 'string' && resurrected[prop].includes('Infinity')) {
        resurrected[prop] = parseFloat(resurrected[prop]);
      }
      if (resurrected[prop] === 'NaN') {
        resurrected[prop] = NaN;
      }
      if (resurrected[prop] === 'null') {
        resurrected[prop] = null;
      }
      if (typeof resurrected[prop] === 'string' && new Date(resurrected[prop]) != 'Invalid Date') {
        resurrected[prop] = new Date(resurrected[prop]);
      }
    }
    return new this.constructor(resurrected);
  }
}
class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth, nullValue, nan, infinity, minusZero, obj, arr, number } = {}) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
    this.nullValue = nullValue;
    this.nan = nan;
    this.infinity = infinity;
    this.minusZero = minusZero;
    this.obj = obj;
    this.arr = arr;
    this.number = number;
  }

  printInfo() {
    console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toString()}`);
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
  nullValue: null,
  nan: NaN,
  infinity: -Infinity,
  minusZero: -0,
  obj: {
    a: 'a',
    b: 'b',
  },
  arr: [9, 12, 18],
  number: 4,
});

//  Tests

tolik.printInfo(); // A. Nashovich - 2020327, Fri Jan 01 1999 21:00:00 GMT-0300 (hora estándar de Argentina)
const serialized = tolik.serialize();
tolik = null;
console.log(serialized); // UserDTO  {"firstName":"Anatoliy","lastName":"Nashovich","phone":"2020327","birth":"Fri Jan 01 1999 21:00:00 GMT-0300 (hora estándar de Argentina)","nullValue":"null","nan":"NaN","infinity":"-Infinity","minusZero":0,"obj":{"a":"a","b":"b"},"arr":[9,12,18],"number":4}
const resurrectedTolik = new UserDTO().wakeFrom(serialized);
console.log(resurrectedTolik);
/* 
UserDTO {
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: 1999-01-02T00:00:00.000Z,
  nullValue: null,
  nan: NaN,
  infinity: -Infinity,
  minusZero: 0,
  obj: { a: 'a', b: 'b' },
  arr: [ 9, 12, 18 ],
  number: 4
} 
*/
console.log(resurrectedTolik instanceof UserDTO); // true
resurrectedTolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author } = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}
console.log(new Post().wakeFrom(serialized)); // throws Error(`Serialized line is from a different class.`)
