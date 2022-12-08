/* eslint-disable camelcase */
const messages = {
    signIn: {
      success: 'Successfully Signed In',
      notfound: 'User Cannot be found',
      error: 'Could not sign in user try again',
      invalid: 'Invalid Credentials',
      unverified: 'Email not verified, check your mail to verify'
    },
    transactions: {
      success: 'Successfully fetched',
      notfound: 'Transaction not found',
      error: 'Could not fetch transaction, try again',
      invalid: 'Invalid request',
    }
  };
    
  const status = {
    success: 200,
    error: 500,
    notfound: 404,
    unauthorized: 401,
    conflict: 409,
    created: 201,
    bad: 400,
    nocontent: 204,
    unprocessable: 422,
  };
    
  const forgeResponse = (res, statusCode, status, message, data = null, token = null) => {
    const response = {
      statusCode,
      status,
      message
    };
    
    if (data) response.data = data;
    if (data && token) response.token = token;
    
    return res.status(statusCode).json(response);
  };
    
  const successResponse = (res, statusCode, status, 
    message, userData, token) => forgeResponse(res, statusCode, status, message, userData, token);
    
  const errorResponse = (res, statusCode, status, message) => forgeResponse(res, statusCode, status, message);
    
  const conflictResponse = (res, statusCode, status, message) => forgeResponse(res, statusCode, status, message);
    
  export {
    status,
    successResponse,
    errorResponse,
    messages,
    conflictResponse,
  };