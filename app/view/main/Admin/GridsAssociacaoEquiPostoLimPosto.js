Ext.define('ConLogin.view.main.Admin.GridsAssociacaoEquiPostoLimPosto', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.GridEquipamentosLavagem'
    ],

    xtype:'GridsAssociacaoEquiPostoLimPosto',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch',
        height: 300,
        width: 1300

    },

    defaults: {
        border: false,
        bodyBorder: false,
        frame: false

    },

    items: [
        {
            title: 'Associação de funcionários as empresas',

            flex: 1,
            margin: '0 5 0 5',
            autoScroll: true,
            items: [{
                xtype: 'mainGridEquipamentosLavagem'
            }]
        }

    ]
});