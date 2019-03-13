Ext.define('ConLogin.view.main.Admin.AdminPrincipal2', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.FormRegistaFunc',
        'ConLogin.view.main.Admin.ListFuncionario'
    ],

    xtype:'GestaoFuncionariosPrincipal2',

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
            title: 'Registo de Funcionários',
            flex: 1,
            margin: '0 5 0 0',
            items: [{
                xtype: 'registaFuncionarios'
            }]
        },
        {
            title: 'Lista de Funcionários',
            flex: 1,
            //margin: '0 0 0 0',
            autoScroll: true,

            items: [{
                xtype: 'mainlistFunc'

            }]
        }

    ]
});