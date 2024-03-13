// Handles Date, Infinity and null variables
function formatData(object) {
  for (let key in object) {
    if (object[key] === Infinity) {
      object[key] = 'Infinity';
    }

    if (object[key] === null) {
      object[key] = 'null';
    }
  }
}

class Serializable {
  serialize() {
    formatData(this);

    const [constructor, properties] = [this.constructor.name, this];
    return JSON.stringify([constructor, properties]); // String type
  }

  wakeFrom(string) {
    // serialize returns the argument for string
    const [constructor, properties] = JSON.parse(string);

    if (this.constructor.name !== constructor) {
      throw new Error(`Serialized variable contains data from ${constructor} class`);
    }

    return new this.constructor(properties);
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth, array, infinity, nullVal } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
    this.array = array;
    this.infinity = infinity;
    this.nullVal = nullVal;
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
  array: ['a', 'b', 'c'],
  infinity: Infinity,
  nullVal: null,
});

console.log(tolik.printInfo()); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true

console.log(resurrectedTolik);

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
