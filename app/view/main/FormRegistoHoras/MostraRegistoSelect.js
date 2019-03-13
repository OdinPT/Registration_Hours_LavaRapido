Ext.onReady
Ext.define('ConLogin.view.main.FormRegistoHoras.MostraRegistoSelect', {
    extend: 'Ext.form.Panel',
    xtype: 'fieldMostraRegSelect',

    controller: 'adminController',

    requires: [
        'ConLogin.store.Registo_Horas.RegistoHorasSelecionadas',
        'ConLogin.store.Registo_Horas.RegistoHorasDia',
        'ConLogin.store.Registo_Horas.RegistoHoras',
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'staticPageForm',
    //frame: true,

    title:' Contéudo Principal',

    width:780,
    height: 310,

    layout: {
            type: 'form',
            align: 'stretch'
            },

    defaults: {
        layout: 'form',
        margin: 0
    },

    store: {
        type: 'Regseleccionado'
    },

    items: [
         {
            xtype: 'textfield',
            fieldLabel: 'ID:',
            id: 'ID_Reg_horas',
            hidden:true,
            readOnly: true
        }, {
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
        ,{
            xtype: 'textfield',
            fieldLabel: 'Nome do utilizador:',
            id: 'usernamee',
            readOnly: true
    },

        {
            xtype: 'textfield',
            fieldLabel: 'Data e hora :',
            submitFormat: 'YYYY-mm-dd H:i',

            //submitFormat: 'Y-m-d H:i',
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
            id: 'Descricao_Locall',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione um Local',
            emptyText: 'Insira um Local'

        },
        {
            xtype: 'textfield',
            fieldLabel: 'ID_Local  :',
            readOnly:true,
            hidden:true,
            id: 'ID_Local_rh'

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
                    click: 'onClickEditaReg'
                }
            },
            {
                text: 'Colocar registo Oculto',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickMudaEstadoReg'
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
                    var d = Ext.getCmp('Descricao_Locall').setValue(record.data.Descricao_Local);
                    var e = Ext.getCmp('Descricao_tipo_regg').setValue(record.data.Descricao_tipo_reg);
                    var f = Ext.getCmp('ID_Local_rh').setValue(record.data.ID_Local_rh);
                }
            });
        }
    }

});
