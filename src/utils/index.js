export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function toReadable(number) {
  return number.toString().replace(".", ",");
}

export function toComputable(numberLike) {
  return Number((numberLike ?? "0").toString().replace(",", "."));
}

export function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => (err ? reject(err) : resolve(result)));
    });
  };
}
