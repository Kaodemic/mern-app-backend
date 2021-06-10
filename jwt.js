module.exports.jwt = {
  JWT_TOKEN_SECRET:  process.env.JWT_TOKEN_SECRET,
  JWT_CONFIG: {
    expiresIn: '1 day', // this is fixed from login expired redis 86400
    issuer: 'One',
    audience: 'ims-dashboard',
  }
}
