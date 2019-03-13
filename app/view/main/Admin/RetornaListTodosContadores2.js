Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.RetornaListTodosContadores2', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.RetornaListTodosContadores2',
    id: 'gridRegTodosContadores2',

    xtype: 'mainRetornRegTodosPostosDia2',

    requires: [
        //'ConLogin.store.Admin.RetornaListTodosContadores'
    ],

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

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
        { text: 'Data :', dataIndex: 'Data', flex: 0.8 ,
            filter: {
                type: 'string'
            }},
        { text: 'Utilizador :', dataIndex: 'username', flex: 0.8 ,
            filter: {
                type: 'string'
            }}
    ],

    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Pista');
            Ext.util.Cookies.set('cookieID_Pista', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/verificaUtilizador.php',
                success: function (response, opts) {
                    var Win = Ext.create("Ext.window.Window", {
                        title:'Contagem selecionada',
                        modal: true,
                        items: [{
                            xtype: 'JuncaoRegLogContadorTodosPostos2'
                        }]
                    });
                    Win.show();
                }
            })
        }
    },

    GridAfterRender: function(gridRegTodosContadores2){
        setInterval(function(){
            grid.store.load();

        }, 1200);
    }

});
