Ext.define('ConLogin.store.Admin.EquipamentosLavagemSelect', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaEquiLav',
    alias: 'store.EquiLavSelect',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaEquipamentoLavagemSelect.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});