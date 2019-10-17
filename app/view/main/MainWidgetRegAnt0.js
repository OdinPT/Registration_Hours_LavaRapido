Ext.define('ConLogin.view.main.MainWidgetRegAnt0', {
    extend: 'Ext.panel.Panel',

    requires: [

    ],

    xtype:  'MainWidgetRegAnt0',

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch',

    },

    border: false,
    bodyBorder: false,
    frame: false,


    items: [{
            scroll:true,
            margin: '5 5 0 0',
            height:300,
            items: [{
                xtype: 'mainlistHoras'
            }]
        },{
            title: 'Contagens de equipamentos do Postos dos dias anteriores',
            scroll:true,
            margin: '5 5 5 0',
            height:300,
            items: [{
                xtype: 'mainlistTodosRegPosto'
            }]
        }],

});