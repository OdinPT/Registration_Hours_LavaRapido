Ext.define('ConLogin.store.Admin.TotalRegistoHoras', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Registo_Horas',
    alias: 'store.Rhoras2',


    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/CarregaTotalRegHoras.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});