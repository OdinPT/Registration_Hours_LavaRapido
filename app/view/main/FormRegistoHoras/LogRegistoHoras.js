Ext.define('ConLogin.view.main.FormRegistoHoras.LogRegistoHoras', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.LogRhoras',

    id: 'gridLogRhoras',

    xtype: 'mainLogRegistoHoras',

    requires: [
        'ConLogin.store.Admin.LogRegistoHoras'
    ],

    title:'Histórico Registo Horas',

    width:780,
    height: 240,

    config: {
        autoLoad: true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    defaults: {
        closable: false,
        collapsible: true
    },

    store: {
        type: 'LogRhoras'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID_Reg_horas', flex: 1.0,hidden:false,
            filter: {
            type: 'string'
            }},
        { text: 'Funcionário',  dataIndex: 'username', flex: 1.0 ,
            filter: {
                type: 'string'
            }},
        
        { text: 'Hora', dataIndex: 'Hora_entradaManha_rh', flex: 1.0 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Local', dataIndex: 'Descricao_Local', flex: 1.0 ,
            filter: {
                type: 'string'
            }},
        { text: 'Tipo Registo', dataIndex: 'Descricao_tipo_reg', flex: 1.0 ,
            filter: {
                type: 'string'
            }},

        { text: 'Tipo Alteração', dataIndex: 'Descrisao', flex: 1.0 ,
            filter: {
                type: 'string'
            }}
    ],

    GridAfterRender: function(gridLogRhoras){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});