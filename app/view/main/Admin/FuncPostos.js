Ext.define('ConLogin.view.main.Admin.FuncPostos', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.FormRegistaFunc',
        'ConLogin.view.main.Admin.ListFuncionario'
    ],

    xtype:'LocalFuncPrincipal',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch',
        scroll:true

    },

    config: {

        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    defaults: {
        border: false,
        bodyBorder: false,
        frame: false
    },

    items: [
        {
           // title: 'Associar Funcionários aos postos',
            flex: 1,
            margin: '0 5 0 0',
            width:400,
            height: 150,
            items: [{
                xtype: 'registaLocalFuncionarios'
            }]
        },
        {
          //  title: 'Funcionários aos Postos',
            flex: 1,
            margin: '0 0 0 0',
            autoScroll: true,
            height: 350,
            width:600,
            items: [{
                xtype: 'mainlisFuncPostos'
            }]
        }
    ]


});