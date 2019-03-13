Ext.define('ConLogin.view.main.FormRegistoHoras.JuncaoRegAnteriores', {

    requires: [
        'ConLogin.view.main.Rhoras.ListHoras',
        'ConLogin.store.Registo_Horas.RegistoHoras'
    ],

    extend: 'Ext.tab.Panel',
    xtype: 'JuncaoRegAnteriores',

    title:'Registos anteriores',

    border: false,
    bodyBorder: false,
    frame: false,
    activeTab: 1,

    items: [

        {
            title: 'Registos horários anteriores',
            scroll:true,
            margin: '5 5 5 0',
            items: [{
                xtype: 'mainlistHoras'
            }]
        },{
            title: 'Contagens de equipamentos do Postos dos dias anteriores',
            scroll:true,
            margin: '5 5 5 0',
            items: [{
                xtype: 'mainlistTodosRegPosto'
            }]
        }
    ]
});