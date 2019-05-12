Ext.Loader.setPath('Ext.ux', '../ux/');
Ext.define('ConLogin.view.main.Admin.GridEquiLavagemSelect', {
    extend: 'Ext.grid.Panel',

    id: 'gridEquiLavagem',

    controller: 'adminController',

    requires: [
        'ConLogin.store.Admin.EquipamentosLavagemSelect',
        'ConLogin.view.main.Admin.AdministracaoController',
        'Ext.toolbar.Paging'
    ],

    xtype: 'mainlistEquiLavSelect',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'EquiLavSelect'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID',  dataIndex: 'ID_EquiLav', flex: 0.2 ,hidden:true,
            filter: {
            type: 'string'
            }},
        { text: 'Local :',  dataIndex: 'Local', flex: 1.2 ,hidden:true,
            filter: {
                type: 'string'
            }},
        { text: 'Tipo Equipamento :',  dataIndex: 'Tipo_Equi', flex: 1.2,hidden:true,
            filter: {
                type: 'string'
            }},
        { text: 'Numero do Equipamento:',  dataIndex: 'NumEqui', flex: 1.2 ,hidden:true,
            filter: {
                type: 'string'
            }},
        { text: 'Equipamento :',  dataIndex: 'Desc_EquiLav', flex: 1.2 ,
            filter: {
                type: 'string'
            }}
    ],

    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_EquiLav');
            Ext.util.Cookies.set('cookiID_EquiLav', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php'

            })
        }
    },

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Apagar Registo Selecionado na grid',

                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaEquipamentoLavagem'
                }
            }

        ]
    },

    GridAfterRender: function(gridEquiLavagem){
        setInterval(function(){
            grid.store.load();
        }, 100);
    }
});