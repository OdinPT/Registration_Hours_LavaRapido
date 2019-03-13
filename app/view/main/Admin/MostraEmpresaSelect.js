Ext.onReady
Ext.define('ConLogin.view.main.Admin.MostraEmpresaSelect', {
    extend: 'Ext.form.Panel',
    xtype: 'MostraEmpresaSelect',

    controller: 'adminController',

    requires: [

        'ConLogin.view.main.Admin.ListEmpresas',
        'ConLogin.store.Admin.EmpresaSelecionada',
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'staticPageForm',
    frame: true,

    width: 430,
    height: 180,

    layout: {
            type: 'form',
            align: 'stretch'
        },

    store: {
        type: 'Regempseleccionado'
    },

    items: [

        {
            xtype: 'textfield',
            fieldLabel: 'Nome Empresa: ',
            submitValue : true,
            id: 'Nome_empresa',
            emptyText: 'Insira um Código Postal',
            blankText: 'Insira um Código Postal'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'NIFF da Empresa :',
            id: 'Niff_empresa'

        },{
            hidden:true,
            xtype: 'textfield',
            fieldLabel: ' ',
            id: 'Tipo_validacao17',
            name: 'Tipo_validacao17'
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
                    click: 'onClickEditaEmpresa'
                }
            },
           {
                text: 'Apagar Registo',
                glyph: 43,
                formBind: true,
                listeners: {
                   click: 'onClickApagaEmpresa'
                }
            }]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('Regempseleccionado');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var a = Ext.getCmp('Nome_empresa').setValue(record.data.Nome_empresa);
                    var b = Ext.getCmp('Niff_empresa').setValue(record.data.Niff_empresa);
                }
            });
        }
    }

});
