Ext.define('ConLogin.view.main.FormRegistoHoras.ListHorasDia', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.RhorasDia',
    id: 'gridRhorasDia',
    xtype: 'mainlistHorasDia',

    height: 440,
    width:500,

    requires: [
        'ConLogin.store.Registo_Horas.RegistoHorasDia',
        'ConLogin.store.Registo_Horas.RegistoHorasSelecionadas',
        'ConLogin.view.main.FormRegistoHoras.MostraRegistoMockup',
        'Ext.toolbar.Paging'

    ],

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'RhorasDia'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID_Reg_horas', flex: 0.9,hidden:true ,
            filter: {
            type: 'string'
            }},
        { text: 'Funcionário',  dataIndex: 'username', flex: 1.7 ,
            filter: {
                type: 'string'
            }},
        { text: 'Hora', dataIndex: 'Hora_entradaManha_rh', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Local', dataIndex: 'Descricao_Local', flex: 1.0 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Tipo', dataIndex: 'Descricao_tipo_reg', flex: 2.7 ,
            filter: {
                type: 'string'
            }},
        { text: 'ID', dataIndex: 'ID_Local_rh', flex: 0.7 ,hidden:true ,
            filter: {
                type: 'string'
            }}

    ],


        listeners: {
            itemclick: function(view, record, item, index, e) {
                var id = record.get('ID_Reg_horas');
                Ext.util.Cookies.set('cookieID_RegHoras', id);

                var idLocal = record.get('ID_Local_rh');
                Ext.util.Cookies.set('cookieID_locrh', idLocal);

                myRequest4 = Ext.Ajax.request({
                    url: 'app/php/VerificaAcessos/verificaUtilizador.php',
                    success: function (response, opts) {
                        var MockmyWin = Ext.create("Ext.window.Window", {
                            title: 'Registo Selecionado',
                            modal: true,
                            items: [{
                                xtype: 'fieldMostraRegmockup'
                            }]
                        });
                        MockmyWin.show();
                    }

                })
            }
        },

    GridAfterRender: function(RhorasDia){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});