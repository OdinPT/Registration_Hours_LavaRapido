Ext.define('ConLogin.view.main.Admin.LocaisPrincipal2', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.FormRegistaLocal',
        'ConLogin.view.main.Admin.ListLocais'

    ],

    xtype:'GestaoLocaisPrincipal2',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch',
        width: 1300,
        height: 300

    },

    defaults: {
        border: false,
        bodyBorder: false,
        frame: false
    },


    items: [
        {
            title: 'Registo de Postos',
            flex: 1,
            margin: '0 5 0 0',
            height: 350,
            width:600,
            items: [{

                xtype: 'registaLocal'
            }]
        },
        {
            title: 'Lista de Postos',
            flex: 1,
            margin: '0 0 0 0',
            border:false,

            autoScroll: true,
            items: [{
                xtype: 'mainlistlocais'
            }]
        }
    ]
});