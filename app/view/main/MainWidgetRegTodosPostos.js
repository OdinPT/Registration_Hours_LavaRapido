Ext.define('ConLogin.view.main.MainWidgetRegTodosPostos', {

    requires: [
        'ConLogin.store.Admin.TotalRegistoHoras',
        'ConLogin.view.main.Admin.RetornaListTodosContadores',
        'ConLogin.view.main.Admin.RegTodosPostos_Grid_RegLogin_logout'
    ],

    extend: 'Ext.tab.Panel',
    xtype: 'mainMenuTodosPostos',

    border: false,
    bodyBorder: false,
    frame: false,

    activeTab: 1,

    items: [
        {
            title:'Total de Entradas e Saidas  e Logins efetuados',
            flex: 25,
            scrollable:true,
            margin: '0 5 0 0',
            items: [{
                xtype: 'JuncaoRTPgridLogin_Logout'
            }]
        },
        {
            title:'Registos dos Contadores',
            scroll:true,

            margin: '5 5 5 0',
            maxHeight: 900,
            items: [{
                xtype: 'mainRetornRegTodosPostosDia'
            }]
        },{
            title: 'Registos horários de Funcionários',
            scroll:true,
            margin: '5 5 5 0',
            items: [{
                xtype:'mainTotallistHoras'
            }]
        },


     ]
});