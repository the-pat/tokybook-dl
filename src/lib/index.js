const getBody = require('./getBody').default;
const getTracks = require('./getTracks').default;
const validateTracks = require('./validateTracks');
const downloadTrack = require('./downloadTrack');
const { logger } = require('./logger');

module.exports = {
  getBody, getTracks, validateTracks, downloadTrack, logger,
};
