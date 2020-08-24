const person = {
  name: "petter",
  age: 13,
  mather: {
    name: "lisa",
    age: 13,
  },
};

function get(target, keyPath, defaultValue) {
  if (!Array.isArray(keyPath)) {
    keyPath = keyPath.split('.');
  }
  if (keyPath.length && target) {
    return get(target[keyPath.shift()], keyPath, defaultValue);
  } else if (!keyPath.length && target) {
    return target;
  } else {
    return defaultValue;
  }
}
// 实现方式2:
function deepGet(object, path, defaultValue) {
  if (!Array.isArray(path)) {
    path = path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
  }
  return path.reduce((o, item) =>
    (o || {})[item], object) || defaultValue;
}

console.log(get(person, "name"));; // petter
console.log(get(person, "mather.name"));; // lisa
console.log(get(person, "mather.name", "abc")); // lisa
console.log(get(person, "father.name")); // undefined
console.log(get(person, "father.name", "sam")); // sam

console.log(get(deepGet, "name"));; // petter
console.log(get(deepGet, "mather.name"));; // lisa
console.log(get(deepGet, "mather.name", "abc")); // lisa
console.log(get(deepGet, "father.name")); // undefined
console.log(get(deepGet, "father.name", "sam")); // sam