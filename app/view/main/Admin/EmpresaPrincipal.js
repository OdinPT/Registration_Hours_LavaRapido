Ext.define('ConLogin.view.main.Admin.EmpresaPrincipal', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'ConLogin.view.main.Admin.EmpresaPrincipal2'

    ],

    xtype:'GestaoEmpresasPrincipal',

    //collapsed: false,
    layout: {
        //type: 'accordion',
        //multi: true,
        type: 'hbox',
        scroll:true,
        pack: 'start',
        align: 'stretch',
        width: 1500,
        height: 300
    },

    defaults: {
        frame: true,
        bodyPadding: 10,
        scroll:true
    },

    items: [
        {
            title:'Gestão de Funcionários',
            bodyPadding: 5,
           // collapsed: true,
            items: [
                {xtype:'GestaoFuncionariosPrincipal2'}

            ]
        }


    ]
});