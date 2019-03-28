Ext.define('ConLogin.view.main.FormRegistoHoras.CarregaGridContagemAnt2', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.CarregaGridContagemDiaAnt2',
    id: 'gridContAnterior2',


    xtype: 'mainGridContagemAnt2',


    requires: [
        'ConLogin.store.Admin.CarregaGridContagemDiaAnt2',
        'Ext.toolbar.Paging'

    ],

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'CarregaGridContagemDiaAnt2'
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
        { text: 'Funcionário ', dataIndex: 'username', flex: 0.8 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'IDEquiPorLAv', dataIndex: 'ID_EquiPorLav_PP', flex: 0.7 ,hidden:true,
            filter: {
                type: 'string'
            }}
    ],

    GridAfterRender: function(CarregaGridContagemDiaAnt2){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});