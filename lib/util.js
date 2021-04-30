const debugLogBy = (isDebugEnabled) => (...loggables) => {
  if (isDebugEnabled) console.log(new Date().toISOString(), ...loggables);
};

module.exports = { debugLogBy };
