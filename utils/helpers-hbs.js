const keys = require('../keys/index');

module.exports = {
    ifeq(a, b, options) {
        if(a.toString() === b.toString()) {
          return options.fn(this);
        }
        return options.inverse(this)
    },
    ifAdmin(a, options) {
        if(keys.ADMIN_ID.indexOf(a.toString()) >= 0) {
            return options.fn(this);
        }
        return options.inverse(this)
    }
}