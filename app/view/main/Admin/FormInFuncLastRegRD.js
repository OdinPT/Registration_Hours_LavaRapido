Ext.define('ConLogin.view.main.Admin.FormInFuncLastRegRD', {
    extend: 'Ext.form.Panel',

    xtype: 'formInLastRegRD',

    requires: [
        'ConLogin.store.Admin.CarregaInLastRegFuncRD'
    ],

    id: 'formInFuncLastregRD',

    border: false,
    bodyBorder: false,
    frame: false,

    layout: {
        type: 'form',
        align: 'stretch',
        height: 240
    },

    store: {
        type: 'CarregaInLastRegFuncRD'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Ultimo registo:',
        id: 'Hora1',
        readOnly: true
    },{
        xtype: 'textfield',
        fieldLabel: 'Data:',
        id: 'DataRegisto1',
        readOnly: true
    },{
        xtype: 'textfield',
        fieldLabel: 'Tipo de registo:',
        id: 'TipoReg1',
        readOnly: true
    },{
        xtype: 'textfield',
        fieldLabel: 'Local:',
        id: 'Local1',
        readOnly: true
    }
    ],

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('CarregaInLastRegFuncRD');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var b = Ext.getCmp('Hora1').setValue(record.data.Hora);
                    var c = Ext.getCmp('DataRegisto1').setValue(record.data.DataRegisto);
                    var d = Ext.getCmp('Local1').setValue(record.data.Local);
                    var e = Ext.getCmp('TipoReg1').setValue(record.data.TipoReg);

                }
            });
        }
    }
});
