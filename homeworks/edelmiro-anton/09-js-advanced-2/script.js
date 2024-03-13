class Serializable {
  serialize() {
    let obj = {
      className: `${this.constructor.name}`,
      ...this,
    };
    const jsonString = JSON.stringify(obj, (key, value) => {
      Object.keys(value).forEach((el) => {
        if (value[el] === Infinity || value[el] === -Infinity) {
          value[el] = value[el].toString();
        } else if (value[el] === null) {
          value[el] = 'null';
        } else if (Number.isNaN(value[el])) {
          value[el] = 'NaN';
        }
      });
      return value;
    });
    return jsonString;
  }

  wakeFrom(serialized) {
    const parsed = JSON.parse(serialized, (key, value) => {
      if (value === 'Infinity') return Infinity;
      if (value === '-Infinity') return -Infinity;
      if (value === 'null') return null;
      if (value === 'NaN') return NaN;

      return value;
    });
    if (parsed.className === this.constructor.name) {
      return new this.constructor(parsed);
    }
    return 'Incorrect class';
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
    return `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth}`;
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

console.log(tolik.printInfo()); //A. Nashovich - 2020327, Fri Jan 01 1999 21:00:00

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
// throw an error because the serialized line does contain data for User class
