Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.logRequestPesquisa', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.RequestPesquisa',
    id: 'gridSearch2D',

    requires: [
        'ConLogin.store.Admin.RetornaRequestPesquisa2Dates',
        'Ext.toolbar.Paging'
    ],
    xtype: 'mainlistSearchRequest2Dates',

    config: {
        autoLoad: true,
        scrollable:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    defaults:{
        scrollable:true
    },

    store: {
        type: 'LogRequest2M'
    },

    title:'Resultado da Pesquisa',

    height: 225,

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID Request ',  dataIndex: 'ID_Request', flex: 0.2 ,hidden:true,
            filter: {
            type: 'string'
            }},
        { text: 'Tipo Equipamento :',  dataIndex: 'ID_Tipo_Req', flex: 1.6 ,
            filter: {
                type: 'string'
            }},
        { text: 'Local', dataIndex: 'ID_Local_Req', flex: 0.8,
            filter: {
                type: 'string'
            }},

        { text: 'Contagem', dataIndex: 'Contagem_Req', flex: 1.7 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Data', dataIndex: 'Data_Req', flex: 1 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Id Pista ', dataIndex: 'ID_PPista', flex: 1 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Data Pedido ', dataIndex: 'Data_Pedido', flex: 1 ,
            filter: {
                type: 'string'
            }
        }
    ],

    GridAfterRender: function(gridSearch2D){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});