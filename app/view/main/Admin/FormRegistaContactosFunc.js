Ext.define('ConLogin.view.main.Admin.FormRegistaContactosFunc', {
    extend: 'Ext.form.Panel',
    xtype: 'registaContactosFunc',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Admin.TipoContacto'
    ],

    id: 'formregistaContactosFuncxx1',
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
            xtype: 'combobox',
            fieldLabel: 'Tipo de Contacto ',

            store: {
                type: 'TipoContact'

            },

            queryMode: 'remote',

            valueField: 'ID',

            displayField: 'TipoContacto',

            typeAhead: true,
            emptyText: 'Selecione Tipo Funcionário...',
            id: 'TipoContacto',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione o Tipo de Funcionário'

        },

        {

            xtype: 'textfield',
            fieldLabel: 'Contacto: ',
            id: 'Descricao',
            name: 'Descricao',
            emptyText : 'Insira o Contacto',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        }
    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar Contacto',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistaContactoFunc'
                }

            }

        ]
    }
});
