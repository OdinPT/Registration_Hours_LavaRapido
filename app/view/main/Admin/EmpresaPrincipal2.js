Ext.define('ConLogin.view.main.Admin.EmpresaPrincipal2', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.panel.Header',
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.FormRegistaEmp',
        'ConLogin.view.main.Admin.ListEmpresas'

    ],

    xtype:'GestaoEmpresasPrincipal2',

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
            title: 'Registo de Empresas',
            flex: 1,
            margin: '0 5 0 0',
            height: 350,
            width:400,
            collapsed: false,

            items: [{
                xtype: 'registaEmpresa'

            }]
        },
        {
            title: 'Lista de empresas',
            flex: 1,
            margin: '0 0 0 0',
            collapsed: false,

            height: 350,
            width:600,
            autoScroll: true,
            items: [{
                xtype: 'mainlistempresas'
            }]
        }
    ]
});