Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.TotalListContadores', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.RegContadores',

    id: 'gridContadores',
    xtype: 'mainTotalContadores',

    requires: [
        'ConLogin.store.Admin.TotalRegistosContadores',
        'ConLogin.view.main.FormRegistoHoras.MostraRegistoPostoSelect',
        'Ext.toolbar.Paging'
    ],

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'},
        height: 550
    },

    title: 'Registos dos contadores de Todos os postos',

    store: {
        type: 'RegContadores'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID_Pista', flex: 0.9, hidden:false,
            filter: {
            type: 'string'
            }},
        { text: 'Equipamento: ',  dataIndex: 'Tipo_Equipamento', flex: 1.0 ,
            filter: {
                type: 'string'
            }},
        { text: 'Contagem: ', dataIndex: 'Contagem', flex: 0.8 ,
            filter: {
                type: 'string'
            }},
        { text: 'Local: ', dataIndex: 'Local', flex: 1 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Utilizador: ', dataIndex: 'username', flex: 1 ,
            filter: {
                type: 'string'
            }},
        { text: 'Data do Registo: ', dataIndex: 'Data', flex: 1 ,
            filter: {
                type: 'string'
            }}
    ],

   /* tbar: {
        defaultButtonUI: 'default',

        items: [
          {
                text: 'Registar Horas de um Funcionário',
                glyph: 43,
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Registar Horas de um Funcionário',
                            modal: true,
                            width: 700,
                            height: 270,

                            items: {
                                xtype: 'RegistaHorasdoFuncionario'
                            }
                        });
                        myWin.show();
                    }
                }
            }

        ]
    },
    */

    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Pista');
            Ext.util.Cookies.set('cookieID_Pista', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/verificaUtilizador.php',
                success: function (response, opts) {
                    var Win = Ext.create("Ext.window.Window", {
                        title: 'Contagem Selecionada',
                        modal: true,
                        items: [{
                            xtype: 'fieldMostraRegPostoSelect2'
                        }]
                    });
                    Win.show();
                }

            })
        }
    },
    GridAfterRender: function(gridContadores){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});