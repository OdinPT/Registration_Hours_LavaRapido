Ext.define('ConLogin.view.main.Admin.AdministracaoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.adminController',

    onClickMudaEstadoReg:function(){
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Admin/AlteraEstadoRegHoras.php',
                success: function (response, opts){

                    Ext.MessageBox.alert('Sucesso','registo Apagado!');

                    function hide_message() {
                        Ext.defer(function() {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridRhorasDia').getStore().load();
                            Ext.getCmp('gridRhoras').getStore().load();
                            Ext.getCmp('gridRhoras2').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();


                            Ext.getCmp('gridRegTodosContadores').getStore().load();
                            //Ext.getCmp('GridFuncionariosPosto0').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();

                            var win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();
                            };
                        }, 1200);
                    }
                    hide_message();
                },

                failure: function (){alert('Erro... Registo não Editado');},
                params: {
                    ID_Reg_horas: Ext.getCmp('ID_Reg_horas').getValue()
                }
            });

    },

    onClickEditaReg:function(){
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Edit/editaRegistoHoras.php',
                success: function (response, opts){

                    Ext.MessageBox.alert('Sucesso','registo editado!');

                    function hide_message() {
                        Ext.defer(function() {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridRhorasDia').getStore().load();
                            Ext.getCmp('gridRhoras').getStore().load();
                            Ext.getCmp('gridRhoras2').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();
                            var win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();
                            };

                        }, 1200);
                    }
                    hide_message();
                },

                failure: function (){alert('Erro... Registo não Editado');},
                params: {
                    Descricao_tipo_regg: Ext.getCmp('Descricao_tipo_regg').getValue(),
                    Descricao_Locall: Ext.getCmp('Descricao_Locall').getValue(),
                    Hora_entradaManha_rhh: Ext.getCmp('Hora_entradaManha_rhh').getValue()
                }
            });
    },

    onClickApagaReg:function(){     //Apaga registo Horas
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/Del.php',
                success: function (response, opts){

                    Ext.MessageBox.alert('Sucesso','registo editado!');

                    function hide_message() {
                        Ext.defer(function() {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridRhorasDia').getStore().load();
                            Ext.getCmp('gridRhoras').getStore().load();
                            Ext.getCmp('gridRhoras2').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();

                            Ext.getCmp('grid_ES_Dia').getStore().load();

                            var win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();
                            };

                        }, 1200);
                    }
                    hide_message();
                },

                failure: function (){alert('Erro... Registo não Editado');},
                params: {
                    Tipo_validacao: Ext.getCmp('Tipo_validacao16').setValue('1.6'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao16').getValue()
                }
            });
    },
    onClickRegistarEntrada: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistaEntrada.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert(' Registada a Entrada', 'Com Sucesso!');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();

                            Ext.getCmp('gridRhoras').getStore().load();
                            Ext.getCmp('gridRhorasDia').getStore().load();
                            Ext.getCmp('gridRhoras2').getStore().load();
                            Ext.getCmp('grid_ES_Dia').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();

                            Ext.getCmp('grid_TotalRegPostos').getStore().load();

                        }, 1200);
                    }

                    hide_message();
                },

                failure: function (){
                    alert('Erro...');
                    Ext.MessageBox.alert(' Registada a Entrada', 'Sem Sucesso!');
                },

                params: {
                    ID_Local: Ext.getCmp('ID_Local').getValue(),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao').setValue('1'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao').getValue()
                }
            });

    },
    onClickRegistarSaida: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistaEntrada.php',
                success: function (response, opts) {
                    Ext.MessageBox.alert(' Registado', 'Com Sucesso!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridRhoras').getStore().load();
                            Ext.getCmp('gridRhorasDia').getStore().load();
                            Ext.getCmp('gridRhoras2').getStore().load();
                            Ext.getCmp('grid_ES_Dia').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();

                            Ext.getCmp('gridRhorasDia').getStore().load();
                            Ext.getCmp('grid_TotalRegPostos').getStore().load();

                        }, 1200);
                    }

                    hide_message();
                },

                failure: function (){
                    alert('Erro...');
                },

                params: {
                    ID_Local: Ext.getCmp('ID_Local').getValue(),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao').setValue('2'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao').getValue()
                }
            });


    },

    onClickEditaRegRTP: function() {        //reg 1.6
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Edit/Edit.php',
                success: function (response, opts){

                    Ext.MessageBox.alert('Sucesso','registo editado!');

                    function hide_message() {
                        Ext.defer(function() {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridRhorasDia').getStore().load();
                            Ext.getCmp('gridRhoras').getStore().load();
                            Ext.getCmp('gridRhoras2').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();

                            Ext.getCmp('grid_ES_Dia').getStore().load();

                            var win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();
                            };

                        }, 1200);
                    }
                    hide_message();
                },

                failure: function (){alert('Erro... Registo não Editado');},
                params: {
                    ID_Reg_horas: Ext.getCmp('ID_Reg_horas').getValue(),
                    Descricao_tipo_regg: Ext.getCmp('Descricao_tipo_regg').getValue(),
                    usernamee :Ext.getCmp('usernamee').getValue(),
                    Hora_entradaManha_rhh: Ext.getCmp('Hora_entradaManha_rhh').getValue(),

                    Descricao_Localll: Ext.getCmp('Descricao_Localll').getValue(),

                    Tipo_validacao: Ext.getCmp('Tipo_validacao16').setValue('1.6'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao16').getValue()
                }
            });
    },

    onClickRegistaContactoFunc: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistaContactoFunc.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', ' Associação registada!');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridContactosFunc').getStore().load();

                        }, 1200);
                    }

                    hide_message();
                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Associação já existente!');
                },

                params: {
                    TipoContacto: Ext.getCmp('TipoContacto').getValue(),
                    Descricao: Ext.getCmp('Descricao').getValue()
                }
            });
    },

    onClickRegistaLimEquiLav: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarLimaxPosto.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', ' Limite definido com sucesso');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridLimConPosto').getStore().load();

                        }, 1200);
                    }

                    hide_message();
                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Esse limite já existe atualmente!');
                },

                params: {
                    LimMaxEquiLav: Ext.getCmp('LimMaxEquiLav').getValue(),
                    IDLocalReglimEqui: Ext.getCmp('IDLocalReglimEqui').getValue(),
                    TipoEquipamentoRegLimEqui: Ext.getCmp('TipoEquipamentoRegLimEqui').getValue()
                }
            });
    },

    onClickRegistaEmpresa: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarEmpresa.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção ', ' Empresa Registada. ');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEmpresas').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();

                        }, 1200);
                    }

                    hide_message();
                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção', 'Empresa não registada!');
                },

                params: {
                    nomeEmpresa: Ext.getCmp('nomeEmpresa').getValue(),
                    NiffEmpresa: Ext.getCmp('NiffEmpresa').getValue()

                }
            });

    },

    onClickRegistaEmpresaFunc0: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarEmpresa_Func0.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção ', 'Associação Realizada!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            //Ext.getCmp('gridEmpresa_func').getStore().load();
                            Ext.getCmp('gridEmpresa_func2').getStore().load();
                            Ext.getCmp('gridEmpresa_func0').getStore().load();



                        }, 1200);
                    }

                    hide_message();
                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção', 'Já existe a associação pretendida registada no Sistema!');
                },

                params: {

                    ID_empresax2: Ext.getCmp('ID_empresax2').getValue()

                }
            });
    },
    onClickRegistaEmpresaFunc: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarEmpresa_Func.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção ', 'Associação Realizada!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEmpresa_func').getStore().load();
                            Ext.getCmp('gridEmpresa_func2').getStore().load();


                        }, 1200);
                    }

                    hide_message();
                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção', 'Já existe a associação pretendida registada no Sistema!');
                },

                params: {
                    ID_funcionario: Ext.getCmp('ID_funcionario').getValue(),
                    IDEmpresa: Ext.getCmp('IDEmpresa').getValue()

                }
            });
    },
    onClickRegistaFuncionario: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarFuncionario.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', 'Funcionário criado com sucessos');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridRhoras').getStore().load();
                            Ext.getCmp('gridFuncionario').getStore().load();
                            Ext.getCmp('GridFuncionariosPosto0').getStore().load();
                        }, 1200);
                    }

                    hide_message();
                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Esse nome de utilizador já existe no sistema');
                },

                params: {
                    username: Ext.getCmp('username').getValue(),
                    pass: Ext.getCmp('pass').getValue(),
                    niff: Ext.getCmp('niff').getValue(),
                    Contact: Ext.getCmp('Contact').getValue(),
                    TF: Ext.getCmp('TF').getValue(),
                    ID_Tolerancia: Ext.getCmp('ID_Tolerancia').getValue(),
                    LG: Ext.getCmp('LG').checked ? 1 : 0,
                    CoockieFunc: Ext.getCmp('CoockieFunc').checked ? 1 : 0

                }
            });
    },

    onClickRegistaLocal: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarLocais.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert(' Atenção ', 'Local Registado ');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridLocais').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();
                        }, 1200);
                    }

                    hide_message();
                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Nome do Local já existe registado no sistema!');
                },

                params: {
                    Local: Ext.getCmp('Local').getValue(),
                    CPostal: Ext.getCmp('CPostal').getValue(),
                    ID_empresa: Ext.getCmp('ID_empresa').getValue()
                }
            });
    },

    onClickRegistaLocalFuncionario: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarFuncLocal.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', ' Associação registada!');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridFuncionariosPosto0').getStore().load();

                        }, 1200);
                    }

                    hide_message();
                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Associação já existente!');
                },

                params: {
                   // ID_funcionariox: Ext.getCmp('ID_funcionariox').getValue(),
                    ID_Localx: Ext.getCmp('ID_Localx').getValue()
                }
            });
    },

    onClickEditaEmpresa: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Edit/Edit.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', ' Edição efetuada com sucesso no sistema!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEmpresas').getStore().load();
                            Ext.getCmp('gridEmpresa_func2').getStore().load();

                        }, 1200);
                    }

                    var win = Ext.WindowManager.getActive();
                    if (win) {
                        win.close();
                    }
                    ;

                    hide_message();
                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção', 'O nome da empresa registado no sitema!');
                },

                params: {
                    Nome_empresa: Ext.getCmp('Nome_empresa').getValue(),
                    Niff_empresa: Ext.getCmp('Niff_empresa').getValue(),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao17').setValue('1.7'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao17').getValue()
                }

            });
    },
    onClickApagaEmpresa: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/Del.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Sucesso', 'registo Apagado!');
                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEmpresas').getStore().load();
                        }, 1200);

                        var win = Ext.WindowManager.getActive();
                        if (win) {
                            win.close();
                        };

                    }

                    hide_message();

                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção', 'Alteração não efetuada!');
                },

                params: {
                    Tipo_validacao: Ext.getCmp('Tipo_validacao17').setValue('1.7'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao17').getValue()
                }
                });

    },
    onClickEditFunc: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Edit/Edit.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', 'Registada a alteração no funcionário');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridFuncionario').getStore().load();

                        }, 1200);

                        var win = Ext.WindowManager.getActive();
                        if (win) {
                            win.close();
                        };
                    }

                    hide_message();

                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção', 'Nome do funcionário já existe no sistema');
                },

                params: {       //
                    username02: Ext.getCmp('username02').getValue(),
                    pass02: Ext.getCmp('pass02').getValue(),
                    NIFF_funcionario: Ext.getCmp('NIFF_funcionario').getValue(),
                    TFx: Ext.getCmp('TFx').getValue(),
                    login: Ext.getCmp('login').checked ? 1 : 0,
                    Ccookie_funcionario: Ext.getCmp('Ccookie_funcionario').checked ? 1 : 0,
                    ID_Toleranciax: Ext.getCmp('ID_Toleranciax').getValue(),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao12').setValue('1.2'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao12').getValue()


                }

            });
    },

    onClickApagafuncionario: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/Del.php',
                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', 'registo Apagado!');

                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridFuncionario').getStore().load();
                            Ext.getCmp('gridLogRhoras').getStore().load();
                        }, 1200);

                        var win = Ext.WindowManager.getActive();
                        if (win) {
                            win.close();
                        };

                    }

                    hide_message();

                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção', 'Registo não apagado !');
                },
                params: {       //
                    Tipo_validacao: Ext.getCmp('Tipo_validacao12').setValue('1.2'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao12').getValue()


                }

            });
    },

    onClickEditaLocal: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Edit/Edit.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', 'Registada a alteração no posto');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridLocais').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();
                            Ext.getCmp('gridEmpresa_func2').getStore().load();

                            var win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();
                            };

                        }, 1200);



                    }

                    hide_message();
                },

                failure: function (){
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção', 'Nome do posto já existente no sistema');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridLocais').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();
                            var win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();
                            };

                        }, 1200);
                    }

                    hide_message();

                },

                params: {
                    NomeLocal: Ext.getCmp('NomeLocal').getValue(),
                    CodigoPostal: Ext.getCmp('CodigoPostal').getValue(),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao14').setValue('1.4'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao14').getValue()


                }

            });
    },
    onClickApagaLocal:function(){
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/Del.php',
                success: function (response, opts){
                    Ext.MessageBox.alert('Sucesso','registo Apagado!');
                    function hide_message() {

                        Ext.defer(function() {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridLocais').getStore().load();
                            Ext.getCmp('gridMaxEntSaidasLocais').getStore().load();
                        }, 1200);

                        var win = Ext.WindowManager.getActive();
                        if (win) {
                            win.close();
                        };
                    }

                    hide_message();
                },
                failure: function (){
                    alert('Erro...');
                    Ext.MessageBox.alert(' Registada a alteração no posto', 'Sem Sucesso!');
                },
                params: {
                    Tipo_validacao: Ext.getCmp('Tipo_validacao14').setValue('1.4'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao14').getValue()
                }

            });
    },

    onClickApagaLF: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/Del.php',
                success: function (response, opts) {
                    Ext.MessageBox.alert('Sucesso', 'registo Apagado!');

                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridFuncContactos').getStore().load();
                        }, 1200);

                        var win = Ext.WindowManager.getActive();
                        if (win) {
                            win.close();
                        };
                    }

                    hide_message();

                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Registada a alteração no posto', 'Sem Sucesso!');
                },

                params: {
                    Tipo_validacao: Ext.getCmp('Tipo_validacao15').setValue('1.5'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao15').getValue()

                }


            });
    },

    onClickEditaLocalFuncionario: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Edit/Edit.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert(' Atenção', 'Associação registada!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridFuncContactos').getStore().load();

                        }, 1200);
                        var win = Ext.WindowManager.getActive();
                        if (win) {
                            win.close();
                        };

                    }
                    hide_message();
                },

                failure: function (){
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção','Operação não efetuada');
                },

                params: {
                    usernamee: Ext.getCmp('usernamee').getValue(),
                    Locaiss: Ext.getCmp('Locaiss').getValue(),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao15').setValue('1.5'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao15').getValue()
                }

            });
    },

    onClickEditaContdiario: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Edit/Edit.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert(' Atenção', 'registado!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridFuncContactos').getStore().load();
                            Ext.getCmp('gridRegistoPosto').getStore().load();
                            Ext.getCmp('gridRegTodosContadores').getStore().load();

                        }, 1200);

                    }
                    hide_message();
                },

                failure: function (){
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção','Operação não efetuada');
                },

                params: {
                    Tipo_Equipamentoz: Ext.getCmp('Tipo_Equipamentoz').getValue(),

                    Localz: Ext.getCmp('Localz').getValue(),
                    Contagemz: Ext.getCmp('Contagemz').getValue(),

                    Tipo_validacao: Ext.getCmp('Tipo_validacao19').setValue('1.9'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao19').getValue()
                }

            });
    },
    onClickEditaContdiario2: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Edit/EditRegPostoSelect.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert(' Atenção', 'registado!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            //Ext.getCmp('gridRegistoPosto').getStore().load();
                            Ext.getCmp('gridRegTodosContadores').getStore().load();

                        }, 1200);

                    }
                    hide_message();
                },

                failure: function (){
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção','Operação não efetuada');
                },

                params: {
                    Tipo_Equipamentoz: Ext.getCmp('TipoEquiz').getValue(),
                    Dataz: Ext.getCmp('DataPPz').getValue(),
                    Localz: Ext.getCmp('Localz').getValue(),
                    Contagemz: Ext.getCmp('ContagemPPz').getValue(),
                    NumEquiz: Ext.getCmp('NumEquiz').getValue()

                }

            });
    },
    onClickSearchRegCont: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Pesquisa/Pesquisa2Dates.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert(' Atenção', 'Pesquisa Efetuada e registada!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            //Ext.getCmp('gridReqPesquisa').getStore().load();
                            Ext.getCmp('gridSearch2D').getStore().load();

                        }, 120);

                    }
                    hide_message();
                },

                failure: function (){
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção','Operação não efetuada');
                },

                params: {
                    Datainicio: Ext.getCmp('Datainicio').getValue(),
                    DateFim: Ext.getCmp('DateFim').getValue()
                }
            });
    },

    onClickSearchRegContMensal: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Pesquisa/CarregaRequestPesquisa.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert(' Atenção', 'Pesquisa Efetuada e registada!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide()
                            //Ext.getCmp('gridReqPesquisa2').getStore().load();
                            Ext.getCmp('gridReqPesquisa2DATEs').getStore().load();

                        }, 120);

                    }
                    hide_message();
                },

                failure: function (){
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção','Não existe Registos do mês pretendido');
                },

                params: {
                    numMes: Ext.getCmp('numMes').getValue()

                }
            });
    },

    onClickApagaContadorPP: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/Del.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Sucesso', 'registo Apagado!');
                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();

                            //Ext.getCmp('gridRegistoPosto').getStore().load();
                            Ext.getCmp('gridRegTodosContadores').getStore().load();

                            var win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();
                            };

                        }, 1200);
                    }
                    hide_message();

                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Registada a alteração no posto', 'Sem Sucesso!');
                },

                params: {
                    Tipo_validacao: Ext.getCmp('Tipo_validacao20').setValue('13'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao20').getValue()
                }

            });

    },

    onClickApagaEF: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/Del.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Sucesso', 'registo Apagado!');
                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEmpresa_func').getStore().load();

                            var win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();
                            };

                            }, 1200);
                    }
                    hide_message();

                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Registada a alteração no posto', 'Sem Sucesso!');
                },

                params: {
                    IDEmpresa3: Ext.getCmp('IDEmpresa3').getValue(),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao11').setValue('1.1'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao11').getValue()
                }

            });

    },
    onClickApagaEF0: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/Del.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Sucesso', 'registo Apagado!');
                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEmpresa_func0').getStore().load();

                        }, 1200);
                    }
                    hide_message();

                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Registada a alteração no posto', 'Sem Sucesso!');
                }
            });

    },
    onClickEditaReEF: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Edit/Edit.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert(' Registada a alteração', 'Com Sucesso!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEmpresa_func').getStore().load();
                            Ext.getCmp('gridEmpresa_func2').getStore().load();

                        }, 1200);
                        var win = Ext.WindowManager.getActive();
                        if (win) {
                            win.close();
                        };
                    }
                    hide_message();
                },

                failure: function (){
                    alert('Erro...');
                    Ext.MessageBox.alert(' Registada a alteração ', 'Sem Sucesso!');
                },

                params: {
                    IDEmpresa3: Ext.getCmp('IDEmpresa3').getValue(),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao11').setValue('1.1'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao11').getValue()
                }

            });
    },

    onClickRegistaTolerancia: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarTolerancia.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', 'Funcionário criado com sucessos');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridTolerancias').getStore().load();

                        }, 1200);
                    }

                    hide_message();
                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Esse nome de utilizador já existe no sistema');
                },

                params: {
                    temptolerancia: Ext.getCmp('temptolerancia').getValue()

                }
            });
    },
    onClickApagaTolerancia: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/Del.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Sucesso', 'registo Apagado!');
                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridTolerancias').getStore().load();

                            var win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();
                            };

                        }, 1200);
                    }
                    hide_message();

                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Registada a alteração na Tolerância', 'Sem Sucesso!');
                },
                params: {

                    Tipo_validacao: Ext.getCmp('Tipo_validacao').setValue('1.8'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao').getValue()

                }

            });

    },

    onClickRegistaHorarioFunc: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistaHorarioFunc.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', 'Horário Definido com sucesso');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridHorarioFunc').getStore().load();

                        }, 1200);
                    }

                    hide_message();
                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Não foi possivel introduzir');
                },

                params: {
                    TipoRegistoRegHoras: Ext.getCmp('TipoRegistoRegHoras').getValue(),
                    HoraFunc: Ext.getCmp('HoraFunc').getValue()

                }
            })
    },

    onClickRegistEquipamentoLavagem: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/Insert.php',

                success: function (response, opts){
                    Ext.MessageBox.alert('Registo','Efetuado com Sucesso!');

                    function hide_message() {
                        Ext.defer(function() {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEquiLavagem').getStore().load();

                            var win = Ext.WindowManager.getActive();
                            if (win) {
                                win.close();
                            };

                        }, 1100);
                    }
                    hide_message();

                },
                failure: function (){alert('Registo não efetuado...');
                    Ext.MessageBox.alert('ATENÇÃO ','Não foi possivel associar o Equipamento à lavagem');
                },

                params: {
                    TipoRegisto: Ext.getCmp('TipoRegisto').getValue(),
                    NumEquipamento: Ext.getCmp('NumEquipamento').getValue()
                }});

    },
    onClickRegistaHorasFuncionario: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistaHorasFuncionario.php',

                success: function (response, opts){
                    Ext.MessageBox.alert('Registo','Efetuado com Sucesso!');

                    function hide_message() {
                        Ext.defer(function() {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridRhoras').getStore().load();
                            Ext.getCmp('gridFuncionario').getStore().load();
                            Ext.getCmp('gridRhorasDia').getStore().load();
                            Ext.getCmp('gridEmpresa_func2').getStore().load();
                            Ext.getCmp('gridRhoras2').getStore().load();


                        }, 1100);
                    }
                    hide_message();

                },
                failure: function (){alert('Registo não efetuado...');
                    Ext.MessageBox.alert('ATENÇÃO ','Funcionário não existe nesse posto!');
                },

                params: {
                    ID_funcionariox: Ext.getCmp('ID_funcionariox').getValue(),
                    ID_Localx: Ext.getCmp('ID_Localx').getValue(),
                    Horasx: Ext.getCmp('Horasx').getValue(),
                    ID_tipo_regx: Ext.getCmp('ID_tipo_regx').getValue()
                }});

    },

    onClickApagaHorario: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/DelHorarioFunc.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', 'Registo horário apagados');
                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridHorarioFunc').getStore().load();

                        }, 1200);
                    }
                    hide_message();

                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Registo não apagado!');
                }

            });
    },


    onClickApagaFuncPosto: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/Del.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Sucesso', 'Associação do Funcionário ao Posto  Apagada!');
                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridFuncionariosPosto0').getStore().load();

                        }, 1200);
                    }
                    hide_message();

                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Alteração ', 'Sem Sucesso!');
                },
                params: {
                    Tipo_validacao: Ext.getCmp('Tipo_validacao12').setValue('12'),
                    Tipo_validacao: Ext.getCmp('Tipo_validacao12').getValue()

                }

            });
    },

    onClickSendIDLocalSelect: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Pesquisa/SearchXLocalCont.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Aviso', 'Enviou');

                    function hide_message() {
                        Ext.defer(function () {

                            Ext.MessageBox.hide();
                             Ext.getCmp('gridContagemLocal').getStore().load();
                        }, 120);
                    }
                    hide_message();
                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Não foi possivel', 'Erro !');
                },

                params: {
                    ID_Localz1: Ext.getCmp('ID_Localz1').getValue()
                }
            });
    },
    onClickRegistaContagemDiaria: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarContagem.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', 'Horário Definido com sucesso');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            //Ext.getCmp('gridContagemXXLocal').getStore().load();
                            Ext.getCmp('gridContagemLavagemDiariaXX').getStore().load();

                        }, 1200);
                    }
                    hide_message();
                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Não foi possivel introduzir');
                },
                params: {
                    ID_Request: Ext.getCmp('ID_Request').getValue(),
                    ID_Tipo_Req: Ext.getCmp('ID_Tipo_Req').getValue(),
                    ID_Local_Req: Ext.getCmp('ID_Local_Req').getValue(),
                    Contagem_Req: Ext.getCmp('Contagem_Req').getValue(),
                    Num_Equip: Ext.getCmp('Num_Equip').getValue()
                }
            })
    },
    onClickRegistaContagemDiaria2: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url:'app/php/Registar/RegistarContagem.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', 'Contagem introduzida com sucesso');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridRegTodosContadores').getStore().load();
                            Ext.getCmp('gridContagemLocal').getStore().load();

                        }, 1200);
                    }
                    hide_message();
                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Não foi possivel introduzir');
                },
                params: {
                    ID_Request: Ext.getCmp('ID_Request').getValue(),
                    ID_Tipo_Req: Ext.getCmp('ID_Tipo_Req').getValue(),
                    ID_Local_Req: Ext.getCmp('ID_Local_Req').getValue(),
                    Contagem_Req: Ext.getCmp('Contagem_Req').getValue(),
                    Num_Equip: Ext.getCmp('Num_Equip').getValue()
                }
            })
    },
    onClickRegistaEquipamentoLavagem: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarEquipamentoLocal.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção ', ' Equipamento Registado.');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEquipamentosLavagem').getStore().load();

                        }, 120);
                    }
                    hide_message();
                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção', ' não registad0!');
                },

                params: {
                    IDLocal: Ext.getCmp('IDLocal').getValue(),
                    TipoEquipamento: Ext.getCmp('TipoEquipamento').getValue(),
                    NumEqui: Ext.getCmp('NumEqui').getValue()
                }
            });


    },
    onClickRegistaEquipamentoLavagem1: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarEquipamentoLocal1.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção ', ' Equipamento e Limite Registado.');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEquiLavagem').getStore().load();

                        }, 120);
                    }
                    hide_message();
                },

                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção', ' Não foi possivel efetuar a operação');
                },

                params: {
                    TipoEquipamentoxS: Ext.getCmp('TipoEquipamentoxS').getValue(),
                    LimMax: Ext.getCmp('LimMax').getValue()
                }
            });
    },
    onClickApagaEquipamentoLavagem: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/DelRGEquilav.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Sucesso', 'Registo  Apagado!');
                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridEquiLavagem').getStore().load();

                        }, 1200);
                    }
                    hide_message();
                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Registo ', 'Não apagado!');
                }
            });
    },
    onClickRegistaContRTP: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarContagemRTP.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Atenção', 'Registo inserido com sucesso');

                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();

                            Ext.getCmp('gridContAntRTP').getStore().load();

                        }, 1200);
                    }
                    hide_message();
                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Atenção', 'Não foi possivel introduzir');
                },
                params: {
                    Contagemzz2: Ext.getCmp('Contagemzz2').getValue(),
                    OverrideLim: Ext.getCmp('OverrideLim').checked ? 1 : 0,
                    datazz2: Ext.getCmp('datazz2').getValue()


                }
            })
    },
    onClickApagaContacto: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Apaga/DelContactoFunc.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert('Sucesso', 'Registo Apagado');
                    function hide_message() {

                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridContactosFunc').getStore().load();

                        }, 1200);
                    }
                    hide_message();

                },
                failure: function () {
                    alert('Erro...');
                    Ext.MessageBox.alert(' Alteração ', 'Não foi possivel apagar o registo');
                }

            });
    },
    onClickInsereContdiarioRA: function() {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Registar/RegistarContagemRegistosDia.php',

                success: function (response, opts) {
                    Ext.MessageBox.alert(' Atenção', 'registado!');


                    function hide_message() {
                        Ext.defer(function () {
                            Ext.MessageBox.hide();
                            Ext.getCmp('gridRegistoTodosPosto').getStore().load();
                            Ext.getCmp('gridContAnterior').getStore().load();
                            Ext.getCmp('gridContagemLocal').getStore().load();

                        }, 1200);

                    }
                    hide_message();
                },

                failure: function (){
                    alert('Erro...');
                    Ext.MessageBox.alert('Atenção','Operação não efetuada');
                },

                params: {
                    TipoEquiz: Ext.getCmp('TipoEquiz').getValue(),
                    DataPPz: Ext.getCmp('DataPPz').getValue(),
                    Localz: Ext.getCmp('Localz').getValue(),
                    ContagemPPz: Ext.getCmp('ContagemPPz').getValue(),
                    NumEquiz: Ext.getCmp('NumEquiz').getValue()

                }

            });
    }
});

