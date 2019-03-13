Ext.define('ConLogin.store.Admin.Carrega_FuncEmpSelect', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaFuncionarios_Empresa',
    alias: 'store.Carrega_FuncEmpSelect',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/Carrega_FuncEmpSelect.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});