Ext.Loader.setPath('Ext.ux', '../ux/');
Ext.define('ConLogin.view.main.Admin.GridLoginLogout', {
    extend: 'Ext.grid.Panel',
    id: 'gridLogin_e_Logout',

    requires: [
        'ConLogin.store.Admin.GridLoginLogout'
    ],

    height: 700,

    xtype: 'GridLGout',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'GridLoginLogout'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'Data e Hora :',  dataIndex: 'Data_Hora', flex: 0.9 ,hidden:false,
            filter: {
            type: 'string'
            }},
        { text: 'Tipo de registo :',  dataIndex: 'TipoReg', flex: 1.2,hidden:false,
            filter: {
                type: 'string'
            }},
        { text: 'Funcionário :',  dataIndex: 'username', flex: 1.2 ,
            filter: {
                type: 'string'
            }}
    ],

    GridAfterRender: function(gridLogin_e_Logout){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});