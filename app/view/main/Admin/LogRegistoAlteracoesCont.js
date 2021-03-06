Ext.onReady
Ext.define('ConLogin.view.main.Admin.LogRegistoAlteracoesCont', {
    extend: 'Ext.grid.Panel',
    //alias: 'widget.LogRegAlteracoesCont',

    id: 'gridLogRegAlteracoesContador',

    xtype: 'mainLogRegAlteracoesContador',

    requires: [
        'ConLogin.store.Admin.LogAlteracoesCont'
    ],

    title:'Histórico Registo Alterações nos contadores',

    config: {
        autoLoad: true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    defaults: {
        closable: false,
        collapsible: true,
        scrollable:true
    },

    store: {
        type: 'LogAlteracoesCont'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID_Pista', flex: 1.0,hidden:true,
            filter: {
            type: 'string'
            }},
        { text: 'Posto:',  dataIndex: 'Local', flex: 1.0 ,
            filter: {
                type: 'string'
            }},
        
        { text: 'Contagem: ', dataIndex: 'Contagem', flex: 1.0 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Data', dataIndex: 'Data', flex: 1.0 ,
            filter: {
                type: 'string'
            }},
        { text: 'Username', dataIndex: 'Username', flex: 1.0 ,
            filter: {
                type: 'string'
            }},

        { text: 'Tipo Alteração', dataIndex: 'Descrisao', flex: 1.0 ,
            filter: {
                type: 'string'
            }}
    ],

    GridAfterRender: function(gridLogRegAlteracoesContador){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});