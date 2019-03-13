Ext.define('ConLogin.view.main.Admin.FormRegistaLimEquiLav', {
    extend: 'Ext.form.Panel',
    xtype: 'registaLimEquiLav',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Admin.TiposEquipamento',
        'ConLogin.store.Admin.Loc'
    ],

    id: 'formregistaContactosFunc',
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
            fieldLabel: 'Limite Máximo diário :',
            id: 'LimMaxEquiLav',
            name: 'LimMaxEquiLav',
            emptyText : 'Insira o Limite máximo diário',
            allowBlank: false,
            blankText: 'Campo obrigatório'
        },{

            xtype: 'combobox',
            fieldLabel: 'Local: ',
            store: {
                type: 'Loc'
            },
            valueField: 'ID_Localx',
            displayField: 'Descricao_Local',
            typeAhead: true,
            emptyText: 'Selecione um Local...',
            id: 'IDLocalReglimEqui',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione o local'

        },{
            xtype: 'combobox',
            fieldLabel: 'Tipo de Equipamento: ',
            store: {
                type: 'TipoEquipamentox'

            },
            valueField: 'ID',
            displayField: 'Tipo',
            typeAhead: true,
            emptyText: 'Selecione um Tipo de Equipamento...',
            id: 'TipoEquipamentoRegLimEqui',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione o local'
        }
    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar Limite do Equipamento por Lavagem ',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistaLimEquiLav'
                }

            }

        ]
    }
});
