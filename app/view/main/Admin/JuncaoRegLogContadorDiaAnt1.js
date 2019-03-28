Ext.onReady
Ext.define('ConLogin.view.main.Admin.JuncaoRegLogContadorDiaAnt1', {
    extend: 'Ext.form.Panel',

    xtype: 'JuncaoRegLogContadorDiaAnt1',

    requires: [
        'ConLogin.view.main.FormRegistoHoras.MostraRegistoPostoSelect',
        'ConLogin.view.main.FormRegistoHoras.CarregaGridContagemAnt2',
        'ConLogin.view.main.FormRegistoHoras.MostraRegistoPostoSelect'
        ],

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
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
                xtype: 'fieldMostraRegPostoSelect'
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
                xtype: 'mainGridContagemAnt2'
            }]
        }
    ]
});