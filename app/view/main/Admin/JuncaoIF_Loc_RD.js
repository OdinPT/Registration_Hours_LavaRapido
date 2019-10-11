Ext.onReady
Ext.define('ConLogin.view.main.Admin.JuncaoIF_Loc_RD', {
    extend: 'Ext.form.Panel',

    xtype: 'JuncaoRegInflocRD',

    requires: [
        'ConLogin.store.Admin.CarregaINLocaisRD',
        'ConLogin.view.main.Admin.FormInFunRd',
        'ConLogin.view.main.Admin.FormInFuncLastRegRD'
        ],

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'

    },

    defaults: {
        border: false,
        bodyBorder: false,
        frame: false,
        scrollable:true,
        //height: 200
    },

    items:[{
            xtype: 'formInFuncRD'
        },{
            xtype: 'formInLastRegRD'
        },{
           xtype: 'GridINlocaisRD'
        }
    ]
});
