Ext.define('ConLogin.view.main.Admin.GridContAntRTP', {
    extend: 'Ext.grid.Panel',
    id: 'gridContAntRTP',

    requires: [
        'ConLogin.store.Admin.CarregaGridContAntRTP'
    ],

    xtype: 'GridContAntRTP',
    //width: 00,
    height: 330,

    store: {
        type: 'carregaGridRegAntRTP'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID Registo',  dataIndex: 'ID_PPistas', flex: 0.5 ,hidden:true,
            filter: {
            type: 'string'
            }},
        { text: 'Contagem :',  dataIndex: 'Contagem', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Data:',  dataIndex: 'DATA', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Numero do Equipamento :',  dataIndex: 'ID_EquiPorLav', flex: 1.2,hidden:true ,
            filter: {
                type: 'string'
            }},
        { text: 'Funcionário: ',  dataIndex: 'username', flex: 1.2 ,
            filter: {
                type: 'string'
            }}
    ],

/*
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
                            xtype:'GestaoTesteRDP',
                        }]

                    });
                    Win.show();
                }

            })
        }
    },
*/

    GridAfterRender: function(carregaGridRegAntRTP){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});