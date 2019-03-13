Ext.define('ConLogin.store.Admin.Funcionarios', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaFuncionarios',
    alias: 'store.Funcionarios',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaFuncionarios.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});