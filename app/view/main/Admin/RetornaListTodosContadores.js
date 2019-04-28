Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.RetornaListTodosContadores', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.RetornaListTodosContadores',
    id: 'gridRegTodosContadores',

    xtype: 'mainRetornRegTodosPostosDia',

    requires: [
        'ConLogin.store.Admin.RetornaListTodosContadores',
        'ConLogin.view.main.Admin.GridEquiLav',
        'ConLogin.view.main.Admin.RegContagemEquiRTPSelect'

    ],

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'},

        height: 700
    },

    title:' Contadores de Todos os postos do dia',

    store: {
        type: 'RetornaListTodosContadores'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID Pista ',  dataIndex: 'ID_Pista',hidden:false, flex: 0.9 ,
            filter: {
            type: 'string'
            }},
        { text: 'Tipo Equipamento:',  dataIndex: 'Tipo_Equipamento', flex: 1.2 ,filter: {
                type: 'string'
            }},
        { text: 'Lavagem:', dataIndex: 'Local', flex: 0.8 ,
            filter: {
                type: 'string'
            }},
        { text: 'Contagem', dataIndex: 'Contagem', flex: 0.8 ,
            filter: {
                type: 'string'
            }},
        { text: 'Data da Atualização :', dataIndex: 'Data', flex: 0.8 ,
            filter: {
                type: 'string'
            }},
        { text: 'Utilizador :', dataIndex: 'username', flex: 0.8 ,
            filter: {
                type: 'string'
        }},
        { text: 'Número do equipamento :', dataIndex: 'Num_EquiLav', flex: 0.8 ,
            filter: {
                type: 'string'
            }}
    ],


    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Efetuar Pesquisa entre Datas',
                glyph: 43,
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Efetuar Pesquisa',
                            modal: true,
                            width: 780,
                            height: 420,

                            items: {
                                xtype: 'JuncaoRegContadorSearch'
                            }
                        });
                        myWin.show();
                    }
                }
            },
            {
                text: 'Listagem do mes anterior',

                glyph: 43,
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Efetuar Pesquisa',
                            modal: true,
                            width: 1100,
                            height: 420,

                            items: {
                                xtype: 'JuncaoSearchContMesAnt'
                            }
                        });
                        myWin.show();
                    }
                }
            },
            {
                text: 'Registar Contagem de um equipamento de um posto',

                glyph: 43,
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Registar Contagem de um Equipamento',
                            modal: true,


                            width: 655,
                            height: 500,
                            scroll:true,

                            items: {
                                xtype: 'GridRegContagemRDP'

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
            var id = record.get('ID_Pista');
            Ext.util.Cookies.set('cookieID_EquiLav', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/verificaUtilizador.php',
                success: function (response, opts) {
                    var Win = Ext.create("Ext.window.Window", {
                        title:'Contagem selecionada',
                        modal: true,
                        scrollable:true,

                        items: [{
                            xtype: 'JuncaoRegLogContadorTodosPostos2'
                        }]
                    });
                    Win.show();
                }

            })
        }
    },

    GridAfterRender: function(gridRegTodosContadores){
        setInterval(function(){
            grid.store.load();

        }, 120);
    }

});
