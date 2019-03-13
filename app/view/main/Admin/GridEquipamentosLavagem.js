Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.GridEquipamentosLavagem', {
    extend: 'Ext.grid.Panel',
    id: 'gridEquipamentosLavagem',

    requires: [
        'ConLogin.store.Admin.CarregaEquipamentosLavagemGrid'
        //'ConLogin.view.main.Admin.JuncaoRegContadorDiario',
        //'Ext.toolbar.Paging'
    ],

    width: 690,
    height: 490,

    xtype: 'mainGridEquipamentosLavagem',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'CarregaEquiLabGrid'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID Equipamento',  dataIndex: 'ID_EquiLav', flex: 0.9 ,hidden:false,
            filter: {
            type: 'string'
            }},
        { text: 'Local :',  dataIndex: 'Local', flex: 1.2,hidden:false,
            filter: {
                type: 'string'
            }},
        { text: 'Tipo Equipamento :',  dataIndex: 'Tipo_Equi', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Numero do Equipamento :',  dataIndex: 'NumEqui', flex: 1.2 ,
            filter: {
                type: 'string'
            }}

    ],
    /*
    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Request');
            Ext.util.Cookies.set('cookieContagemSelect', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/verificaUtilizador.php',
                success: function (response, opts) {
                    var Win = Ext.create("Ext.window.Window", {
                        title:'Contagem diária',

                        modal: true,

                        items: [{
                            xtype: 'JuncaoRegContadorDiario'
                        }]
                    });
                    Win.show();
                }

            })
        }
    },
    */
    GridAfterRender: function(CarregaEquiLabGrid){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});