Ext.define('ConLogin.view.main.FormRegistoHoras.RegistoContMultiLocal.SelectLocalFuncCont', {
    extend: 'Ext.form.Panel',
    xtype: 'regContagemXLocal',

    controller: 'adminController',
    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Registo_Horas.LocalFuncionarios'
    ],

    id: 'formSelectXLocal',

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
            emptyText: 'Seleciona  o local a efetuar contagem...',
            id: 'ID_Localz1',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione um Local'

        }
    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Concluir Pesquisa ',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickSendIDLocalSelect'
                }

            }

        ]
    }
});
