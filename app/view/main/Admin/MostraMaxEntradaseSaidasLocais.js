Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.MostraMaxEntradaseSaidasLocais', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.MaxEntradaseSaidas',

    id: 'gridMaxEntSaidasLocais',
    xtype: 'mainMaxEnteSaidas',


    requires: [
        'ConLogin.store.Admin.MaxEntradasEsaidasLocais'
    ],

    store: {
        type: 'reg_maxEntradaseSaidasLocais'
    },

    title:'Total de Entradas e Saidas de todos os postos até ao dia atual',

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        { text: 'Nome do Local', dataIndex: 'Descricao_Local', flex: 0.8 ,
            filter: {
                type: 'string'
            }},
        {text: 'Total de Entradas:',  dataIndex: 'MaxEntradas', flex: 0.9 ,
            filter: {
            type: 'string'
            }},
        { text: 'Total de Saidas: ',  dataIndex: 'MaxSaidas', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Total de Registos: ', dataIndex: 'MaxRegLocal', flex: 0.8 ,
            filter: {
                type: 'string'
            }}
        ],

    GridAfterRender: function(gridMaxEntSaidasLocais){
        setInterval(function(){
            grid.store.load();

        }, 120);
    }

});
