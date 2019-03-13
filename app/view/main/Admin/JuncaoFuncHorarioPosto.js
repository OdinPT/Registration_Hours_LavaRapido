Ext.define('ConLogin.view.main.Admin.JuncaoFormFuncHorario', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.layout.container.HBox'

    ],

    xtype:'JuncaoFH',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    defaults: {
        border:true,
        autoScroll: true
    },


    items: [{
            width: 1100,
            items: [{
                xtype: 'MostrafuncSelect'
            }]
        },
        {
            title: 'Horário do funcionário',
            margin: '0 0 0 0',
            collapsible:true,
            width: 290,
            height:300,

            collapseDirection: "right",
            items: [{
                xtype: 'mainHorarioFunc'
            }]
        }
    ]
});