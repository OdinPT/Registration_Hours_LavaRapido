Ext.define('ConLogin.store.Admin.MaxEntradasEsaidasLocais', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.MaxEntradasSaidasLocais',

    alias: 'store.reg_maxEntradaseSaidasLocais',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/MaxEntradasEsaidasLocais.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
            //console.log('loaded max entradas e saidas dos locais');
        }
    }

});