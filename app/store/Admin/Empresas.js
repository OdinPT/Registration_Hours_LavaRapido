Ext.define('ConLogin.store.Admin.Empresas', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaEmpresa',
    alias: 'store.Empresas',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaEmpresas.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});