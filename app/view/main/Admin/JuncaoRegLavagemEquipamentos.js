Ext.onReady
Ext.define('ConLogin.view.main.Admin.JuncaoRegLavagemEquipamentos', {
    extend: 'Ext.form.Panel',
    xtype: 'JuncaoRegEquipamentosLavagem',

    defaults:{
        scrollable:true
    },

    title:'Selecione mês a pesquisar',
    padding:2,

        items:[
            {xtype: 'mainlistEquiLav'}

        ]

});
