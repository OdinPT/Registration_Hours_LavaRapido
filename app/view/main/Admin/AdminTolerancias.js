Ext.define('ConLogin.view.main.Admin.AdminTolerancias', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.FormRegistaTolerancias',
        'ConLogin.view.main.Admin.ListTolerancias'
        //'ConLogin.view.main.Admin.ListFuncionario'
    ],

    xtype:'GestaoTolerancias',

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
            title: 'Registo de Tolerâncias',
            flex: 1,
            margin: '5 5 0 0',
            items: [{
                xtype: 'registaTolerancia'
            }]
        },
        {
            title: 'Lista de Tolerâncias',
            flex: 1,
            margin: '5 0 0 0',
            autoScroll: true,

            items: [{
                xtype: 'mainlistTolerancias'

            }]
        }

    ]
});