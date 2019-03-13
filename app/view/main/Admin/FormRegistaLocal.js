Ext.define('ConLogin.view.main.Admin.FormRegistaLocal', {
    extend: 'Ext.form.Panel',
    xtype: 'registaLocal',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.FormRegistaLocal',
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'formregistaLocal',
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
            fieldLabel: 'Nome da Local',
            id: 'Local',
            name: 'Local',
            emptyText : 'Insira o nome do Local',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        },
        {

            xtype: 'textfield',
            fieldLabel: 'Código Postal',
            id: 'CPostal',
            name: 'CPostal',
            emptyText : 'Insira o Código Postal',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        },
        {
            xtype: 'combobox',
            fieldLabel: 'Empresa',

            store: {
                type: 'Empresas'

            },

            queryMode: 'remote',

            valueField: 'ID_empresa',
            displayField: 'Nome_empresa',
            typeAhead: true,
            emptyText: 'Selecione a empresa...',
            id: 'ID_empresa',
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
                text: 'Registar Local',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistaLocal'
                }

            }

        ]
    }
});
