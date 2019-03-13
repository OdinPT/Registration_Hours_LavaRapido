Ext.onReady
Ext.define('ConLogin.view.main.FormRegistoHoras.MostraRegistoContagemDia', {
    extend: 'Ext.form.Panel',
    xtype: 'fieldMostraRegContadoresDia',
    id: 'staticPageForm',
    controller: 'adminController',

    width:800,
    height: 270,
    //height: 360,

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Registo_Horas.RegistosTodosPostoSelectDiario'
    ],
    layout: {
        type: 'form',
        align: 'stretch'
    },

    defaults: {
        layout: 'form',
        margin: 0
    },


    store: {
        type: 'RegPostoSelectdiario'
    },

    items: [
         {
            xtype: 'textfield',
            fieldLabel: 'ID:',
            id: 'ID_Request',
            hidden:false,
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Tipo de Equipamento:',
            id: 'ID_Tipo_Req',
            hidden:false,
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Local:',
            id: 'ID_Local_Req',
            hidden:false,
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Contagem :',
            id: 'Contagem_Req'
        },{
            xtype: 'textfield',
            fieldLabel: 'Número do Equipamento :',
            id: 'Num_Equip',
            readOnly: true,
            visile:false
        }
    ],

    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Inserir Contagem',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickRegistaContagemDiaria'
                }
            }
        ]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('RegPostoSelectdiario');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var a = Ext.getCmp('ID_Request').setValue(record.data.ID_Request);
                    var b = Ext.getCmp('ID_Tipo_Req').setValue(record.data.ID_Tipo_Req);
                    var c = Ext.getCmp('ID_Local_Req').setValue(record.data.ID_Local_Req);
                    var e = Ext.getCmp('Contagem_Req').setValue(record.data.Contagem_Req);
                    var f = Ext.getCmp('Num_Equip').setValue(record.data.Num_Equip);
                }
            });
        }
    }

});
