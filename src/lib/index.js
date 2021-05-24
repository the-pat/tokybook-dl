const getBody = require('./getBody').default;
const getTracks = require('./getTracks');
const validateTracks = require('./validateTracks');
const downloadTrack = require('./downloadTrack');
const { logger } = require('./logger');

module.exports = {
  getBody, getTracks, validateTracks, downloadTrack, logger,
};
