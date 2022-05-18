/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-global-assign */
/* eslint-disable no-unused-vars */


const supertest = require('supertest');
const should = require('should');
const baseActions = require('../common/BaseActions');
const baseURLMapper = require('../../../../UrlMapper').UrlMapper;
const reqBody = require('../../testData/Payloads/CommonPayload');


/** This createUser will help us to create a user with user-id and user name as a request body
        this request body can be changed as per your project api * */


exports.getRequest = async function (number) {
  URL = baseActions.getBaseURL();
  console.log(URL + baseURLMapper.CREATE);
  const res = await baseActions.sendGETRequest(URL, baseURLMapper.CREATE);
  return res;
};
/** This getUserList will help us in getting all the users that are present in the database
*/
