Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.GridTiposEquipamento', {
    extend: 'Ext.grid.Panel',
    id: 'GridTEqui',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.store.Admin.TiposEquipamento'
    ],

    controller: 'adminController',


    xtype: 'GridTiposEquipamento',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'TipoEquipamentox'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID', flex: 0.8 ,hidden:true,
            filter: {
            type: 'string'
        }},
        { text:  'Tipos de Equipamento:',  dataIndex: 'Tipo', flex: 1.2 ,hidden:false,
            filter: {
                type: 'string'
        }}
    ],
    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID');
            Ext.util.Cookies.set('C', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php'

            })
        }
    },

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Apagar Registo Selecionado',

                glyph: 43,

                listeners: {
                    click: 'onClickApagaTipoEqui'
                }
            }

        ]
    },

    GridAfterRender: function(GridTEqui){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});