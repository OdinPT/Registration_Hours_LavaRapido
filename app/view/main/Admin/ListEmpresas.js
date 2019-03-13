Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.ListEmpresas', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.Empresas',
    id: 'gridEmpresas',

    xtype: 'mainlistempresas',



    requires: [
        'ConLogin.store.Admin.Empresas',
        'Ext.toolbar.Paging'
    ],
    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'Empresas'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],


    columns: [
        {text: 'ID ',  dataIndex: 'ID_empresa', flex: 0.9 ,hidden:true,
            filter: {
            type: 'string'
            }},
        { text: 'Nome :',  dataIndex: 'Nome_empresa', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'NIFF Empresa', dataIndex: 'Niff_empresa', flex: 0.8 ,
            filter: {
                type: 'string'
            }}
    ],

    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_empresa');
            Ext.util.Cookies.set('cookieID_empresaSelect', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php',
                success: function (response, opts) {
                    var myWin = Ext.create("Ext.window.Window", {
                        title: 'Empresa Selecionada',
                        modal: true,
                        items: [{
                            xtype: 'MostraEmpresaSelect'
                        }]

                    });
                    myWin.show();
                }
            })
        }
    },

    GridAfterRender: function(gridEmpresas){
        setInterval(function(){
            grid.store.load();
        }, 1200);
    }
});
