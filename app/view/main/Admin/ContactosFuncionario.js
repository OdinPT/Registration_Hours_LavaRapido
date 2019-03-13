Ext.define('ConLogin.view.main.Admin.ContactosFuncionario', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactosFunc',

    id: 'gridContactosFunc',
    xtype: 'mainContactosFunc',

    requires: [
        'ConLogin.store.Admin.ContactosFuncionario'
    ],

    config: {
        autoLoad: true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    defaults: {
        closable: false,
        collapsible: true
    },

    store: {
        type: 'contactosFunc'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        { text: 'ID Contactos',  dataIndex: 'ID_Contactos', flex: 1.0 ,hidden:true,
            filter: {
                type: 'string'
            }},

        { text: 'Funcionário',  dataIndex: 'username', flex: 1.0 ,hidden:true,
            filter: {
                type: 'string'
            }},
        
        { text: 'Tipo de contacto', dataIndex: 'Tipo_Contacto', flex: 1.2 ,
            filter: {
                type: 'string'
            }
        },
        { text: 'Registo', dataIndex: 'Registo', flex: 3.0 ,
            filter: {
                type: 'string'
            }}

    ],

    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_Contactos');
                Ext.util.Cookies.set('cookieIDContactos', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php'

            })
        }
    },

    tbar: {
        defaultButtonUI: 'default',

        items: [
            {
                text: 'Apagar',

                glyph: 43,
                formBind: true,
                listeners: {
                    click: 'onClickApagaContacto'
                }
            }

        ]
    },


    GridAfterRender: function(gridContactosFunc){
        setInterval(function(){
            grid.store.load();
        }, 1);
    }
});