module.exports = {
    mesmethode: function (req, res) {
        // return res.view('homepage');
        return res.json({user: 'toto'});
    },

    //find: function (req, res) {
        //res.json({user: 'toto'});

    //}

    find: function(req,res){
        var where = {street:'test'};
        Address.find(where).exec(function(err, records){
            return res.json(records);
        });
    }





};