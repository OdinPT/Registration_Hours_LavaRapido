Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.GridEquipamentosLavagem', {
    extend: 'Ext.grid.Panel',
    id: 'gridEquipamentosLavagem',

    requires: [
        'ConLogin.store.Admin.CarregaEquipamentosLavagemGrid'
    ],

    xtype: 'mainGridEquipamentosLavagem',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'CarregaEquiLabGrid'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID Equipamento',  dataIndex: 'ID_EquiLav', flex: 0.9 ,hidden:true,
            filter: {
            type: 'string'
            }},
        { text: 'Local :',  dataIndex: 'Local', flex: 1.2,hidden:false,
            filter: {
                type: 'string'
            }},
        { text: 'Tipo Equipamento :',  dataIndex: 'Tipo_Equi', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Numero do Equipamento :',  dataIndex: 'NumEqui', flex: 1.2 ,
            filter: {
                type: 'string'
            }}

    ],

    GridAfterRender: function(CarregaEquiLabGrid){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});