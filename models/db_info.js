module.exports = (function () {
  return {
      local: {
          host: 'localhost',
          port: '3306',
          user: 'root',
          password: 'root',
          database: 'postboardUser'
      },
      real: {
          host: '',
          port: '',
          user: '',
          password: '',
          database: ''
      },
      staging: {
          host: '',
          port: '',
          user: '',
          password: '',
          database: ''
      },
      dev: {
          host: '',
          port: '',
          user: '',
          password: '',
          database: ''
      }
  }
})();