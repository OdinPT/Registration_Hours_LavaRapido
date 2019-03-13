Ext.onReady
Ext.define('ConLogin.view.main.Admin.JuncaoRegContadorSearch', {
    extend: 'Ext.form.Panel',
    xtype: 'JuncaoRegContadorSearch',

    requires: [
        'ConLogin.view.main.Form.FormSelect',
        'ConLogin.store.Admin.RetornaRequesPesquisa',
        'ConLogin.view.main.Admin.logRequestPesquisa'
    ],

    defaults:{
        scrollable:true
    },

        items:[
            {xtype: 'SelectSelectCont'},
            {xtype: 'mainlistSearchRequest2Dates'}

        ]

});
