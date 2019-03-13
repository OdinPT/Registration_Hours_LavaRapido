Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.ListFuncionario', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.Funcionarios',
    id: 'gridFuncionario',

    requires: [
        'ConLogin.store.Admin.Funcionarios',
        'Ext.toolbar.Paging'
    ],
    xtype: 'mainlistFunc',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'Funcionarios'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID_funcionario', flex: 0.2 ,hidden:true,
            filter: {
            type: 'string'
            }},
        { text: 'Nome :',  dataIndex: 'username', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Passe', dataIndex: 'pass', flex: 0.8, hidden:true ,
            filter: {
                type: 'string'
            }},

        { text: 'Tipo de funcionário :', dataIndex: 'tipo_Funcionario', flex: 1.5 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Acesso ao Sistema:', dataIndex: 'acesso', flex: 1 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Pode válidar posto: ', dataIndex: 'VL', flex: 1 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Contacto Pŕe-defenido ? ', dataIndex: 'Contacto_predef', flex: 1 ,hidden:true,
            filter: {
                type: 'string'
            }
        },
        { text: 'Tolerância: ', dataIndex: 'Hora_Tolerancia', flex: 0.7 ,
            filter: {
                type: 'string'
            }
        }
    ],

    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_funcionario');
            Ext.util.Cookies.set('cookieID_funcionario', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php',
                success: function (response, opts) {
                    var myWin = Ext.create("Ext.window.Window", {
                        title:'Informação do funcionário',
                        frame: false,
                        modal: true,
                        scrollable: true,
                        autoScroll: true,
                        scroll:true,
                        width: 1400,

                        items: [{
                            xtype: 'MostraRegFuncXL'
                        }]

                    });
                    myWin.show();
                }
            })
        }
    },

    GridAfterRender: function(gridFuncionario){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});