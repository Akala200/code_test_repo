/* eslint-disable no-empty */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable require-jsdoc */


import tracelogger from '../logger/tracelogger';
import responses from '../utils/responses';
import config from '../config/index';


/**
 * @description Defines the actions for the test endpoint
 * @class testController
 */

class testController {
  /**
   *@description Interger request checker
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - status code, message and response
   *@memberof testController
   */

  static async testRequest(req, res) {
    const { number } = req.query;


    if (number % 5 === 0) {
      return res.status(200).json(responses.success(200, 'Data successfully retrieved', 'L'));
    } else if (number % 7 === 0) {
      return res.status(200).json(responses.success(200, 'Data successfully retrieved', 'R'));
    } else if (number % 5 === 0 && number % 7 === 0) {
      return res.status(200).json(responses.success(200, 'Data successfully retrieved', 'LR'));
    } else {
      return res.status(200).json(responses.success(200, 'Data successfully retrieved', number));
    }
  }
}


export default testController;
