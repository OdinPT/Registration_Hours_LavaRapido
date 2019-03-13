Ext.define('ConLogin.view.main.Admin.FormRegistaEmpresaFunc', {
    extend: 'Ext.form.Panel',
    xtype: 'registaEmpFunc',

    controller: 'adminController',
    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',

        'ConLogin.store.Admin.Empresas'
    ],

    id: 'formregistaEmp_Func',
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
            fieldLabel: 'Funcionário: ',

            store: {
                type: 'FuncionariosFu'

            },

            queryMode: 'remote',

            valueField: 'ID_funcionario',
            displayField: 'username',
            typeAhead: true,
            emptyText: 'Selecione a empresa...',
            id: 'ID_funcionario',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione a que empresa pretence o Local'
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
            id: 'IDEmpresa',
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
                text: 'Associar Funcionário a uma empresa',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistaEmpresaFunc'
                }

            }

        ]
    }
});
