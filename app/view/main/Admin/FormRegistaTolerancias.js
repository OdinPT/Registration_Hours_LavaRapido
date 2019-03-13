Ext.define('ConLogin.view.main.Admin.FormRegistaTolerancias.', {
    extend: 'Ext.form.Panel',
    xtype: 'registaTolerancia',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'formregistaTol',
    frame: false,

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
            fieldLabel: 'Tempo de tolerancia',
            id: 'temptolerancia',
            name: 'Tempo',
            emptyText : 'hh:mm:ss',
            allowBlank: false,
            blankText: 'Campo obrigatório'
        }
    ],

    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar Tolerância',
                glyph: 43,

                formBind: true,
                listeners: {
                    click: 'onClickRegistaTolerancia'
                }

            }

        ]
    }
});
