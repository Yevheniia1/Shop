const keys = require('../keys/index');

module.exports = {
    ifeq(a, b, options) {
        if(a.toString() === b.toString()) {
          return options.fn(this);
        }
        return options.inverse(this)
    },

    ifAdmin(a, options) {
        try {
            if(a !== null && keys.ADMIN_ID.includes(a.toString())) {
                return options.fn(this);
            }
    
            return options.inverse(this)
        } catch(err) {
            console.log(err)
        }
        
    },

    cover(imgs, name, option) {
        return `<img src="/images/${imgs[0]}" alt="${name}" class="materialboxed product__image"></img>`
        
    },
}