Ext.define('ConLogin.view.main.Admin.AdminTotalES', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.MostraMaxES_dia',
        'ConLogin.view.main.Admin.MostraMaxEntradaseSaidasLocais'
        //'ConLogin.view.main.Admin.ListFuncionario'
    ],

    xtype:'TotalES',

    height:500,
    weight:300,
    layout: {
        type: 'vbox',
        align : 'stretch',
        pack  : 'start'
    },

    defaults:{
        scrollable:true,
        closable:false,
        collapsible:true
    },

    items: [
        {
            title:'Total de Entradas e Saidas do dia',
            flex: 25,
            margin: '0 5 0 0',

            items: [{
                    xtype: 'mostra_ES_Dia'
            }]
        },
        {
            title:'Total de funcionários que iniciaram sessão hoje: ',
            flex: 25,
            margin: '0 5 0 0',
            items: [{
                xtype: 'TotalRegPostosDia'
            }]
        }

    ]
});