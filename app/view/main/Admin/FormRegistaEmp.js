Ext.define('ConLogin.view.main.Admin.FormRegistaEmp', {
    extend: 'Ext.form.Panel',
    xtype: 'registaEmpresa',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'formregistaemp',
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
            fieldLabel: 'Nome da Empresa',
            id: 'nomeEmpresa',
            name: 'nomeEmpresa',
            emptyText : 'Insira o nome da Empresa',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        },
        {

            xtype: 'textfield',
            fieldLabel: 'NIFF',
            id: 'NiffEmpresa',
            name: 'NiffEmpresa',
            emptyText : 'Insira o NIFF',
            allowBlank: false,

            blankText: 'Campo obrigatório'

        }

    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar empresa',
                glyph: 43,

                formBind: true,
                listeners: {
                    click: 'onClickRegistaEmpresa'
                }

            }

        ]
    }
});
