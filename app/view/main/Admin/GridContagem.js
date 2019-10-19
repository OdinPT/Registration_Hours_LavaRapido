Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.GridContagem', {
    extend: 'Ext.grid.Panel',
    id: 'gridContagemLavagemDiariaXX',

    requires: [
        'ConLogin.store.Admin.CarregaWinContagemX',
        'ConLogin.view.main.Admin.JuncaoRegContadorDiario',
        'Ext.toolbar.Paging'
    ],

    //height: 460,
    height: 490,

    xtype: 'mainContagemLavagem',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'CarregaContagemWinx'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID Request',  dataIndex: 'ID_Request', flex: 0.9 ,hidden:false,
            filter: {
            type: 'string'
            }},
        { text: 'Local :',  dataIndex: 'ID_Local_EquiLav', flex: 1.2,hidden:false,
            filter: {
                type: 'string'
            }},
        { text: 'Tipo Equipamento :',  dataIndex: 'ID_Tipo_equiLav', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Numero do Equipamento :',  dataIndex: 'Num_EquiLav', flex: 1.2 ,hidden:false,
            filter: {
                type: 'string'
            }},
        { text: 'Contagem :',  dataIndex: 'ContagemPP', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'ID_PPista :',  dataIndex: 'ID_PPista', flex: 1.2 ,hidden:true,
            filter: {
                type: 'string'
            }},
        { text: 'ID_Pedido :',  dataIndex: 'ID_Pedido', flex: 1.2 ,hidden:true,
            filter: {
                type: 'string'
            }}
    ],
    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Request');
            Ext.util.Cookies.set('cookieContagemSelect', id);

            var id2 = record.get('Num_EquiLav');
            Ext.util.Cookies.set('cookieNum_Equip', id2);

            var id3 = record.get('ID_PPista');
            Ext.util.Cookies.set('cookieID_PPista', id3);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/verificaUtilizador.php',
                success: function (response, opts) {
                    var Win = Ext.create("Ext.window.Window", {
                        title:'Contagem diária',
                        modal: true,
                        items: [{
                            xtype: 'JuncaoRegLogContadorDiaAnt0'
                        }]
                    });
                    Win.show();
                }

            })
        }
    },

    GridAfterRender: function(CarregaContagemWinx){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});