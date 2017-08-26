const findReplace = (array, select, change) => {
  return array.map(_ => {
    let is = true;

    for (let key in select) {
      const value = select[key];
      if (_[key] != value) is = false;
    }

    if (is) {
      _ = Object.assign(_, change);
    }

    return _;
  });
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = findReplace;
} else {
  window.findReplace = findReplace;
}

