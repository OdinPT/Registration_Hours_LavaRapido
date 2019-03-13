Ext.define('ConLogin.store.Admin.CarregaGridEquiLav', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.GridRegisto_EquiLav',
    alias: 'store.carregaRegEquiLav',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaGridRegEquiLav.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});