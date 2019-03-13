Ext.onReady
Ext.define('ConLogin.view.main.Admin.MostraRegistoFuncionario', {
    extend: 'Ext.form.Panel',
    xtype: 'MostraRegFuncXL',

    controller: 'adminController',

    requires: [
        'ConLogin.store.Admin.FuncionarioSelecionado',
        'ConLogin.view.main.Admin.HorarioFunc',
        'ConLogin.view.main.Admin.ContactosFuncionario',
        'ConLogin.view.main.Admin.MostraFuncSelect',
        'ConLogin.view.main.Admin.AdministracaoController',

        'ConLogin.view.main.Admin.JuncaoFuncEmpresaContacto'
        //'ConLogin.view.main.Admin.JuncaoFuncHorarioPosto'
        ],

    defaults: {
        scrollable: true,
        closable: false
    },

    border: false,
    bodyBorder: false,
    frame: false,
    autoScroll: true,
    width: 1390,


        items:[{
                items: [{
                    xtype:'JuncaoFH'
                }]
             },{
                items: [{
                    xtype:'JuncaoFuncEC'
                }]
            }]

});
