Ext.define('ConLogin.view.main.FormRegistoHoras.ListRegistosTodosPosto', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.Registoposto',
    id: 'gridRegistoTodosPosto',

    xtype: 'mainlistTodosRegPosto',

    requires: [
        'ConLogin.store.Registo_Horas.GridRegistosTodosPosto',

        'ConLogin.view.main.Admin.JuncaoRegLogContadorTodosPostos',
        'ConLogin.view.main.Admin.JuncaoRegLogContadorDiaAnt0',
        'Ext.toolbar.Paging'
    ],

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'RTContadores'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID_Pista', flex: 0.9,hidden:true ,
            filter: {
            type: 'string'
            }
         },
        { text: 'Funcionário', dataIndex: 'username', flex: 1.0 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Tipo de Equipamento',  dataIndex: 'Tipo_Equipamento', flex: 1.0 ,
            filter: {
                type: 'string'
            }},
        { text: 'Local', dataIndex: 'Local', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Contagem: ', dataIndex: 'Contagem', flex: 1.0 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Data', dataIndex: 'Data', flex: 1.0 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'ID Equipamento por Lavagem', dataIndex: 'ID_EquiPorLav_PP', flex: 1.0 ,hidden:true,
            filter: {
                type: 'string'
            }
        }
    ],

    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Pista');
            Ext.util.Cookies.set('cookieID_ContadoresRDP', id);

            var ID_EquiPorLav_PP = record.get('ID_EquiPorLav_PP');
            Ext.util.Cookies.set('cookieID_EquiLav', ID_EquiPorLav_PP);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/verificaUtilizador.php',
                success: function (response, opts) {
                    var Win = Ext.create("Ext.window.Window", {
                        title:'Contagem selecionada',
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


    GridAfterRender: function(gridRegistoTodosPosto){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});