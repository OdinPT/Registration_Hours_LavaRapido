Ext.define('ConLogin.store.Admin.EquipamentosLavagemSelect2', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaEquiLav',
    alias: 'store.EquiLavagemSelect2',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaEquipamentoLavagemSelect2.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});