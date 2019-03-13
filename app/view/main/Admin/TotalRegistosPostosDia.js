Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.TotalRegistosPostosDia', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.TotalRegPostosDia',

    xtype: 'TotalRegPostosDia',

    id: 'grid_TotalRegPostos',

    requires: [
        'ConLogin.store.Admin.TotalRegistosPostoDia'
    ],

    store: {
        type: 'TotalESPostodia'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        { text: 'Nome do Local: ', dataIndex: 'Descricao_Local', flex: 0.3 ,
            filter: {
                type: 'string'
            }},
        {text: 'Total de Funcionários do Posto ',  dataIndex: 'TotalFuncionarios', flex: 0.9 ,
            filter: {
                type: 'string'
            }},

        { text: 'Total de registos do dia ',  dataIndex: 'MaxRegistosDia', flex: 0.9 ,
            filter: {
                type: 'string'
            }}
        ],

    GridAfterRender: function(grid_TotalRegPostos){
        setInterval(function(){
            grid.store.load();

        }, 120);
    }

});
