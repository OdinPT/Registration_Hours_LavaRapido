Ext.define('ConLogin.view.main.Admin.EmpresaFuncPrincipal', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.FormRegistaEmpresaFunc',
        'ConLogin.view.main.Admin.ListEmpresaFuncionario'
    ],

    xtype:'GestaoEmpresaFuncPrincipal',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch',
        width: 200,
        height:400

    },

    defaults: {
        border: false,
        bodyBorder: false,
        frame: false
    },

    items: [
        {
            title: 'Associar Funcionários a empresas',
            flex: 1,
            margin: '0 5 0 0',
            //height: 350,
            //width:400,
            items: [{
                xtype: 'registaEmpFunc'

            }]
        },
        {
            title: 'Associação de funcionários as empresas',
            flex: 1,
            margin: '0 0 0 0',
            //height:500,
            //width:600,
            autoScroll: true,
            items: [{
                xtype:'mainlistEmpresaFunc'
            }]
        }
    ]
});