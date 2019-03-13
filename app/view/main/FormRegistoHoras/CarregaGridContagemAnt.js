Ext.define('ConLogin.view.main.FormRegistoHoras.CarregaGridContagemAnt', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.CarregaGridContagemDiaAnt',
    id: 'gridContAnterior',

    xtype: 'mainGridContagemAnt',


    requires: [
        'ConLogin.store.Admin.CarregaGridContagemDiaAnt',
        'Ext.toolbar.Paging'

    ],

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'CarregaGridContagemDiaAnt'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'Contagem Anterior ',  dataIndex: 'ContagemPP', flex: 1.0,
            filter: {
            type: 'string'
            }},
        { text: 'Data', dataIndex: 'DataPP', flex: 0.7 ,
            filter: {
                type: 'string'
            }},
        { text: 'username', dataIndex: 'username', flex: 0.8 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'IDEquiPorLAv', dataIndex: 'ID_EquiPorLav_PP', flex: 0.7 ,hidden:true,
            filter: {
                type: 'string'
            }}
    ],

    GridAfterRender: function(gridContAnterior){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});