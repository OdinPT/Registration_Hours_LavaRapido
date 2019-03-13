Ext.define('ConLogin.view.main.FormRegistoHoras.CarregaGridContagemAntRD', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.CarregaGridContagemARD',
    id: 'gridContRegAntRD',

    xtype: 'mainGridContRegAntRD',


    requires: [
        'ConLogin.store.Admin.CarregaGridContagemAntRegistosDia',
        'Ext.toolbar.Paging'

    ],

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'CarregaGridContagemARD'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'Contagem Anterior ',  dataIndex: 'ID_Request', flex: 1.0,
            filter: {
            type: 'string'
            }},
        { text: 'Data', dataIndex: 'TipoEquipamento', flex: 0.7 ,
            filter: {
                type: 'string'
            }},
        { text: 'username', dataIndex: 'Lavagem', flex: 0.8 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'IDEquiPorLAv', dataIndex: 'Contagem_Req', flex: 0.7 ,hidden:true,
            filter: {
                type: 'string'
            }
        },
        { text: 'Data_Req', dataIndex: 'Data_Req', flex: 0.7 ,hidden:true,
            filter: {
                type: 'string'
            }},
        { text: 'Data_Req', dataIndex: 'username', flex: 0.7 ,hidden:true,
            filter: {
                type: 'string'
            }
        }
    ],

    GridAfterRender: function(gridContAnterior){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});