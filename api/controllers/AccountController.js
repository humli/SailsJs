module.exports = {
    index: function (req, res) {
        var data = {
            name: 'test',
            address: 'address',
            un_obj: {
                un_truc: 'test1',
                un_machin: 'test2'
            },
            un_tab: ['un', 'deux'],
            tabjs: [
                {
                    champs1: 'nope',
                    champs2: 'nope'
                },
                {
                    champs1: 'nope',
                    champs2: 'ok !'
                }
            ]
        };
        Address.find().exec(function (err, records) {
            //return res.json(records);
            var data = {};
            data.lesaddresses = records,
            data.name = 'test',
            data.address ='address',
            data.un_obj = {
                un_truc: 'test1',
                un_machin: 'test2'
            },
            data.tabjs = [
                {
                    champs1: 'nope',
                    champs2: 'nope'
                },
                {
                    champs1: 'nope',
                    champs2: 'ok !'
                }
            ],
                data.un_tab = ['un', 'deux'];
            return res.view('account', data);

        });
    }
}