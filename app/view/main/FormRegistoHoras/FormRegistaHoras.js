Ext.define('ConLogin.view.main.FormRegistoHoras.FormRegistaHoras', {
    extend: 'Ext.form.Panel',
    xtype: 'registahoras',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Registo_Horas.LocalFuncionarios'
    ],

    id: 'formregistahoras',

    //height: 100,

    layout: {
        type: 'form',
        align: 'fit'
    },

    items: [
        {
            xtype: 'combobox',
            fieldLabel: 'Local ',

            store: {
                type: 'Local_Func'

            },

            queryMode: 'remote',

            valueField: 'ID_Local',
            displayField: 'Descricao_Local',
            typeAhead: true,

            emptyText: 'Seleciona  departamento...',
            id: 'ID_Local',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione um departamento'

        }
    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar entrada',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistarEntrada'
                }

            }
        ]
    }
});
