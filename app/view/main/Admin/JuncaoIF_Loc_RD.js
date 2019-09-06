Ext.onReady
Ext.define('ConLogin.view.main.Admin.JuncaoIF_Loc_RD', {
    extend: 'Ext.form.Panel',

    xtype: 'JuncaoRegInflocRD',

    requires: [
        'ConLogin.store.Admin.CarregaINLocaisRD',
        'ConLogin.view.main.Admin.FormInFunRd'
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
        width:930,
        height: 250
    },

    items:[{
            xtype: 'formInFuncRD'
        },{
            xtype: 'GridINlocaisRD'
        }]

});
