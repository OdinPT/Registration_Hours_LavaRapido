Ext.onReady
Ext.define('ConLogin.view.main.Admin.JuncaoRegLogContadorTodosPostos', {
    extend: 'Ext.form.Panel',
    xtype: 'JuncaoRegLogContadorTodosPostos',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.FormRegistoHoras.MostraRegistoPostoSelect',
        'ConLogin.view.main.Admin.LogRegistoAlteracoesCont',
        'ConLogin.store.Registo_Horas.RegistosTodosPostoSelect',

        'ConLogin.view.main.Admin.AdministracaoController'
        ],

    width:630,
    height: 440,

    border: false,
    bodyBorder: false,
    frame: false,

    store: {
        type: 'RegPostoSelect'
    },

        items:[
             {xtype: 'fieldMostraRegPostoSelect'},
            {xtype: 'mainLogRegAlteracoesContador'}
        ]

});
