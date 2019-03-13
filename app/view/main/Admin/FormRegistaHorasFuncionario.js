
    Ext.define('ConLogin.view.main.Admin.FormRegistaHorasFuncionario', {
    extend: 'Ext.form.Panel',
    xtype: 'RegistaHorasdoFuncionario',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Admin.Func',
        'ConLogin.store.Registo_Horas.TipoRegisto'
    ],

    id: 'formRegistaHorasFunc',
    frame: false,
    width: 700,
    height: 220,
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
            fieldLabel: 'Funcionário:  ',

            store: {
                type: 'Func'
            },

            valueField: 'ID_funcionariox',
            displayField: 'username',
            typeAhead: true,
            emptyText: 'Seleciona um funcionário...',
            id: 'ID_funcionariox',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione o funcionário'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Local:  ',

            store: {
                type: 'Locais'
            },

            valueField: 'ID_Local',
            displayField: 'NomeLocal',
            typeAhead: true,
            emptyText: 'Seleciona o posto do funcionário...',

            id: 'ID_Localx',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione o posto do funcionário'
        },{
            xtype: 'textfield',

            fieldLabel: 'Hora a registar: ',
            id: 'Horasx',
            allowBlank: false,
            blankText: 'Insira a hora',
            emptyText: 'Insira a hora de entrada do funcionário'
        },{
            xtype: 'combobox',
            fieldLabel: 'Tipo de registo:  ',

            store: {
                type: 'TipoReg'
            },

            valueField: 'ID_tipo_reg',
            displayField: 'Descricao_tipo_reg',
            typeAhead: true,
            emptyText: 'Seleciona Tipo de registo...',
            id: 'ID_tipo_regx',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione Tipo de registo'
        }
    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistaHorasFuncionario'
                }

            }
        ]
    }
});
