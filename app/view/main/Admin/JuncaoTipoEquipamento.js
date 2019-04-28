Ext.define('ConLogin.view.main.Admin.JuncaoTipoEquipamento', {
    extend: 'Ext.form.Panel',
    xtype: 'JuncaoTipoEquipamento',

    requires: [
        'ConLogin.view.main.Admin.GridTiposEquipamento',
        'ConLogin.view.main.Admin.FormRegistaTipoEqui'
    ],

    defaults:{
        scrollable:true,
        collapsed: false
    },

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [
        {
            title: 'Registo de Equipamentos',
            flex: 1,
            margin: '0 5 0 0',
            collapsed: false,

            items: [{
                xtype: 'RegistaTipoEqui'
            }]
        },{
            title: 'Lista de Tipos de Equipamento',
            flex: 1,
            margin: '0 0 0 0',
            collapsed: false,
            autoScroll: true,
            items: [{
                xtype: 'GridTiposEquipamento'
            }]
        }
    ]
});