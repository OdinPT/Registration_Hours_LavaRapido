
Ext.define('ConLogin.store.Registo_Horas.RegistoHoras', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Registo_Horas',
    alias: 'store.Rhoras',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Registo_Horas_List/CarregaRegHoras.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});