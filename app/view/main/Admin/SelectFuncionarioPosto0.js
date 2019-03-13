Ext.define('ConLogin.view.main.Admin.SelectFuncionarioPosto0', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactosFunc',

    id: 'gridFuncionariosPosto0',
    xtype: 'GridFuncionariosPosto0',

    requires: [
        'ConLogin.store.Admin.CarregaSelecaoFuncPosto'
    ],

    config: {
        autoLoad: true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'CarregaSelecaoFuncPosto'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [

        { text: 'ID',  dataIndex: 'ID', flex: 1.0 ,hidden:true,
            filter: {
                type: 'string'
            }},
        
        { text: 'Funcionário', dataIndex: 'username', flex: 1.0 ,hidden:true,
            filter: {
                type: 'string'
            }
        },
        { text: 'Lavagem', dataIndex: 'Locais', flex: 3.0 ,
            filter: {
                type: 'string'
            }}

    ],

    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID');
            Ext.util.Cookies.set('cookieID_LocalFunc', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php'

            })
        }
    },

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Apagar',

                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaFuncPosto'
                }
            }

        ]
    },

    GridAfterRender: function(gridFuncionariosPosto0){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});