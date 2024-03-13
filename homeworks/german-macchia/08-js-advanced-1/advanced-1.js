// 1. Pluck
function pluck(obj, key) {
  const KEYS = key.split(".");
  let searchedValue = null;

  let value = (auxObj) => {
    for (atribute in auxObj) {
      let isInKeys = KEYS.some((e) => atribute === e);
      if (typeof auxObj[atribute] === "object" && isInKeys) {
        value(auxObj[atribute]);
      } else if (isInKeys) {
        searchedValue = auxObj[atribute];
      }
    }
  };

  value(obj);

  return searchedValue;
}

//2. Deep Clone
function clone(obj) {
  let stringOfObject = JSON.stringify(obj);
  return JSON.parse(stringOfObject);
}

//3. "A long time ago"
function moment(date, format) {
  let arr = format.split(/[/ :]/g);
  let objFormat = {};
  arr.forEach((e) => {
    let index = format.indexOf(e);
    objFormat[e] = date.substr(index, e.length);
  });
  return new Date(
    objFormat["YYYY"],
    objFormat["MM"] - 1,
    objFormat["DD"],
    objFormat["hh"] ?? 0,
    objFormat["mm"] ?? 0,
    objFormat["ss"] ?? 0
  );
}

function offset(date) {
  let response;
  const MMS_IN_MIN = 1000 * 60;
  const MIN_IN_HOUR = 60;
  const MIN_IN_DAY = 60 * 24;
  const NOW = new Date();
  const DIFF_TIME_MMS = Math.abs(NOW - date);
  const DIFF_MIN = Math.floor(DIFF_TIME_MMS / MMS_IN_MIN);

  if (DIFF_MIN < MIN_IN_HOUR) {
    response = DIFF_MIN + " minutes ago";
  }
  if (DIFF_MIN >= MIN_IN_HOUR) {
    response =
      Math.floor(DIFF_MIN / MIN_IN_HOUR) +
      " hours " +
      Math.floor(DIFF_MIN % MIN_IN_HOUR) +
      " minutes ago";
  }
  if (DIFF_MIN > MIN_IN_DAY) {
    response = Math.floor(DIFF_MIN / MIN_IN_DAY) + " days ago";
  }
  return response;
}

//4. Random dates

function moment(date, format) {
  let arr = format.split(/[/ :]/g);
  let objFormat = {};
  arr.forEach((e) => {
    let index = format.indexOf(e);
    objFormat[e] = date.substr(index, e.length);
  });
  return new Date(
    objFormat["YYYY"],
    objFormat["MM"] - 1,
    objFormat["DD"],
    objFormat["hh"] ?? 0,
    objFormat["mm"] ?? 0,
    objFormat["ss"] ?? 0
  );
}

function randomDate(date1, date2) {
  this.date = new Date(Math.random() * (date2 - date1) + date1.getTime());
  return this.date;
}

//although is not a good practice at all changing the defined Objects of JavaScript
Date.prototype.format = (format) => {
  const DATE_ITEMS = ["YYYY", "YY", "MM", "DD", "hh", "mm", "ss"];
  let entries = {
    DD: date.toLocaleString("en-US", { day: "numeric" }),
    MM: date.toLocaleString("en-US", { month: "numeric" }),
    YYYY: date.toLocaleString("en-US", { year: "numeric" }),
    YY: date.toLocaleString("en-US", { year: "numeric" }).substring(2),
    hh: date.toLocaleString("en-US", { hour: "2-digit", hour12: false }),
    mm: date.toLocaleString("en-US", { minute: "2-digit" }),
    ss: date.toLocaleString("en-US", { second: "2-digit" }),
  };

  for (e of DATE_ITEMS) {
    if (entries[e].length === 1) format = format.replace(e, "0" + entries[e]);
    else format = format.replace(e, entries[e]);
  }

  return format;
};

//## Code Wars

//5. Merged Objects https://www.codewars.com/kata/515bb423de843ea99400000a
function objConcat(objectsArray) {
  return Object.assign({}, ...objectsArray);
}

//6. "this" is an other problem https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    },
    set(_fullName) {
      _fullName = _fullName.split(" ");
      if (_fullName.length === 2) {
        [this.firstName, this.lastName] = _fullName;
      }
    },
  });
}

//8. "this" is an other solution - https://www.codewars.com/kata/54834b3559e638b39d0009a2
function OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + " " + this.lastName;

  Object.defineProperties(this, {
    firstName: {
      writable: false,
    },
    lastName: {
      writable: false,
    },
    fullName: {
      writable: false,
    },
  });
}
