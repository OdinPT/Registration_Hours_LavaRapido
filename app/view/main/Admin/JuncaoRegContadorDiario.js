Ext.onReady
Ext.define('ConLogin.view.main.Admin.JuncaoRegContadorDiario', {
    extend: 'Ext.form.Panel',
    xtype: 'JuncaoRegContadorDiario',

    defaults:{
        scrollable:true
    },
    padding:2,

        items:[
            {xtype: 'fieldMostraRegContadoresDia'}
        ]

});
