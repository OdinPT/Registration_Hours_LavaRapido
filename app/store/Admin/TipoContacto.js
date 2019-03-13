Ext.define('ConLogin.store.Admin.TipoContacto', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaTipoContactos',
    alias: 'store.TipoContact',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaTipoContacto.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});