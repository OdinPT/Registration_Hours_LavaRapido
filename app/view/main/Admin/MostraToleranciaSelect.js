Ext.onReady
Ext.define('ConLogin.view.main.Admin.MostraToleranciaSelect', {
    extend: 'Ext.form.Panel',
    xtype: 'MostraToleranciaSelect',

    controller: 'adminController',

    requires: [
        'ConLogin.store.Admin.ToleranciaSelecionada',
        'ConLogin.view.main.Admin.AdministracaoController'
    ],

    id: 'staticPageForm',
    frame: true,

    width: 400,
    height: 100,

    layout: {
            type: 'form',
            align: 'stretch'
        },

    store: {
        type: 'ToleranciaSelecionada'
    },

    items: [

        {
            xtype: 'textfield',
            fieldLabel: 'Tolerância selecionada ',
            submitValue : true,

            id: 'Hora_Tolerancia',
            emptyText: 'Insira um Código Postal',
            blankText: 'Insira um Código Postal'
        },
        {
            hidden:true,
            xtype: 'textfield',
            fieldLabel: '1 ou 2',
            id: 'Tipo_validacao18',
            name: 'Tipo_validacao18'
        }

    ],

    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [

           {
                text: 'Apagar Registo',
                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaTolerancia'
                }
            }]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('ToleranciaSelecionada');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var b = Ext.getCmp('Hora_Tolerancia').setValue(record.data.Hora_Tolerancia);

                }
            });
        }
    }

});
