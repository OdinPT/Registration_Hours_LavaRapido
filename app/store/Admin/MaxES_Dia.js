Ext.define('ConLogin.store.Admin.MaxES_Dia', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.MaxEntradasSaidasLocais',

    alias: 'store.maxESdia',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/Max_ES_dia.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
          //  console.log('loaded max entradas e saidas dos locais do dia');
        }
    }

});