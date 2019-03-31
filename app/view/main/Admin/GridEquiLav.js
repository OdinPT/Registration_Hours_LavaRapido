Ext.define('ConLogin.view.main.Admin.GridEquiLav', {
    extend: 'Ext.grid.Panel',

    id: 'gridEquiLavRDP',

    requires: [
        'ConLogin.store.Admin.CarregaGridEquiLav'
    ],

    xtype: 'GridRegContagemRDP',

    width: 650,
    height: 490,

    tabBar: {

        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'carregaRegEquiLav'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID Registo',  dataIndex: 'ID_EquiLav', flex: 0.5 ,hidden:false,
            filter: {
            type: 'string'
            }},
        { text: 'Local:',  dataIndex: 'Local', flex: 1.0 ,
            filter: {
                type: 'string'
            }},
        { text: 'Tipo Equipamento:',  dataIndex: 'TipoEquipamento', flex: 1.0 ,
            filter: {
                type: 'string'
            }},
        { text: 'Numero do Equipamento :',  dataIndex: 'Num_EquiLav', flex: 1.4 ,
            filter: {
                type: 'string'
            }}
    ],


    listeners: {
        itemclick: function (view, record, item, index, e) {
            var id = record.get('Num_EquiLav');
            Ext.util.Cookies.set('cookieID_ContadoresRDP', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/verificaUtilizador.php',
                success: function (response, opts) {
                    var Win = Ext.create("Ext.window.Window", {
                        title: 'Registo de Contagem de um equipamento',
                        modal: true,

                        width: 950,
                        height: 500,

                        items: [{
                            xtype:'GestaoContRDP'
                        }]

                    });
                    Win.show();
                }

            })
        }
    },


    GridAfterRender: function(carregaRegEquiLav){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});