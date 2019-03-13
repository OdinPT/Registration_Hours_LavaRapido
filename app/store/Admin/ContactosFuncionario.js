Ext.define('ConLogin.store.Admin.ContactosFuncionario', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.ContactosFunc',
    alias: 'store.contactosFunc',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/ContactosFunc.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});