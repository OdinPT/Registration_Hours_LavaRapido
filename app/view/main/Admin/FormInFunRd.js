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
        align: 'stretch',
        height: 120
    },

    store: {
        type: 'CarregaInFuncRD'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Utilizador :',
        id: 'usernamee',
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
                    var b = Ext.getCmp('usernamee').setValue(record.data.username);
                }
            });
        }
    }


});
