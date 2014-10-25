module.exports = {
    collapse: function(obj) {
        // TODO: implement this function
        // return @obj: {@str: value}
        var _len = obj.length,
            _i = 0,
            d = {};

        for (_i; _i < _len; _i++) {
            if (typeof obj[_i]['value'] === 'object') {
                d[obj[_i]['tag']] = collapse(obj[_i]['value']);
            } else {
                d[obj[_i]['tag']] = obj[_i]['value'];
            }
        }

        return d;
    }
}
