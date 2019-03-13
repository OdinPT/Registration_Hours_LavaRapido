Ext.define('ConLogin.view.main.Admin.GestãoLimContPosto', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.panel.Header',
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.GridLimConPosto',
        'ConLogin.view.main.Admin.FormRegistaLimEquiLav'

    ],

    xtype:'GestaoLimContPosto',

    collapsed: false,

    layout: {
        type: 'hbox',

        //multi: true,
        pack: 'start',
        align: 'stretch',
        width: 1500,
        height: 300

    },

    defaults: {
        border: false,
        bodyBorder: false,
        frame: false
    },

    items: [
        {
            title: 'Registo Lim dos contadores por  ao posto',
            flex: 1,
            margin: '0 5 0 0',
            height: 350,
            width:400,
            collapsed: false,

            items: [{
                xtype: 'registaLimEquiLav'
            }]
        },
        {
            title: 'Lista Limites dos contadores por  Lavagem',
            flex: 1,
            margin: '0 0 0 0',
            collapsed: false,

            height: 650,
            //width:600,
            autoScroll: true,
            items: [{
                xtype: 'mainGridLimconPosto'
            }]
        }
    ]
});