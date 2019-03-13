Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.ListEmpresaFuncionario0', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.EmpresasFunc',

    id: 'gridEmpresa_func0',

    controller: 'adminController',

    xtype: 'mainlistEmpresaFunc0',

    requires: [
        'ConLogin.store.Admin.Carrega_FuncEmpSelect',
        'ConLogin.view.main.Admin.AdministracaoController',
        'Ext.toolbar.Paging',
        'ConLogin.view.main.Admin.ListEmpresas'
    ],
    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'Carrega_FuncEmpSelect'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],


    columns: [
        {text: 'ID ',  dataIndex: 'ID_ef', flex: 0.9 ,hidden:true,
            filter: {
            type: 'string'
            }},
        { text: 'Username :',  dataIndex: 'username', flex: 1.2, hidden:true,
            filter: {
                type: 'string'
            }},
        { text: 'Nome Empresa', dataIndex: 'Nome_Empresa', flex: 0.8 ,
            filter: {
                type: 'string'
            }}
    ],


    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_ef');
            Ext.util.Cookies.set('cookieID_EF', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php'

            })
        }
    },

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Apagar Registo ',

                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaEF0'
                }
            }

        ]
    },

    GridAfterRender: function(gridEmpresa_func0){
        setInterval(function(){
            grid.store.load();
        }, 1200);
    }
});
