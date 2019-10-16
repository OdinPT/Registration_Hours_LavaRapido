Ext.define('ConLogin.view.main.MainWidget2', {

    requires: [
        'ConLogin.view.main.Admin.EmpresaPrincipal2',
        'ConLogin.view.main.Admin.AdminPrincipal2',
        'ConLogin.view.main.Admin.GestãoLimContPosto',
        'ConLogin.view.main.Admin.JuncaoTipoEquipamento'
    ],

    extend: 'Ext.tab.Panel',
    xtype: 'SubMenu1Gestao',

    tabBar: {

        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}

    },

    activeTab: 1,
    items: [

        {
            title: 'Gestão de Funcionários',
            bodyPadding: 5,
            xtype:'GestaoFuncionariosPrincipal2'

        },

        {
            bodyPadding: 5,
            title: 'Gestão de Postos',
            xtype: 'GestaoLocaisPrincipal2'

        },
        {
            title:'Gestão de Empresas',
            bodyPadding: 5,
            xtype:'GestaoEmpresasPrincipal2'

        },{
            title:'Limite diário de cada Posto',
            bodyPadding: 5,
            xtype:'GestaoLimContPosto'

        },{
            title:'Tipos de Equipamentos',
            bodyPadding: 5,
            xtype: 'JuncaoTipoEquipamento'

        }, {
            title: 'Gestão de Tolerâncias',
            scroll:true,
            margin: '5 0 0 0',
            items: [{
                xtype:'GestaoTolerancias'
            }]
        }]
});