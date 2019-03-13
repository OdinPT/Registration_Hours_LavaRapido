Ext.onReady
Ext.define('ConLogin.view.main.Admin.JuncaoRegLogContadorTodosPostos2', {
    extend: 'Ext.form.Panel',
    xtype: 'JuncaoRegLogContadorTodosPostos2',

    controller: 'adminController',

    requires: [
        'ConLogin.store.Registo_Horas.RegistosTodosPostoSelect',
        'ConLogin.view.main.FormRegistoHoras.MostraRegistoPostoSelect',
        'ConLogin.view.main.Admin.LogRegistoAlteracoesCont',
        'ConLogin.view.main.Admin.AdministracaoController'
        ],

    width:630,
    height: 460,

    border: false,
    bodyBorder: false,
    frame: false,
    scrollable:true,

    store: {
        type: 'RegPostoSelect'
    },

        items:[
             {xtype: 'fieldMostraRegPostoSelect'},
            {xtype: 'mainLogRegAlteracoesContador'}
        ]

});
