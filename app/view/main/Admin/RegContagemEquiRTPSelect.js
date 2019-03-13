Ext.define('ConLogin.view.main.Admin.RegContagemEquiRTPSelect', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.GridContAntRTP'
    ],

    xtype:'GestaoContRDP',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch',
        width: 500,
        height: 300

    },

    defaults: {
        border: false,
        bodyBorder: false,
        frame: false
    },


    items: [
        {
            title: 'Registar Contagem',
            flex: 1,
            margin: '0 5 0 0',
            items: [{
                xtype: 'registaContagemRTP'
            }]
        },
        {
            title: 'Registos anteriores deste Equipamento',
            flex: 1,
            margin: '0 0 0 0',
            autoScroll: true,
            items: [{
                xtype: 'GridContAntRTP'
            }]
        }
    ]
});