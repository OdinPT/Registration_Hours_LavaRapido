
Ext.define('ConLogin.view.main.Admin.FormRegistaTipoEqui', {
    extend: 'Ext.form.Panel',
    xtype: 'RegistaTipoEqui',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'formRegistaTipoEqui',

    frame: false,
    //width: 700,
    //height: 220,
    border: false,


    layout: {
        type: 'form',
        align: 'fit'
    },
    defaults: {
        layout: 'form',
        margin: 0,
        border: 'false'
    },

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Novo Tipo de Equipamento:  ',

            id: 'TipoEqui',
            emptyText: 'campo vazio',

            submitValue:true,
            allowBlank: false,
            typeAhead: true,
            blankText: 'campo vazio'
        }

    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistaTipoEquipamento'
                }

            }
        ]
    }
});
