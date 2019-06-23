Ext.onReady
Ext.define('ConLogin.view.main.FormRegistoHoras.MostraRegistoPostoSelect', {
    extend: 'Ext.form.Panel',

    xtype: 'fieldMostraRegPostoSelect',
    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Registo_Horas.RegistosTodosPostoSelect1',

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
        type: 'RegPostoSelect1'
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
            readOnly: true,
            hidden:true
        },{
            hidden:false,
            xtype: 'textfield',
            fieldLabel: 'Equipamento',
            id: 'Desc_EquiLav',
            name: 'Desc_EquiLav',
            readOnly:true
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
            hidden:true,
            xtype: 'textfield',
            fieldLabel: 'Numero do equipamento',
            id: 'NumEquiz',
            name: 'NumEquiz'
        },{
            hidden:true,
            xtype: 'textfield',
            id: 'Tipo_validacao20',
            name: 'Tipo_validacao20'
        }],

    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Concluir Edição',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickEditaContdiario2'
                }
            },
            {
                text: 'Apagar Registo',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaContadorPP'
                }
            }


        ]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('RegPostoSelect1');
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
                    var g = Ext.getCmp('Desc_EquiLav').setValue(record.data.Desc_EquiLav);
                }
            });
        }
    }

});
