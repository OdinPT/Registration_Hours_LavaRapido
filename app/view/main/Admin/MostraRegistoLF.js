Ext.onReady
Ext.define('ConLogin.view.main.Admin.MostraRegistoLF', {
    extend: 'Ext.form.Panel',
    xtype: 'MostraRegLF',

    controller: 'adminController',

    requires: [
        'ConLogin.store.Admin.FuncLocais',
        'ConLogin.view.main.Admin.AdministracaoController'

    ],

    id: 'staticPageForm',
    frame: true,

    width: 730,
    height: 160,
    border: false,
    bodyBorder: false,

    layout: {
            type: 'form',
            align: 'stretch'
        },

    store: {
        type: 'RegFuncPostosseleccionado'
    },

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Nome do utilizador:',
            id: 'usernameez',
            readOnly: true
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Local: ',
            store: {
                type: 'Loc'
            },
            valueField: 'ID_Localx',
            displayField: 'Descricao_Local',
            typeAhead: true,
            emptyText: 'Selecione a empresa...',
            id: 'Locaissz',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione a que empresa pretence o Local'
        },
        {
            hidden:true,
            xtype: 'textfield',
            fieldLabel: '   ',
            id: 'Tipo_validacao15',
            name: 'Tipo_validacao15'
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
                    click: 'onClickEditaLocalFuncionario'
                }
            },
            {
                text: 'Apagar Registo',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaLF'
                }
            }


        ]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('RegFuncPostosseleccionado');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var a = Ext.getCmp('usernameez').setValue(record.data.usernamee);
                    var b = Ext.getCmp('Locaissz').setValue(record.data.Locaiss);
                }
            });
        }
    }

});
