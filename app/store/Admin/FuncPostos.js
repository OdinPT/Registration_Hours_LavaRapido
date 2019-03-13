Ext.define('ConLogin.store.Admin.FuncPostos', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.FuncPostos',
    alias: 'store.FuncPostos',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/FuncionariosPostos.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});