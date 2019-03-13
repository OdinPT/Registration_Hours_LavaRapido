Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.logRequestPesquisa2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.RequestPesquisa2',
    id: 'gridReqPesquisa2DATEs',

    requires: [
        'ConLogin.store.Admin.RetornaRequesPesquisa2mes',
        'Ext.toolbar.Paging'
    ],
    xtype: 'mainlistSearchRequestmes',

    config: {
        autoLoad: true,
        scrollable:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    defaults:{
        scrollable:true
    },

    store: {
        type: 'LogRequestmes'
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
        { text: 'Tipo  :',  dataIndex: 'ID_Tipo_Req', flex: 1.2 ,
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
        { text: 'ID Pedido  ', dataIndex: 'ID_Pedido', flex: 1 ,hidden:true,
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

    GridAfterRender: function(gridReqPesquisa2DATEs){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});