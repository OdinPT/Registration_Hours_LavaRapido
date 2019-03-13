Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.MostraMaxES_dia', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.maxESdia',

    xtype: 'mostra_ES_Dia',
    id: 'grid_ES_Dia',

    requires: [
        'ConLogin.store.Admin.MaxES_Dia'
    ],

    store: {
        type: 'maxESdia'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        { text: 'Nome do Local: ', dataIndex: 'Descricao_Local', flex: 0.9 ,
            filter: {
                type: 'string'
            }},
        {text: 'Total de Entradas: ',  dataIndex: 'MaxEntradas', flex: 0.9 ,
            filter: {
                type: 'string'
            }},

        { text: 'Total de Saidas: ',  dataIndex: 'MaxSaidas', flex: 0.9 ,
            filter: {
                type: 'string'
            }},
        { text: 'Total de Registos do dia: ', dataIndex: 'MaxRegLocal', flex: 0.8 ,
            filter: {
                type: 'string'
            }},

        { text: 'Total de Funcionários do Local: ', dataIndex: 'MaxFuncLocal', flex: 1.0 ,
            filter: {
                type: 'string'
            }}

        ],

    GridAfterRender: function(grid_ES_Dia){
        setInterval(function(){
            grid.store.load();

        }, 120);
    }

});
