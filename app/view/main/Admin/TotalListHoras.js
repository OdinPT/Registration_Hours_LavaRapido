Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.TotalListHoras', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.Rhoras2',
    id: 'gridRhoras2',
    xtype: 'mainTotallistHoras',

    requires: [
        'ConLogin.store.Admin.TotalRegistoHoras',
        'ConLogin.view.main.Admin.MostraRegisto',
        'Ext.toolbar.Paging'
    ],

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'},
        height: 700
    },

    title: 'Registos de Todos os Postos',

    store: {
        type: 'Rhoras2'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID_Reg_horas', flex: 0.9, hidden:false,
            filter: {
            type: 'string'
            }},
        { text: 'Nome Funcionário',  dataIndex: 'username', flex: 1.0 ,
            filter: {
                type: 'string'
            }},
        { text: 'Hora', dataIndex: 'Hora_entradaManha_rh', flex: 1.0 ,
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
            }},
        { text: 'Registo Visível :', dataIndex: 'Descrisao', flex: 1 ,
            filter: {
                type: 'string'
            }}
    ],

    tbar: {
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
                                // Refazer
                              xtype: 'RegistaHorasdoFuncionario'

                            }
                        });
                        myWin.show();
                    }
                }
            }

        ]
    },
    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Reg_horas');
            Ext.util.Cookies.set('cookieID_RegHoras', id);

            var user = record.get('username');
            Ext.util.Cookies.set('cookieUser2', user);

            var Local = record.get('Descricao_Local');
            Ext.util.Cookies.set('C', Local);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/verificauso.php',
                success: function (response, opts) {
                    var myWin = Ext.create("Ext.window.Window", {
                        title: 'Editar Registo Selecionado',
                        modal: true,

                        items: [{
                            xtype: 'MostraRegTodosPostos'

                        }]

                    });
                    myWin.show();
                }
            })
        }
    },

    GridAfterRender: function(gridRhoras2){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});