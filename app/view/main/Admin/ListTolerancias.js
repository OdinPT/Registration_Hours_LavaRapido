Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.ListTolerancias', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.Tolerancias',
    id: 'gridTolerancias',

    requires: [
        'ConLogin.store.Admin.Tolerancias',
        'Ext.toolbar.Paging'
    ],
    xtype: 'mainlistTolerancias',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'Tolerancias'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID',  dataIndex: 'ID_Tolerancia', flex: 0.2 ,hidden:false,
            filter: {
            type: 'string'
            }},
        { text: 'Tempo de tolerância :',  dataIndex: 'Hora_Tolerancia', flex: 1.2 ,
            filter: {
                type: 'string'
            }}
    ],


    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Tolerancia');
            Ext.util.Cookies.set('cookieID_Tol', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php',
                success: function (response, opts) {
                    var myWin = Ext.create("Ext.window.Window", {
                        title: 'Tolerância  Selecionada',

                        border: false,
                        bodyBorder: false,
                        frame: false,

                        modal: true,

                        items: [{
                            xtype: 'MostraToleranciaSelect'
                        }]

                    });
                    myWin.show();
                }
            })
        }
    },

    GridAfterRender: function(gridTolerancias){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});