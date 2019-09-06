Ext.onReady
Ext.define('ConLogin.view.main.RegDiario.JuncaoRegDiario', {
    extend: 'Ext.form.Panel',

    xtype: 'juncaoRegDiario',

    requires: [
        //'ConLogin.view.main.FormRegistoHoras.MostraRegistoPostoSelect0',
        //'ConLogin.view.main.FormRegistoHoras.CarregaGridContagemAnt'
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
        scrollable:true
    },

    items: [
        {
            title: 'Registo do dia',
            flex: 5,
            items: [{
                xtype:  'RegHorasprincipal'

            }]
        }
    ]
});
