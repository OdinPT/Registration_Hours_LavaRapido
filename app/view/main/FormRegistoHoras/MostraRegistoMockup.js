Ext.define('ConLogin.view.main.FormRegistoHoras.MostraRegistoMockup', {
    extend: 'Ext.form.Panel',
    xtype: 'fieldMostraRegmockup',

    requires: [
        'ConLogin.store.Registo_Horas.RegistoHorasSelecionadas'
    ],

    id: 'staticPageForm',

    border: false,
    bodyBorder: false,
    frame: false,

    width: 530,
    height: 190,

    layout: {
            type: 'form',
            align: 'stretch'
        },


    store: {
        type: 'Regseleccionado'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'ID:',
        id: 'xID_Reg_horas',
        readOnly: true,
        hidden:true
    },{
        xtype: 'textfield',
        fieldLabel: 'Tipo de Registo:',
        id: 'xDescricao_tipo_regg',
        readOnly: true
    },{
            xtype: 'textfield',
            fieldLabel: 'Nome do utilizador:',
            id: 'xusernamee',
            readOnly: true
    },{
            xtype: 'textfield',
            fieldLabel: 'Hora:',
            id: 'xHora_entradaManha_rhh',
            readOnly: true
    },{
            xtype: 'textfield',
            fieldLabel: 'Local:',
            id: 'xDescricao_Locall',
            readOnly: true
    }],

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('Regseleccionado');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var a = Ext.getCmp('xID_Reg_horas').setValue(record.data.ID_Reg_horas);
                    var b = Ext.getCmp('xusernamee').setValue(record.data.username);
                    var c = Ext.getCmp('xHora_entradaManha_rhh').setValue(record.data.Hora_entradaManha_rh);
                    var d = Ext.getCmp('xDescricao_Locall').setValue(record.data.Descricao_Local);
                    var e = Ext.getCmp('xDescricao_tipo_regg').setValue(record.data.Descricao_tipo_reg);
                }
            });
        }
    }

});
