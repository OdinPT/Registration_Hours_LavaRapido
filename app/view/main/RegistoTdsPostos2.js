Ext.define('ConLogin.view.main.Admin.RegistoTdsPostos2', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.RetornaListTodosContadores',
        'ConLogin.view.main.Form.FormSelect'
    ],

    xtype:'TDSP2',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    //height: 540,
    tbar: {
        defaultButtonUI: 'default',

        items: [

            {
                text: 'Opções de Pesquisa',
                glyph: 43,
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Opções de Pesquisa',
                            modal: true,
                            width: 900,
                            height: 480,
                            items: {
                                xtype: 'JuncaoRegContadorSearch'
                            }
                        });
                        myWin.show();
                    }
                }
            }

        ]
    },

    items: [
        {
            title: 'Registo Todos Contadores',
            flex: 1,
            margin: '0 5 0 0',
            autoScroll: true,
            collapsible:false,

            items: [{
               xtype: 'mainRetornRegTodosPostosDia'
            }]
        }
    ]
});