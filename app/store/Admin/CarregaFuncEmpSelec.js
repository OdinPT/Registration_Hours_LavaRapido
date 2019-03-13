Ext.define('ConLogin.store.Admin.CarregaFuncEmpSelec', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaFuncionarios_Empresa',
    alias: 'store.reg_FuncEmpresa_select',
    storeId: 'RegFuncEmpSelect',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/CarregaFuncionarios_EmpresaSelect.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
            //console.log('loaded func emp  selecionado');
        }
    }

});