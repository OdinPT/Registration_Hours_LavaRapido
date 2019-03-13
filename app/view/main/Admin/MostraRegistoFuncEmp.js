Ext.onReady
Ext.define('ConLogin.view.main.Admin.MostraRegistoFuncEmp', {
    extend: 'Ext.form.Panel',
    xtype: 'MostraRegFuncEmp',

    controller: 'adminController',

    requires: [
        'ConLogin.store.Admin.CarregaFuncEmpSelec',
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'staticPageForm',
    frame: true,

    width: 730,
    height: 280,

    layout: {
            type: 'form',
            align: 'stretch'
        },

    store: {
        type: 'RegFuncEmpSelect'
    },

    items: [
     {
        xtype: 'textfield',
        fieldLabel: 'ID:',
        id: 'ID_ef',
         hidden:false,
        readOnly: true
    },{
            xtype: 'textfield',
            fieldLabel: 'Nome do utilizador:',
            id: 'usernamee2',
            readOnly: false
    }, {

            xtype: 'combobox',
            fieldLabel: 'Empresa',

            store: {
                type: 'Empresas'

            },

            queryMode: 'remote',
            valueField: 'ID_empresa',
            displayField: 'Nome_empresa',
            typeAhead: true,
            emptyText: 'Selecione a empresa...',
            id: 'IDEmpresa3',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione a que empresa pretence o Local'
        },
        {
            hidden:true,
            xtype: 'textfield',
            fieldLabel: '1 ou 2',
            id: 'Tipo_validacao11',
            name: 'Tipo_validacao11'
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
                    click: 'onClickEditaReEF'
                }
            },
            {
                text: 'Apagar Registo',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaEF'
                }
            }


        ]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('RegFuncEmpSelect');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var a = Ext.getCmp('ID_ef').setValue(record.data.ID_ef);
                    var b = Ext.getCmp('usernamee2').setValue(record.data.username);
                    var c = Ext.getCmp('IDEmpresa3').setValue(record.data.Nome_Empresa);

                }
            });
        }
    }

});
