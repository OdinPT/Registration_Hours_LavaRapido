Ext.define('ConLogin.view.main.Admin.FormAlteralPasswordRD', {
    extend: 'Ext.form.Panel',
    xtype: 'AlteraSenha',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'formAlteraPasswordRD',
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
            fieldLabel: 'Senha Atual',
            id: 'Senhatual',
            inputType:'Password',
            //name: '',
            emptyText : 'Insira a senha atual',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        },
        {

            xtype: 'textfield',
            fieldLabel: 'Nova senha ',
            id: 'NovaSenha',
            inputType:'Password',
            //name: 'CPostal',
            emptyText : 'Insira a nova Senha',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        },
        {

            xtype: 'textfield',
            fieldLabel: 'Nova senha ',
            id: 'NovaSenha1',
            inputType:'Password',
            //name: 'CPostal',
            emptyText : 'Insira a nova Senha',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        }

    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Concluir',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickNovaSenhaRD'
                }

            }

        ]
    }
});
