Ext.define('ConLogin.view.main.FormRegistoHoras.RegHorasPrincipal', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.FormRegistoHoras.RegHorasPrincipal',
        'ConLogin.view.main.FormRegistoHoras.FormRegistaHoras',
        'ConLogin.store.Registo_Horas.LocalFuncionarios',
        'ConLogin.view.main.FormRegistoHoras.ListHorasDia',
        'ConLogin.view.main.Admin.JuncaoIF_Loc_RD'
    ],

    xtype:  'RegHorasprincipal',

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

            margin: '5 5 0 0',
            collapsible:true,
            collapseDirection: "right",
            width:430,
            items: [{
                xtype: 'registahoras'

            }]
        },
        {
            title: 'Registos efetuados do  dia',
            flex: 3,
            margin: '5 5 0 0',
            autoScroll: true,
            height: 440,

            items: [{
                xtype: 'mainlistHorasDia'
            }]
        },
        {
            title: 'Informações do  Funcionário',
            collapsible:true,
            collapseDirection: "left",
            flex: 2,
            margin: '0 0 0 0',
            items: [{
                xtype: 'JuncaoRegInflocRD'

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