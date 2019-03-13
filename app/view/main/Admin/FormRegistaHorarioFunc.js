Ext.define('ConLogin.view.main.Admin.FormRegistaHorarioFunc', {
    extend: 'Ext.form.Panel',
    xtype: 'registaHorarioFunc',

    controller: 'adminController',

    requires: [
        //'ConLogin.view.main.Admin.FormRegistaLocal',
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'formregistaHorarioFunc',
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
            fieldLabel: 'Tipo Registo :',
            store: {
                type: 'TipoReg'
            },
            valueField: 'ID_tipo_reg',
            displayField: 'Descricao_tipo_reg',

            typeAhead: true,
            emptyText: 'Seleciona  Tipo de Registo ...',

            id: 'TipoRegistoRegHoras',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione um Tipo de Registo'

        },
        {

            xtype: 'textfield',
            fieldLabel: 'Hora:',
            id: 'HoraFunc',
            emptyText : 'Insira o Código Postal',
            allowBlank: false,
            blankText: 'Campo obrigatório'

        }

    ],
    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar Horário',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistaHorarioFunc'
                }

            }

        ]
    }
});
