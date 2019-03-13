Ext.define('ConLogin.view.main.Admin.FormRegistaFunc', {
    extend: 'Ext.form.Panel',
    xtype: 'registaFuncionarios',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Admin.Tolerancias'
    ],

    id: 'formregistafunc',


    frame: false,
    height: 390,
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
            xtype: 'textfield',
            fieldLabel: 'Nome de Utilizador',
            id: 'username',
            name: 'username',
            emptyText : 'Insira o Nome de Utilizador',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        },
        {
            xtype: 'textfield',
            fieldLabel: 'Palavra Passe',
            inputType:'Password',
            id: 'pass',
            name: 'pass',
            emptyText : 'Insira a Password',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        },
        {

            xtype: 'textfield',
            fieldLabel: 'NIFF',
            id: 'niff',
            name: 'niff',
            emptyText : 'Insira o NIFF ',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        },
        {
            xtype: 'combobox',
            fieldLabel: 'Tipo de funcionário ',

            store: {
                type: 'Tipos_Func'

            },

            queryMode: 'remote',

            valueField: 'TF',
            displayField: 'Descricao_TipoFunc',
            typeAhead: true,
            emptyText: 'Selecione Tipo Funcionário...',
            id: 'TF',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione o Tipo de Funcionário'

        },
        {
            xtype: 'textfield',
            fieldLabel: 'Contacto Pré-definido ',
            id: 'Contact',
            name: 'Contact',
            emptyText : 'Insira o Contacto do Utilizador',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        },
        {
            xtype: 'combobox',
            fieldLabel: 'Tolerância ',

            store: {
                type: 'Tolerancias'

            },

            queryMode: 'remote',

            valueField: 'ID_Tolerancia',
            displayField: 'Hora_Tolerancia',
            typeAhead: true,
            emptyText: 'Selecione Tipo Funcionário...',
            id: 'ID_Tolerancia',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione o Tipo de Funcionário'

        },
        {
            fieldLabel: 'Permitir login :',
            xtype: 'checkbox',

            name: 'system',
            inputValue: '0',
            id:'LG',

            listeners: {
                check: function (checkbox, isChecked) {
                    var sample = Ext.getCmp('LG');
                }
            }
        },
        {
            fieldLabel: 'O Utilizador pode validar o  Computador?',
            xtype: 'checkbox',

            name: 'system',
            inputValue: '0',
            id:'CoockieFunc',

            listeners: {
                check: function (checkbox, isChecked) {
                    var sample = Ext.getCmp('CoockieFunc');
                }
            }
        }
    ],

    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar Utilizador',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistaFuncionario'
                }
            }
        ]
    }
});
