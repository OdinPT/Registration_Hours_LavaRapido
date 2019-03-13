Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.ListFuncPostos2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.FuncPostos',
    id: 'gridFuncContactos2',

    xtype: 'mainlisFuncP2',

    requires: [
        'ConLogin.store.Admin.FuncPostos',
        'Ext.toolbar.Paging'
    ],
    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'FuncPostos'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],


    columns: [
        {text: 'ID ',  dataIndex: 'ID', flex: 0.9 , hidden:true,
            filter: {
            type: 'string'
            }},
        { text: 'Nome utilizador:',  dataIndex: 'username', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Locais', dataIndex: 'Locais', flex: 0.8 ,
            filter: {
                type: 'string'
            }}
    ],



    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID');
            Ext.util.Cookies.set('cookieID_LocalFunc', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php',
                success: function (response, opts) {
                    var myWin = Ext.create("Ext.window.Window", {
                        title: 'Registo Selecionado',
                        modal: true,
                        items: [{
                            xtype: 'MostraRegLF'
                        }]

                    });
                    myWin.show();
                }
            })
        }
    },


    GridAfterRender: function(gridFuncContactos){
        setInterval(function(){
            grid.store.load();
        }, 1200);
    }
});
