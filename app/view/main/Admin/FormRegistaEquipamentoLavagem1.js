Ext.define('ConLogin.view.main.Admin.FormRegistaEquipamentoLavagem1', {
    extend: 'Ext.form.Panel',
    xtype: 'registaEquiLav1',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Admin.TiposEquipamento'
    ],

    id: 'formregistaEquiLav1',
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
            fieldLabel: 'Tipo de Equipamento: ',

            store: {
                type: 'TipoEquipamentox'

            },

            valueField: 'ID',
            displayField: 'Tipo',
            typeAhead: true,
            emptyText: 'Selecione um Tipo de Equipamento...',
            id: 'TipoEquipamentoxS',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione o local'
        },{

            xtype: 'textfield',
            fieldLabel: 'Limite diário',
            id: 'LimMax',
            name: 'LimMax',
            emptyText : 'Insira o limite diário',
            allowBlank: true,
            blankText: 'Campo obrigatório'

        }
    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar Equipamento e limite diário à Lavagem',
                glyph: 43,

                formBind: true,
                listeners: {
                    click: 'onClickRegistaEquipamentoLavagem1'
                }

            }
        ]
    }
});
