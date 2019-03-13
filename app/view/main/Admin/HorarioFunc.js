Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.HorarioFunc', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.HorarioFunc',

    id: 'gridHorarioFunc',
    xtype: 'mainHorarioFunc',

    requires: [
//        'ConLogin.store.Admin.HorariosFuncionarios',
        'Ext.toolbar.Paging'
    ],

    defaults: {
        closable: false,
        collapsible: true

    },

    store: {
        type: 'FuncHorarios'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID_Registo ',  dataIndex: 'ID_Prev',hidden:true, flex: 0.9 ,
            filter: {
                type: 'string'
            }},
        {text: 'Username ',  dataIndex: 'username',hidden:true, flex: 0.9 ,
            filter: {
                type: 'string'
            }},
        { text: 'Tipo Registo:',  dataIndex: 'Tipo_Registo', flex: 1.0 ,
            filter: {
                type: 'string'
            }},
        { text: 'Hora', dataIndex: 'Hora_Prevista', flex: 0.8 ,
            filter: {
                type: 'string'
            }}
    ],


    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Prev');
            Ext.util.Cookies.set('cookieID_HorarioFunc', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php'

            })
        }
    },

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Apagar Registo ',

                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaHorario'
                }
            }

        ]
    },


    GridAfterRender: function(gridHorarioFunc){
        setInterval(function(){
            grid.store.load();

        }, 120);
    }

});
