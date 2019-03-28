Ext.onReady
Ext.define('ConLogin.view.main.FormRegistoHoras.MostraRegistoPostoSelect0', {
    extend: 'Ext.form.Panel',

    xtype: 'MostraRegistoPostoSelect0',
    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Registo_Horas.RegistosTodosPostoSelect',


        'ConLogin.store.Registo_Horas.Multiuso',
        'ConLogin.store.Registo_Horas.LocalFuncionarios'
    ],

    id: 'staticPageForm',

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
            id: 'ID_Pistazzz1',
            hidden:true,
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Local:',
            id: 'Localzzz1',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Tipo Equipamento :',
            id: 'TipoEquizzz1',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Contagem :',
            id: 'ContagemPPzzz1'
        },{
            xtype: 'textfield',
            fieldLabel: 'Data :',
            id: 'DataPPzzz1',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'username :',
            id: 'utilizadorzzz1',
            readOnly: true

        },{
            hidden:false,
            xtype: 'textfield',
            fieldLabel: 'Numero do equipamento',
            id: 'NumEquizzz1',
            name: 'NumEquiz',
            readOnly: true
        }],

    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'registar Contagem (se já existir contagem faz update da contagem) ',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickInsereContdiarioRA'
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
                    var a = Ext.getCmp('ID_Pistazzz1').setValue(record.data.ID_PPista);
                    var b = Ext.getCmp('ContagemPPzzz1').setValue(record.data.ContagemPP);
                    var c = Ext.getCmp('DataPPzzz1').setValue(record.data.DataPP);
                    var f = Ext.getCmp('utilizadorzzz1').setValue(record.data.utilizador);

                    var d = Ext.getCmp('Localzzz1').setValue(record.data.Local);
                    var e = Ext.getCmp('NumEquizzz1').setValue(record.data.NumEqui);
                    var f = Ext.getCmp('TipoEquizzz1').setValue(record.data.TipoEqui);
                }
            });
        }
    }

});
