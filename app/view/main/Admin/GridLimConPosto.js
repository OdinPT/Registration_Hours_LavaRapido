Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.GridLimConPosto', {
    extend: 'Ext.grid.Panel',
    id: 'gridLimConPosto',

    requires: [
        'ConLogin.store.Admin.CarregaGridLimMaxCont'

    ],

    xtype: 'mainGridLimconPosto',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'CarregaLimMaxCont'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID Limit',  dataIndex: 'ID_Lim', flex: 0.9 ,hidden:false,
            filter: {
            type: 'string'
            }},
        { text: 'Limit max diário  :',  dataIndex: 'Limit_Diario', flex: 1.9,hidden:false,
            filter: {
                type: 'string'
            }},
        { text: 'Local:',  dataIndex: 'Local', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Tipo de Equipamento :',  dataIndex: 'TipoEqui', flex: 1.2 ,
            filter: {
                type: 'string'
            }}
    ],

    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Lim');
            Ext.util.Cookies.set('cookieID_Lim', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php'

            })
        }
    },

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Apagar Limite ',

                glyph: 43,
                formBind: true,
                listeners: {
                    //click: 'onClickApagaFuncPosto'
                }
            }

        ]
    },

    GridAfterRender: function(gridLimConPosto){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});