Ext.define('ConLogin.view.main.MainWidget3', {

    requires: [
        'ConLogin.view.main.Admin.FuncPostos',
        'ConLogin.view.main.Admin.EmpresaFuncPrincipal',
        'ConLogin.view.main.Admin.FormRegistaLocalFunc',
        'ConLogin.view.main.Admin.GridsAssociacaoEquiPostoLimPosto'
    ],

    extend: 'Ext.tab.Panel',
    xtype: 'SubMenu2Assoc',

    border: false,
    bodyBorder: false,
    frame: false,

    tabBar: {

        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },


    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    defaults: {
        border: false,
        bodyBorder: false,
        frame: false,
        scroll:true
    },

    activeTab: 0,
    items: [
        {
            title: 'Associação Funcionários  a Postos e a empresas',
            padding:true,
            items: [{
                xtype: 'GridsAssociacaoFuncPostosEmpresas'
            }]
        },
        {
            title: 'Associação Equipamentos a Postos  e Limites diários a postos',
            padding:true,
            items: [{
                xtype: 'GridsAssociacaoEquiPostoLimPosto'
            }]

        }
        ]
});