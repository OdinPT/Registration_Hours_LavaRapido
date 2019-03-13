Ext.define('ConLogin.view.main.MainWidgetRegTodosPostos', {

    requires: [
        'ConLogin.store.Admin.TotalRegistoHoras',
        'ConLogin.view.main.Admin.RetornaListTodosContadores'
    ],

    extend: 'Ext.tab.Panel',
    xtype: 'mainMenuTodosPostos',

    //title:'Registo de Todos os postos',

    border: false,
    bodyBorder: false,
    frame: false,
    activeTab: 1,

    items: [
        {
            title:'Total de Entradas e Saidas ',
            flex: 25,
            margin: '0 5 0 0',
            items: [{
                xtype: 'mainMaxEnteSaidas'
            }]
        },
        {
            title:'Registos dos Contadores',
            scroll:true,
            margin: '5 5 5 0',
            items: [{
                xtype: 'mainRetornRegTodosPostosDia'
            }]
        },{
            title: 'Registos horários de Todos os Postos',
            scroll:true,
            margin: '5 5 5 0',
            items: [{
                xtype:'mainTotallistHoras'
            }]
        }

     ]
});