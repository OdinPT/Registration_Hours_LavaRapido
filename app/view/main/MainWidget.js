Ext.define('ConLogin.view.main.MainWidget', {

    requires: [
        'ConLogin.view.main.MainWidget2',
        'ConLogin.view.main.MainWidget3',
        'ConLogin.view.main.Admin.TotalListHoras',
        'ConLogin.view.main.Admin.AdminTolerancias',
        'ConLogin.view.main.Admin.AdminTotalES',

        'ConLogin.view.main.Admin.WindowBackupDB'
    ],

    extend: 'Ext.tab.Panel',
    xtype: 'mainwidgetAdmin',

    border: false,
    bodyBorder: false,
    frame: false,

    activeTab: 0,
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
            title: 'associações já existentes',
            scroll:true,
            margin: '5 5 5 0',
            items: [{
                xtype: 'SubMenu2Assoc'
            }]

        }, {
            title: 'Tolerâncias',
            scroll:true,
            margin: '5 0 0 0',
            items: [{
                xtype:'GestaoTolerancias'
            }]
        }
     ],

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Efectuar Backup BD',

                glyph: 43,
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Efectuar Backup BD',
                            modal: true,
                            width: 1100,
                            height: 420,

                            items: {
                                xtype: 'WindowBackupBD',
                            }
                        });
                        myWin.show();
                    }
                }
            },
        ]
    }

});