Ext.onReady
Ext.define('ConLogin.view.main.Admin.JuncaoRegLogContadorDiaAnt0', {
    extend: 'Ext.form.Panel',

    xtype: 'JuncaoRegLogContadorDiaAnt0',

    requires: [
        'ConLogin.view.main.FormRegistoHoras.MostraRegistoPostoSelect0',
        'ConLogin.view.main.FormRegistoHoras.CarregaGridContagemAnt'
        ],

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch',

    },

    defaults: {
        border: false,
        bodyBorder: false,
        frame: false,
        scrollable:true,
        width:930,
        height: 330
    },


    items: [
        {
            flex: 1,
            margin: '0 5 0 0',
            width:415,
            items: [{
                xtype: 'MostraRegistoPostoSelect0'
            }]
        },
        {
            title: 'Contagens anteriores deste Posto',
            collapsible:true,
            collapsed:false,
            collapseDirection: "right",
            flex: 1,
            margin: '0 0 0 0',
            width:360,
            autoScroll: true,
            items: [{
                xtype: 'mainGridContagemAnt'
            }]
        }
    ]
});
