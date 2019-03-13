Ext.define('ConLogin.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    name: 'login',
    id: 'login',
    session: true,
    requires: [
        'ConLogin.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Sistema de Registo de Horas',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',

        items: [
            {
            xtype: 'textfield',
            name: 'username',
            id: 'username',
            fieldLabel: 'Email',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            id: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Por favor, autentique-se'
        }],

        buttons: [{
            text: 'Login',
            formBind: true,
            handler: function(){

              var user = Ext.getCmp('username').getValue();
                var pass = Ext.getCmp('password').getValue();

                Ext.Ajax.request({
                    url: 'app/php/Admin/Login/LoginValidate.php',
                      params: {
                      user: Ext.getCmp('username').getValue(),
                      pass: Ext.getCmp('password').getValue()
                    },

                    method: 'POST',
                    success: function() {
                           var cookiee = Ext.util.Cookies.get('password');
                            var cookiee2 = Ext.util.Cookies.get('permissao');

                        if((cookiee == 'true') && (cookiee2 == '1'))
                        {
                        localStorage.setItem("ConLoginLoggedIn", true);

                          // Remove Login Window
                          var wind = Ext.WindowManager.getActive();

                    if(wind){
                            wind.close();
                        }


                          Ext.create({
                              xtype: 'app-main'
                          });
                            Ext.toast('Autenticado!');
                        }
                        else {
                            Ext.toast('Dados incorrectos, tente de novo ou contacte um administrador!');
                        }
		         },
             failure: function() {
               Ext.MessageBox.alert('Status!', 'Erro no servidor, tente mais tarde');
             }

                  });


            }


        }]
    }
});
