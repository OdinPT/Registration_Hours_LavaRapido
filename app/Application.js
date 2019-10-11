/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ConLogin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ConLogin',

    stores: [
        'ConLogin.store.Personnel',
        'ConLogin.store.Admin.Funcionarios',
        //'ConLogin.store.Admin.EmpresaFuncionario',
        //'ConLogin.store.Admin.Locais',
        //'ConLogin.store.Admin.TipoFuncionario',
        //'ConLogin.store.Registo_Horas.Localfuncionarios',
        'ConLogin.store.Registo_Horas.RegistoHoras',
        'ConLogin.store.Registo_Horas.RegistoHorasDia',
        'ConLogin.store.Registo_Horas.RegistoHorasSelecionadas',
        'ConLogin.store.Admin.LocalSelecionado',
        'ConLogin.store.Admin.FuncionarioSelecionado',
        'ConLogin.store.Admin.EmpresaSelecionada',
        'ConLogin.store.Admin.FuncLocais',
        'ConLogin.store.Admin.CarregaFuncEmpSelec',
        'ConLogin.store.Admin.ToleranciaSelecionada',
        //'ConLogin.store.Admin.RegHorasFunc',
        'ConLogin.store.Registo_Horas.RegistosTodosPostoSelect',
        'ConLogin.store.Admin.EquipamentosLavagemSelect2',
        //'ConLogin.store.Admin.RetornaRequestPesquisa2Dates',
        //'ConLogin.store.Admin.CarregaWinContagem',
        'ConLogin.store.Registo_Horas.RegistosTodosPostoSelectDiario',
        'ConLogin.store.Admin.CarregaGridEquiLavSelect',
        'ConLogin.store.Registo_Horas.RegistosTodosPostoSelect1',
        'ConLogin.store.Admin.CarregaGridContagemDiaAnt2',
        'ConLogin.store.Admin.CarregaInFuncRD',
        'ConLogin.store.Admin.CarregaInLastRegFuncRD'


    ],

    views: [
        'ConLogin.view.login.Login',
        'ConLogin.view.main.Main'
    ],

    launch: function () {
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("ConLoginLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });
    },

    //launch: function () {
        // TODO - Launch the application
    //},

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
