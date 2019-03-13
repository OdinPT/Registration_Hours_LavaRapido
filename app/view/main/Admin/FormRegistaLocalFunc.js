Ext.define('ConLogin.view.main.Admin.FormRegistaLocalFunc', {
    extend: 'Ext.form.Panel',
    xtype: 'registaLocalFuncionarios',

    controller: 'adminController',

    requires: [
        'ConLogin.store.Admin.Func',
        'ConLogin.store.Admin.Loc',
        'ConLogin.store.Admin.GestaoFuncionarios',
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'formregistaLocalfunc',
    frame: false,

    border: false,

    layout: {
        type: 'form',
        align: 'fit'
    },

    defaults: {
        layout: 'form',
        margin: 0

    },

    items: [
        {
            xtype: 'combobox',
            fieldLabel: 'Local: ',

            store: {
                type: 'Loc'

            },

            valueField: 'ID_Localx',
            displayField: 'Descricao_Local',
            typeAhead: true,
            emptyText: 'Selecione um Local...',
            id: 'ID_Localx',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione a que empresa pretence o Local'
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
                    click: 'onClickRegistaLocalFuncionario'
                }

            }

        ]
    }
});
