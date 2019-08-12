Ext.onReady
Ext.define('ConLogin.view.main.FormRegistoHoras.ContagensPrincipal', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.store.Admin.TipoContacto',
        //'ConLogin.store.Registo_Horas.GridRegistosPosto',
        //'ConLogin.view.main.Admin.FormRegistaContagem',
        'ConLogin.store.Admin.CarregaWinContagem'
    ],

    xtype: 'ContagensPrincipal',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },


    items: [
        {
            flex: 1,
            margin: '10 5 0 0',
            autoScroll: true,
            items: [{
                xtype: 'mainContagemLavagem'
            }]
        }

    ]
});