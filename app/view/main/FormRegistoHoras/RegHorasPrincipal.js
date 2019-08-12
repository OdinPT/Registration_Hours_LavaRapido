Ext.define('ConLogin.view.main.FormRegistoHoras.RegHorasPrincipal', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.FormRegistoHoras.RegHorasPrincipal',
        'ConLogin.view.main.FormRegistoHoras.FormRegistaHoras',
        'ConLogin.store.Registo_Horas.LocalFuncionarios',
        'ConLogin.view.main.FormRegistoHoras.ListHorasDia'
    ],

    xtype:  'RegHorasprincipal',

    title: 'Registos do dia',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    border: false,
    bodyBorder: false,
    frame: false,

    items: [
        {
            title: 'Entradas e Saidas',
            flex: 1,
            margin: '5 5 0 0',
            items: [{
                xtype: 'registahoras'

            }]
        },
        {
            title: 'Registos efetuados do  dia',
            flex: 1,
            margin: '5 5 0 0',
            autoScroll: true,
            items: [{
                xtype: 'mainlistHorasDia'
            }]
        }
    ],

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Registar Contagem',
                glyph: 43,
                listeners: {
                    Click: function (view, record, item, index, e) {

                        myRequest4 = Ext.Ajax.request({
                            url: 'app/php/VerificaAcessos/Func4Local.php',
                            success: function (response, opts) {
                                var myWin = Ext.create("Ext.window.Window", {
                                    title: 'Registos dos contadores do dia',
                                    modal: true,

                                    width: 700,
                                    height: 580,

                                    items: [{
                                        xtype:'ContagensPrincipal'
                                    }]
                                });
                                myWin.show();
                            }
                        })
                    }
                }
            }
        ]
    }
});