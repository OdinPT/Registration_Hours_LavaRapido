/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ConLogin.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.main',

    onClickButton: function () {
        method:'POST',
            myRequest1 = Ext.Ajax.request({
                url: 'app/php/Admin/RegLogoutUser.php'
            });

        // Remove the localStorage key/value
        localStorage.removeItem('ConLoginLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });

        Ext.util.Cookies.clear('password');
        Ext.util.Cookies.clear('email');
        Ext.util.Cookies.clear('username');
        Ext.util.Cookies.clear('cookieEmail');

        Ext.util.Cookies.clear('cookieID_RegHoras');
        Ext.util.Cookies.clear('cookieID_LocalFunc');
        Ext.util.Cookies.clear('cookieID_locrh');

        Ext.util.Cookies.clear('C');
        Ext.util.Cookies.clear('cookieID_empresaSelect');
        Ext.util.Cookies.clear('cookieID_funcionario');

        Ext.util.Cookies.clear('cookieID_Local');
        Ext.util.Cookies.clear('cookieUser2');




    }
});
