export default function retrieveRoomKey(path) {
  return path.split('/').slice(-1)[0];
}

Array.prototype.uniqueByField = function (fieldName) {
  const a = this.concat();
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i][fieldName] === a[j][fieldName])
        a.splice(j--, 1);
    }
  }

  return a;
};