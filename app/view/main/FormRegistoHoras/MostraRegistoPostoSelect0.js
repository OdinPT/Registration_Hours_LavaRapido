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
            id: 'ID_Pistaz',
            hidden:true,
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Local:',
            id: 'Localz',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Tipo Equipamento :',
            id: 'TipoEquiz',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Contagem :',
            id: 'ContagemPPz'
        },{
            xtype: 'textfield',
            fieldLabel: 'Data :',
            id: 'DataPPz',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'username :',
            id: 'utilizadorz',
            readOnly: true

        },{
            hidden:false,
            xtype: 'textfield',
            fieldLabel: 'Numero do equipamento',
            id: 'NumEquiz',
            name: 'NumEquiz',
            readOnly: true
        }],

    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Insere Contagem',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickInsereContdiarioRA'
                }
            }]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('RegPostoSelect');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var a = Ext.getCmp('ID_Pistaz').setValue(record.data.ID_PPista);
                    var b = Ext.getCmp('ContagemPPz').setValue(record.data.ContagemPP);
                    var c = Ext.getCmp('DataPPz').setValue(record.data.DataPP);
                    var f = Ext.getCmp('utilizadorz').setValue(record.data.utilizador);

                    var d = Ext.getCmp('Localz').setValue(record.data.Local);
                    var e = Ext.getCmp('NumEquiz').setValue(record.data.NumEqui);
                    var f = Ext.getCmp('TipoEquiz').setValue(record.data.TipoEqui);
                }
            });
        }
    }

});
