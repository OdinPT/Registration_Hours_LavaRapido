Ext.define('ConLogin.view.main.Admin.RegLocalSelect', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.layout.container.HBox'
    ],

    xtype:'GestaoLocalSelectAdmin',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [
        {
            flex: 1,
            width: 500,
            height: 400,

            items: [{
                xtype: 'MostraLocalSelect'
            }]
        },
        {
            title: 'Equipamentos da Lavagem',
            flex: 1,
            margin: '0 0 0 0',
            autoScroll: true,
            width:400,
            height: 400,

            items: [{
                xtype: 'mainlistEquiLavSelect'
            }]
        }
    ]
});