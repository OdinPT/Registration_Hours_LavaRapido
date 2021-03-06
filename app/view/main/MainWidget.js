Ext.define('ConLogin.view.main.MainWidget', {

    requires: [
        'ConLogin.view.main.MainWidget2',
        'ConLogin.view.main.MainWidget3',
        'ConLogin.view.main.Admin.TotalListHoras',
        'ConLogin.view.main.Admin.AdminTolerancias',
        'ConLogin.view.main.Admin.AdminTotalES',
        'ConLogin.view.main.Admin.GridBackups'
    ],

    extend: 'Ext.tab.Panel',
    xtype: 'mainwidgetAdmin',

    border: false,
    bodyBorder: false,
    frame: false,

    activeTab: 1,
    title: 'Administração',

    items: [
        {
            title: 'Total de Entradas e Saidas dos locais',
            scroll:true,
            margin: '5 0 0 0',
            items: [{
                xtype:'TotalES'
            }]
        },{
            title: 'Gestão',
            scroll:true,
            margin: '5 5 5 0',
            items: [{
                xtype:'SubMenu1Gestao'
            }]
        },{
            title: 'Resumo de associações existentes',
            scroll:true,
            margin: '5 5 5 0',
            items: [{
                xtype: 'SubMenu2Assoc'
            }]

        }, {
            title: 'Backups',
            scroll:true,
            margin: '5 0 0 0',
            items: [{
                xtype: 'mainBackups'
            }]
        }
     ]
});