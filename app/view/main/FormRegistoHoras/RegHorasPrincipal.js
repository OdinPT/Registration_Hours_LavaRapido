Ext.define('ConLogin.view.main.FormRegistoHoras.RegHorasPrincipal', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.FormRegistoHoras.RegHorasPrincipal',
        'ConLogin.view.main.FormRegistoHoras.FormRegistaHoras',
        'ConLogin.store.Registo_Horas.LocalFuncionarios',
        'ConLogin.view.main.FormRegistoHoras.ListHorasDia',
        'ConLogin.view.main.FormRegistoHoras.RegistoContMultiLocal.SelectLocalFuncCont'
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
                            url: 'app/php/VerificaAcessos/FuncFLocal.php',
                            success: function (response, opts) {
                                var myWin = Ext.create("Ext.window.Window", {
                                    title: 'Contagem de um só Local',
                                    modal: true,

                                    width: 720,
                                    height: 500,
                                    items: [{
                                        xtype:'ContagensPrincipal'
                                    }]
                                });
                                myWin.show();


                            },
                            failure: function () {

                                var MockmyWin = Ext.create("Ext.window.Window", {
                                    title: 'Contagem de mais de um Local',
                                    modal: true,
                                    width: 800,
                                    height: 400,
                                    items: [
                                        {xtype: 'JuncaoRegContDiaria'}
                                    ]
                                });
                                MockmyWin.show();
                            }
                        })
                    }
                }
            }
        ]
    }
});