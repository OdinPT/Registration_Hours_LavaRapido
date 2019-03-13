Ext.onReady
Ext.define('ConLogin.view.main.Admin.MostraRegistoPostoSelect2', {
    extend: 'Ext.form.Panel',

    xtype: 'fieldMostraRegPostoSelect2',
    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Registo_Horas.RegistosTodosPostoSelect'
    ],

    id: 'staticPageForm',

    width:580,
    height: 260,

    layout: {
            type: 'form',
            align: 'stretch'
            },

    defaults: {
        layout: 'form',
        margin: 0
    },

    store: {
        type: 'RegPostoSelect'
    },

    items: [
         {
            xtype: 'textfield',
            fieldLabel: 'ID:',
            id: 'ID_Pistaz',
            hidden:true,
            readOnly: true
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Tipo de Equipamento: ',

            store: {
                type: 'Multiuso'
            },

            valueField: 'ID_registo',
            displayField: 'Descrisao',
            typeAhead: true,
            emptyText: 'Selecione o Equipamento...',
            id: 'Tipo_Equipamentoz',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione o equipamento'
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
            emptyText: 'Seleciona  departamento...',
            id: 'Localz',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione um departamento'

        },

        {
            xtype: 'textfield',
            fieldLabel: 'Contagem :',
            id: 'Contagemz'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Data :',
            id: 'Dataz',
            readOnly: true
        },
        {
            xtype: 'textfield',
            fieldLabel: 'username :',
            id: 'usernamez',
            readOnly: true,
            visile:false
        },
        {
            hidden:true,
            xtype: 'textfield',
            fieldLabel: '   ',
            id: 'Tipo_validacao19',
            name: 'Tipo_validacao19'
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
                    click: 'onClickEditaContdiario'
                }
            },
            {
                text: 'ApagarRegisto',
                glyph: 43,
                formBind: true,
                listeners: {
                   // click: 'onClickApagaPP'
                }
            }


        ]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('RegPostoSelect');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var a = Ext.getCmp('ID_Pistaz').setValue(record.data.ID_Pista);
                    var b = Ext.getCmp('Tipo_Equipamentoz').setValue(record.data.Tipo_Equipamento);
                    var c = Ext.getCmp('Contagemz').setValue(record.data.Contagem);
                    var f = Ext.getCmp('Localz').setValue(record.data.Local);

                    var d = Ext.getCmp('Dataz').setValue(record.data.Data);
                    var e = Ext.getCmp('usernamez').setValue(record.data.username);
                }
            });
        }
    }

});
