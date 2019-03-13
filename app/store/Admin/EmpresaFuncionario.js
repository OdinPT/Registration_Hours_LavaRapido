Ext.define('ConLogin.store.Admin.EmpresaFuncionario', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaFuncionarios_Empresa',
    alias: 'store.EmpresaFunc',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/CarregaFuncionarios_Empresa.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});