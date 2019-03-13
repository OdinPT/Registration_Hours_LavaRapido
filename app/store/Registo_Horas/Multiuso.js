Ext.define('ConLogin.store.Registo_Horas.Multiuso', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Multiusos',
    alias: 'store.Multiuso',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/multiusoLE.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});