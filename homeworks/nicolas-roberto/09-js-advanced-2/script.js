class Serializable {
  serialize() {
    let obj = this;
    Object.keys(obj).forEach((key) => {
      if (obj[key] === -Infinity || obj[key] === Infinity) {
        return obj[key].toString();
      }
      if (isNaN(obj[key])) {
        return 'NaN';
      }
      if (obj[key] instanceof Date) {
        return (obj[key] = { isDate: true, dateobj: obj[key].getTime() });
      }
    });
    return `${obj.constructorName} ${JSON.stringify(obj)}`;
  }
  wakeFrom(serialized) {
    let awake = JSON.parse(serialized);
    if (this.constructor.name !== awake.constructorName) {
      throw new Error('Error');
    }
    if (this.constructor.name === awake.constructorName) {
      awake = new this.constructor(awake);
    }
    for (let key in awake) {
      if (awake[key] === 'NaN') {
        return NaN;
      }
      if (awake[key] === '-Infinity') {
        return -Infinity;
      }
      if (awake[key] === 'Infinity') {
        return Infinity;
      }
      if (awake[key].isDate) {
        return (awake[key] = new Date(awake[key].dateobj));
      }
    }
    return awake;
  }
}
class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth, NaN, infinity }) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
    this.nan = NaN;
    this.infinity = Infinity;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}, ${this.infinity}`,
    );
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
  nan: NaN,
  infinity: -Infinity,
  valNull: null,
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author }) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class
