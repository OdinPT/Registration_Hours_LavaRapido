Ext.define('ConLogin.store.Admin.HorariosFuncionarios', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Log_Horarios',
    alias: 'store.FuncHorarios',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/LogHorasFuncionario.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});