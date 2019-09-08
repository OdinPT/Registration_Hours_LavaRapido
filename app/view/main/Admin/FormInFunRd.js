Ext.define('ConLogin.view.main.Admin.FormInFunRd', {
    extend: 'Ext.form.Panel',

    xtype: 'formInFuncRD',

    requires: [
        'ConLogin.store.Admin.CarregaInFuncRD',
        'ConLogin.view.main.Admin.FormAlteralPasswordRD'
    ],

    id: 'staticPageFormx001',

    border: false,
    bodyBorder: false,
    frame: false,
    layout: {
        type: 'form',
        align: 'stretch'
    },

    store: {
        type: 'CarregaInFuncRD'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Nome :',
        id: 'usernamee',
        readOnly: true
    },{
        xtype: 'textfield',
        fieldLabel: 'Hora do ultimo Registo:',
        id: 'Horaa',
        readOnly: true
    },{
        xtype: 'textfield',
        fieldLabel: 'Data Ultimo registo:',
        id: 'DataRegistoo',
        readOnly: true
    },{
        xtype: 'textfield',
        fieldLabel: 'Tipo Registo',
        id: 'TipoRegg',
        readOnly: true
    }],


    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Alterar senha ',
                glyph: 43,
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Alterar Senha',
                            modal: true,
                            width: 400,
                            height: 250,
                            items: {
                                xtype: 'AlteraSenha'
                            }
                        });
                        myWin.show();
                    }
                }
            }
        ]
    },



    listeners: {
        afterrender: function () {
            var store = Ext.getStore('CarregaInFuncRD');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    //var a = Ext.getCmp('ID_tipofuncc').setValue(record.data.ID_tipofunc);
                    var b = Ext.getCmp('usernamee').setValue(record.data.username);
                    var c = Ext.getCmp('Horaa').setValue(record.data.Hora);
                    var d = Ext.getCmp('DataRegistoo').setValue(record.data.DataRegisto);
                    //var e = Ext.getCmp('Locall').setValue(record.data.Local);
                    var f = Ext.getCmp('TipoRegg').setValue(record.data.TipoReg);

                }
            });
        }
    }


});
