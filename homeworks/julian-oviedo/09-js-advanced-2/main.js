class Serializable {
  serialize() {
    let obj = this;
    Object.keys(obj).forEach((key) => {
      if (obj[key] === undefined) {
        throw new Error("This object can't be serialized");
      } else if (obj[key] === -Infinity || obj[key] === Infinity) {
        obj[key] = obj[key].toString();
      } else if (isNaN(obj[key]) && obj[key].toString() === 'NaN') {
        obj[key] = 'NaN';
      }
    });
    obj.constrName = this.constructor.name;
    return JSON.stringify(obj);
  }
  wakeFrom(obj) {
    let wakeObj = JSON.parse(obj);
    if (this.constructor.name !== wakeObj.constrName) {
      throw new Error('Serialized line does not contain data for class');
    } else if (this.constructor.name === wakeObj.constrName) {
      wakeObj = new this.constructor(wakeObj);
    }
    for (let key in wakeObj) {
      const isDateRegex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
      if (isDateRegex.exec(wakeObj[key])) {
        wakeObj[key] = new Date(isDateRegex.exec(wakeObj[key][0]));
      }
      if (wakeObj[key] === 'Infinity') {
        wakeObj[key] = Infinity;
      }
      if (wakeObj[key] === '-Infinity') {
        wakeObj[key] = -Infinity;
      }
      if (wakeObj[key] === 'NaN') {
        wakeObj[key] = NaN;
      }
    }
    return wakeObj;
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    return `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`;
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

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
