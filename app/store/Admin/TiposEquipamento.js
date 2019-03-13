Ext.define('ConLogin.store.Admin.TiposEquipamento', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.TiposEquipamento',
    alias: 'store.TipoEquipamentox',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaTiposEquipamento.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});