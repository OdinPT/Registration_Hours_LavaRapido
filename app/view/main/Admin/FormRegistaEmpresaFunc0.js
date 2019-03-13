Ext.define('ConLogin.view.main.Admin.FormRegistaEmpresaFunc0', {
    extend: 'Ext.form.Panel',
    xtype: 'registaEmpFunc0',

    controller: 'adminController',
    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Admin.Empresas'
    ],

    id: 'formregistaEmp_Func0',
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
            fieldLabel: 'Empresa',

            store: {
                type: 'Empresas'

            },

            queryMode: 'remote',

            valueField: 'ID_empresa',
            displayField: 'Nome_empresa',
            typeAhead: true,
            emptyText: 'Selecione a empresa...',
            id: 'ID_empresax2',
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
                text: 'Concluir',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistaEmpresaFunc0'
                }

            }

        ]
    }
});
