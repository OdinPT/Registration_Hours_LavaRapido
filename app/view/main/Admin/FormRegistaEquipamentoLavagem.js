Ext.define('ConLogin.view.main.Admin.FormRegistaEquipamentoLavagem', {
    extend: 'Ext.form.Panel',
    xtype: 'registaEquiLav',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Admin.TiposEquipamento'
    ],

    id: 'formregistaEquiLav',
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
            fieldLabel: 'Local: ',
            store: {
                type: 'Loc'
            },
            valueField: 'ID_Localx',
            displayField: 'Descricao_Local',
            typeAhead: true,
            emptyText: 'Selecione um Local...',
            id: 'IDLocal',
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
            id: 'TipoEquipamento',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione o local'
        },{

            xtype: 'textfield',
            fieldLabel: 'Numero do equipamento',
            id: 'NumEqui',
            name: 'NumEqui',
            emptyText : 'Insira o Tipo Equipamento',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        }
    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar Equipamento na Lavagem',
                glyph: 43,

                formBind: true,
                listeners: {
                    click: 'onClickRegistaEquipamentoLavagem'
                }

            }

        ]
    }
});
