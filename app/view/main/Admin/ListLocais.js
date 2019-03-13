Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.ListLocais', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.Locais',
    id: 'gridLocais',

    xtype: 'mainlistlocais',

    requires: [
        'ConLogin.view.main.Admin.ListLocais',
        'ConLogin.store.Admin.Locais',
        'ConLogin.view.main.Admin.ListEmpresas',
        'ConLogin.view.main.Admin.RegLocalSelect',

        'Ext.toolbar.Paging'
    ],
    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'},
        height: 320,
        widht: 200
    },

    store: {
        type: 'Locais'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID_Local',hidden:true, flex: 0.9 ,
            filter: {
            type: 'string'
            }},
        { text: 'Nome do Posto: ',  dataIndex: 'NomeLocal', flex: 1.2 ,filter: {
                type: 'string'
            }},
        { text: 'Código Postal: ', dataIndex: 'CodigoPostal', flex: 0.8 ,
            filter: {
                type: 'string'
            }},
        { text: 'Nome Empresa: ', dataIndex: 'Nome_empresa', flex: 0.8 ,
            filter: {
                type: 'string'
            }}
    ],


    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Local');
            Ext.util.Cookies.set('cookieID_Local', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php',
                success: function (response, opts) {
                    var myWin = Ext.create("Ext.window.Window", {
                        title: 'Informações do Local ',
                        frame: false,
                        modal: true,
                        scrollable:true,
                        closable:true,
                        border:false,

                        width: 1200,

                        items: [{
                            xtype:'GestaoLocalSelectAdmin'
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

        }, 120);
    }

});
