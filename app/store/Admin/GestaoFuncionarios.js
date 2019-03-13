Ext.define('ConLogin.store.Admin.GestaoFuncionarios', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Funcionarios',
    alias: 'store.FuncionariosFu',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/CarregaFuncionarios.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});