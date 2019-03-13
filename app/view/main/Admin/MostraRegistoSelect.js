Ext.onReady
Ext.define('ConLogin.view.main.Admin.MostraRegistoSelect', {
    extend: 'Ext.form.Panel',
    xtype: 'MostraRegSelect',

    controller: 'adminController',

    requires: [
        'ConLogin.store.Registo_Horas.RegistoHorasSelecionadas',
        'ConLogin.store.Registo_Horas.RegistoHoras',

        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    title:'Conteúdo Principal',

    id: 'staticPageForm',
    frame: true,

    width: 780,
    height: 310,

    layout: {
            type: 'form',
            align: 'stretch'
        },

    store: {
        type: 'Regseleccionado'
    },

    items: [
        {
        xtype: 'textfield',
        fieldLabel: 'ID:',
        id: 'ID_Reg_horas',
         hidden:false,
        readOnly: true
    },
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

            id: 'Descricao_tipo_regg',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione um Tipo de Registo'

        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nome do utilizador:',
            id: 'usernamee',
            readOnly: true
        },

        {
            xtype: 'textfield',
            fieldLabel: 'Data e hora :',
            submitFormat: 'YYYY-mm-dd H:i',
            submitValue : true,
            id: 'Hora_entradaManha_rhh',
            emptyText: 'Insira a data no Seguinte Formato: Ano/mês/dia HH:min ',
            blankText: 'Insira uma Data e hora'
    },

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
            emptyText: 'Selecione o Local ...',
            id: 'Descricao_Localll',

            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione um Local',
            emptyText: 'Insira um Local'

        },
        {
            xtype: 'textfield',
            fieldLabel: 'Visível à lavagem',
            id: 'Descrisao',
            readOnly: true
        },
        {
            // Opção de seleção da Edição pretendida
            hidden:true,
            xtype: 'textfield',
            id: 'Tipo_validacao16',
            name: 'Tipo_validacao16'
        }

    ],

    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Concluir Edição',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickEditaRegRTP'
                }
            },
            {
                text: 'Mudar Estado do Registo',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickMudaEstadoReg'
                }
            },
           {
                text: 'Apagar Registo',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaReg'
                }
            }


        ]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('Regseleccionado');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var a = Ext.getCmp('ID_Reg_horas').setValue(record.data.ID_Reg_horas);
                    var b = Ext.getCmp('usernamee').setValue(record.data.username);
                    var c = Ext.getCmp('Hora_entradaManha_rhh').setValue(record.data.Hora_entradaManha_rh);
                    var d = Ext.getCmp('Descricao_Localll').setValue(record.data.Descricao_Local);
                    var e = Ext.getCmp('Descricao_tipo_regg').setValue(record.data.Descricao_tipo_reg);
                    var f = Ext.getCmp('Descrisao').setValue(record.data.Descrisao);

                }
            });
        }
    }

});
