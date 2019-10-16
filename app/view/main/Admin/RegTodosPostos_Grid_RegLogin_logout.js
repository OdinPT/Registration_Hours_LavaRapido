Ext.onReady
Ext.define('ConLogin.view.main.Admin.RegTodosPostos_Grid_RegLogin_logout', {
    extend: 'Ext.form.Panel',
    xtype: 'JuncaoRTPgridLogin_Logout',

    requires: [
        'ConLogin.view.main.Admin.MostraMaxEntradaseSaidasLocais',
        'ConLogin.view.main.Admin.GridLoginLogout'
        ],

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },


    items:[{
        margin: '0 5 0 0',
        height: 300,
        items: [{
            xtype: 'mainMaxEnteSaidas'
        }]
    },{
        title: 'Logins e logouts',
        scroll:true,
        margin: '5 5 5 0',
        height: 500,
        items: [{
            xtype: 'GridLGout'
        }]
    }
    ]
});
