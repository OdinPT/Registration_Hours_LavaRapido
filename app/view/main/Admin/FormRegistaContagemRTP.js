Ext.define('ConLogin.view.main.Admin.FormRegistaContagemRTP', {
    extend: 'Ext.form.Panel',
    xtype: 'registaContagemRTP',
    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Admin.CarregaGridEquiLavSelect'
    ],

    id: 'formregContagemRDP',


    frame: false,
    margin: 10,


    store: {
        type: 'RegEquilavselect'
    },

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Id  :',
            id: 'ID_EquiLavzz2',
            hidden:true
        },{
            xtype: 'textfield',
            fieldLabel: 'Local :',
            id: 'Localzz2',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Tipo de Equipamento :',
            id: 'TipoEquipamentozz2',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Contagem:',
            id: 'Contagemzz2'
        },{
            xtype: 'datefield',
            //anchor: '100%',
            fieldLabel: 'Data',
            name: 'to_date',
            id: 'datazz2',
            value: new Date()
        },{
            xtype: 'textfield',
            fieldLabel: 'Número do Equipamento :',
            id: 'Num_EquiLavzz2',
            readOnly: true
        },{
            fieldLabel: 'Sobrepor ao limite diário :',
            xtype: 'checkbox',

            name: 'system',
            inputValue: '0',
            id:'OverrideLim',

            listeners: {
                check: function (checkbox, isChecked) {
                    var sample = Ext.getCmp('OverrideLim');
                }
            }
        }

    ],

    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Registar ',
                glyph: 43,

                formBind: true,
                listeners: {
                    click: 'onClickRegistaContRTP'
                }
            }
        ]
    },

    listeners: {
        afterrender: function () {

            var store = Ext.getStore('RegEquilavselect');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var a = Ext.getCmp('ID_EquiLavzz2').setValue(record.data.ID_EquiLav);
                    var b = Ext.getCmp('Localzz2').setValue(record.data.Local);
                    var c = Ext.getCmp('TipoEquipamentozz2').setValue(record.data.TipoEquipamento);
                    var e = Ext.getCmp('Contagemzz2').setValue(record.data.Contagem);
                    var f = Ext.getCmp('Num_EquiLavzz2').setValue(record.data.Num_EquiLav);
                }
            });
        }
    }
});
