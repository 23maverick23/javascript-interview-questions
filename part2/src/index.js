module.exports = {

    wordCounts: function(s) {
        // TODO: implement this function
        // returns @obj: {data: [{@str: @int},]}
        var ws = s.split(" "),
            _len = ws.length,
            _re = /[\s\.\?\,\-\!]/gi,  // ignore " ".,-?!
            _i = 0,
            d = {},
            l = [];

        for (_i; _i < _len; _i++) {
            var p = {},
                w = ws[_i].replace(_re, "");
            p[w] = w.length;
            l.push(p);
        }

        return d['data'] = l;
    }
}
