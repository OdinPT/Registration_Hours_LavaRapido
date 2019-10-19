Ext.onReady
Ext.define('ConLogin.view.main.Admin.MostraRegisto', {
    extend: 'Ext.form.Panel',
    xtype: 'MostraRegTodosPostos',

    controller: 'adminController',

    requires: [
        'ConLogin.store.Registo_Horas.RegistoHorasSelecionadas',
        'ConLogin.store.Registo_Horas.RegistoHorasDia',
        'ConLogin.store.Registo_Horas.RegistoHoras',

        'ConLogin.view.main.Admin.MostraRegistoSelect',
        'ConLogin.view.main.FormRegistoHoras.LogRegistoHoras',
        'ConLogin.view.main.Admin.AdministracaoController'
        ],

    width: 780,

    defaults: {
        scrollable: true,
        closable: false,
        collapsible: true
        //border:true
    },

    border: false,
    bodyBorder: false,
    frame: false,

    store: {
        type: 'Regseleccionado'
    },

        items:[
         {
             title:'Conteúdo Principal',
             height:300,
             xtype: 'MostraRegSelect'
         },{
            xtype: 'mainLogRegistoHoras'
         }
        ]

});
