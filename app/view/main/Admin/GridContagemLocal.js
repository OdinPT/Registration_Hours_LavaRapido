Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.GridContagemLocal', {
    extend: 'Ext.grid.Panel',
    id: 'gridContagemLocal',

    requires: [
        'ConLogin.store.Admin.CarregaWinContagemXLocal',
        'ConLogin.view.main.Admin.JuncaoRegContadorDiario',
        'ConLogin.view.main.Admin.JuncaoRegContadorDiario2',

        'ConLogin.store.Registo_Horas.RegistosTodosPostoSelect',
        'ConLogin.view.main.Admin.JuncaoRegLogConDiaAntRD',

        'Ext.toolbar.Paging'
    ],

    width: 690,
    height: 200,

    xtype: 'mainContagemLocal',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'CarregaContagemWinxLocal'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID Request',  dataIndex: 'ID_Request', flex: 0.8 ,hidden:false,
            filter: {
            type: 'string'
            }},
        { text: ' Tipo de Registo :',  dataIndex: 'ID_Tipo_Req', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Local :',  dataIndex: 'ID_Local_Req', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Numero do Equipamento :',  dataIndex: 'Num_Equip', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Contagem :',  dataIndex: 'Contagem_Req', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'ID Pedido :',  dataIndex: 'ID_Pedido', flex: 1.2 ,
            filter: {
                type: 'string'
            }}
    ],

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

                        items: [

                            {
                                flex: 1,
                                margin: '0 5 0 0',
                                //width:415,
                                items: [{
                                    xtype: 'uniaoRegLogConDiaAntRD',
                                }]
                            }
                            ]
                    });
                    Win.show();
                }

            })
        }
    },

    GridAfterRender: function(gridContagemXXLocal){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});