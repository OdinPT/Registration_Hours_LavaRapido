Ext.Loader.setPath('Ext.ux', '../ux/');
Ext.onReady
Ext.define('ConLogin.view.main.Rhoras.ListHoras', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.Rhoras',
    id: 'gridRhoras',
    xtype: 'mainlistHoras',

    height: 280,

    requires: [
        'ConLogin.store.Registo_Horas.RegistoHoras',
        'Ext.toolbar.Paging',
        'ConLogin.store.Registo_Horas.RegistoHorasSelecionadas',
       // 'ConLogin.view.main.FormRegistoHoras.MostraRegisto',
        'ConLogin.view.main.FormRegistoHoras.MostraRegistoMockup'
    ],
    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'Rhoras'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID_Reg_horas', flex: 0.9, hidden:false ,
            filter: {
            type: 'string'
            }},
        { text: 'Nome Funcionário',  dataIndex: 'username', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Hora', dataIndex: 'Hora_entradaManha_rh', flex: 0.8 ,
            filter: {
                type: 'string'
            }},
        { text: 'Local', dataIndex: 'Descricao_Local', flex: 1 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Tipo de Registo', dataIndex: 'Descricao_tipo_reg', flex: 1 ,
            filter: {
                type: 'string'
            }
         },

        { text: 'ID Local', dataIndex: 'ID_Local_rh', flex: 1 , hidden:true,
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

                        border: false,
                        bodyBorder: false,
                        frame: false,

                        items: [{
                            xtype: 'fieldMostraRegmockup'
                        }]
                    });
                    MockmyWin.show();
                }

            })
        }
    },

    GridAfterRender: function(gridRhoras){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});