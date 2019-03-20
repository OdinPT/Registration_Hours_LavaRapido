Ext.onReady
Ext.define('ConLogin.view.main.Admin.MostraLocalSelect', {
    extend: 'Ext.form.Panel',
    xtype: 'MostraLocalSelect',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.ListLocais',
        'ConLogin.store.Admin.LocalSelecionado',
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Admin.LocalSelecionado',
        'ConLogin.view.main.Admin.FormRegistaEquipamentoLavagem1'
    ],

    id: 'staticPageForm',
    frame: false,

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
            fieldLabel: 'Nome do Local',
            id: 'NomeLocal',
           emptyText: 'Insira o nome do Local',
           blankText: 'Insira o nome do Local'

        },
        {
            xtype: 'textfield',
            fieldLabel: 'Código Postal: ',
            submitValue : true,

            id: 'CodigoPostal',
            emptyText: 'Insira um Código Postal',
            blankText: 'Insira um Código Postal'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nome da Empresa :',
            readOnly: true,
            hidden:false,
            id: 'Nome_empresa'

        },
        {
            hidden:true,
            xtype: 'textfield',
            fieldLabel: '   ',
            id: 'Tipo_validacao14',
            name: 'Tipo_validacao14'
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
                    click: 'onClickEditaLocal'
                }
            }, {
                text: 'Apagar Registo',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaLocal'
                }
            },{
                text: 'Registar Equipamentos à Lavagem',
                glyph: 43,
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Registar Equipamento à lavagem',
                            modal: true,
                            width: 700,
                            height: 240,

                            items: {
                                xtype: 'registaEquiLav1'
                            }
                        });
                        myWin.show();
                    }
                }
            }]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('Reglocseleccionado');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var b = Ext.getCmp('NomeLocal').setValue(record.data.NomeLocal);
                    var c = Ext.getCmp('CodigoPostal').setValue(record.data.CodigoPostal);
                    var d = Ext.getCmp('Nome_empresa').setValue(record.data.Nome_empresa);
                }
            });
        }
    }

});
