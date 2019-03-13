Ext.onReady
Ext.define('ConLogin.view.main.Admin.JuncaoRegContadorSearch2', {
    extend: 'Ext.form.Panel',
    xtype: 'JuncaoSearchContMesAnt',

    defaults:{
        scrollable:true
    },

    title:'Selecione mês a pesquisar',
    padding:2,

        items:[
            {xtype: 'SelectSelectListMesAnt'},
            {xtype: 'mainlistSearchRequestmes'}

        ]

});
