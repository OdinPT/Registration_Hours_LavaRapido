Ext.define('ConLogin.view.main.Admin.JuncaoRegConDiaria', {
    extend: 'Ext.form.Panel',
    xtype: 'JuncaoRegContDiaria',

    requires: [
        'ConLogin.view.main.Form.FormSelect',
        'ConLogin.view.main.Admin.JuncaoRegContadorDiario',
        'ConLogin.view.main.Admin.GridContagemXLocal',

        //'ConLogin.view.main.FormRegistoHoras.RegistoContMultiLocal.SelectLocalFuncCont',
        'ConLogin.store.Registo_Horas.LocalFuncionarios'
    ],

    defaults:{
        scrollable:true
    },

    items:[
        {xtype: 'mainContagemLocal'}

    ]

});