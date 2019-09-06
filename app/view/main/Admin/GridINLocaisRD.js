Ext.define('ConLogin.view.main.Admin.GridINLocaisRD', {
    extend: 'Ext.grid.Panel',
    id: 'GridINLocaisRD',

    requires: [
        'ConLogin.store.Admin.CarregaINLocaisRD'
    ],

    xtype: 'GridINlocaisRD',
    title: 'Locais em que trabalha',

    store: {
        type: 'CarregaINLocaisRD'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID Local',  dataIndex: 'ID_Local', flex: 0.5 ,hidden:true,
            filter: {
            type: 'string'
            }},
        { text: 'Local:',  dataIndex: 'Descricao_Local', flex: 1.0 ,
            filter: {
                type: 'string'
            }}
    ],

    GridAfterRender: function(CarregaINLocaisRD){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});