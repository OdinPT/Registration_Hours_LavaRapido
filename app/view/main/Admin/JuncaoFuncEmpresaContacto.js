Ext.define('ConLogin.view.main.Admin.JuncaoFuncEmpresaContacto', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.layout.container.HBox'
    ],

    xtype:'JuncaoFuncEC',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'

    },

    defaults: {
        border: true,
        bodyBorder: false,
        collapsible:true,

        autoScroll: true,
        scroll:true,
        collapsed:false,
        collapseDirection: "bottom"
    },

    items: [
        {
            title: 'Postos ',
            flex: 1,
            margin: '0 0 0 0',
            width: 50,
            collapseDirection: "left",
            items: [{
                xtype: 'GridFuncionariosPosto0'
            }]
        },{
            title: 'Contactos',
            flex: 1,
            margin: '0 0 0 0',
            width: 100,
            items: [{
                xtype: 'mainContactosFunc'
            }]
        },{
            title: 'Empresa',
            flex: 1,
            margin: '0 0 0 0',
            width: 100,
            collapseDirection: "right",
            collapsed:true,
            items: [{
                xtype: 'mainlistEmpresaFunc0'
            }]
        }]
});