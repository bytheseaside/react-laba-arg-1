function returnValue(value) {
  const DATE_PATTERN = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i;
  if (value === Infinity) return Infinity;
  if (value === -Infinity) return -Infinity;

  const date = DATE_PATTERN.exec(value);
  if (date) return new Date(date[0]);

  return value;
}

class Serializable {
  constructor() {
    if (this.constructor == Serializable) {
      throw new Error("Serializable can't be instantiated.");
    }
  }

  serialize() {
    try {
      const serialized = JSON.stringify(this);
      return serialized;
    } catch (error) {
      throw new Error('Not able to serialize');
    }
  }

  wakeFrom(serialized) {
    const serializeKeys = JSON.parse(serialized, (_, value) => returnValue(value));
    return new this.constructor(serializeKeys);
  }
}

class UserDTO extends Serializable {
  constructor(props = {}) {
    super();
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.phone = props.phone;
    this.birth = props.birth;
    this.age = props.age;
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

console.log(tolik.printInfo()); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

console.log(serialized);

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo());

class Post extends Serializable {
  constructor({ content, date, author }) {
    super();
    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized));
