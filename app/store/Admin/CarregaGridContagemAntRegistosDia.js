Ext.define('ConLogin.store.Admin.CarregaGridContagemAntRegistosDia', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaGridContagemAntRegistosDia',
    alias: 'store.CarregaGridContagemARD',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaGridContagem_DA_Dia.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});