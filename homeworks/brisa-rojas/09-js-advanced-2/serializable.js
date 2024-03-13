'use strict';
const DIVIDER = '---';

class Serializable {
  serialize() {
    const formattedDeepClone = this.format2Serialize();
    const constructor = this.constructor.name;
    let serial = JSON.stringify(formattedDeepClone);

    serial += DIVIDER + constructor;

    return serial;
  }

  wakeFrom(serial) {
    let [resurrected, serializedConstructor] = serial.split(DIVIDER);

    if (this.constructor.name.toString() != serializedConstructor) {
      throw new Error(`Serialized object is not an instance of ${this.constructor.name}. Cannot be woken up.`);
    }

    resurrected = Serializable.format2DSerialize(resurrected);
    resurrected = new this.constructor(resurrected);

    return resurrected;
  }

  format2Serialize() {
    let auxiliarObject = JSON.parse(JSON.stringify(this)); //deep clone of this to work with

    for (let key in this) {
      let value = this[key];

      if (value instanceof Date) {
        auxiliarObject[key] = { dateTime: value.toISOString(), isDate: true };
      }

      if (value === Infinity || value === -Infinity) {
        //if it's an infinity => convert it to string
        auxiliarObject[key] = value.toString();
      }

      if (value === -0) {
        auxiliarObject[key] = 0;
      }
    }

    return auxiliarObject;
  }

  static format2DSerialize(serial) {
    let auxiliarObject = JSON.parse(serial);

    for (let key in auxiliarObject) {
      if (auxiliarObject[key].isDate) {
        auxiliarObject[key] = new Date(auxiliarObject[key].dateTime);
      }

      if (auxiliarObject[key] === 'Infinity' || auxiliarObject[key] === '-Infinity') {
        auxiliarObject[key] = parseFloat(auxiliarObject[key]);
      }
    }

    return auxiliarObject;
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth }) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
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
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

// TEST 0
const serialized = tolik.serialize();
console.log('This is tolik serial: ' + serialized);
const resurrectedTolik = new UserDTO({}).wakeFrom(serialized);
resurrectedTolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

console.log(resurrectedTolik instanceof UserDTO); // true
resurrectedTolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author }) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

// TEST 1
let post = new Post({ content: 'How to serialize things?', date: new Date('2000-03-17'), author: 'Brisa' });
let postSerial = post.serialize();

// resurrect post
post = null;
let resurrectedPost = new Post({}).wakeFrom(postSerial);

console.log(resurrectedPost); //{ content: 'How to serialize things?', date: 2020-03-17T00:00:00.000Z, author: 'Brisa' }
console.log(resurrectedPost instanceof Post); //true

// TEST 2
console.log('\nTrying to resurrect something that is not a post\n');
let resurrectedNotPost = new Post({});

try {
  resurrectedNotPost = resurrectedNotPost.wakeFrom(serialized); //this should throw an error
} catch (error) {
  console.log('Error ocurred');
  console.log(error.message);
}

class OtherCases extends Serializable {
  constructor(a, b, c, d) {
    super();

    this.value1 = a;
    this.value2 = b;
    this.value3 = c;
    this.value4 = d;
  }
}

// TEST 3

let others = new OtherCases(Infinity, -Infinity, -0, 16.5);
let othersSerial = others.serialize();

others = null;

let resurrectedOthers = new OtherCases();
resurrectedOthers = resurrectedOthers.wakeFrom(othersSerial);
console.log(resurrectedOthers); // { value1: 'Infinity', value2: '-Infinity', value3: '-0', value4: '16.5' }
console.log(resurrectedOthers instanceof OtherCases); // true

// TEST 4

let others2 = new OtherCases(0, 1, 2, ['this', 'is', 'an', 'array']);
let others2Serial = others2.serialize();
console.log(others2Serial); // { value1: '0', value2: '1', value3: '2', value4: '[this,is,an,array]' }

others2 = null;

let resurrectedOthers2 = new OtherCases().wakeFrom(others2Serial);
console.log(resurrectedOthers2 instanceof OtherCases); // true
