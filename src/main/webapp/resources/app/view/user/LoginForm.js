
Ext.define('AM.view.user.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'login-form',
    
    
    title: 'Login',
    frame:true,
    width: 320,
    bodyPadding: 10,
    
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },
    
    items: [
        {
            allowBlank: false,
            fieldLabel: 'User ID',
            name: 'user',
            emptyText: 'user id'
        },
        {
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password'
        },
        {
            xtype:'checkbox',
            fieldLabel: 'Remember me',
            name: 'remember'
        }
    ],
    
    buttons: [
        { text:'Register',
          handler : function () { 
        	  
//        	  Ext.create('AM.view.user.CreateCustomer', {
//              });
        	  
        	  Ext.widget('register-form', {
                  width : 300,
                  height: 250,
                  renderTo: 'output'
                });
        	  
        	      }
        	},
        { text:'Login',
          handler : function () { 
        		        this.up('window').down('form').getForm().reset(); 
        		      }		
        	}
    ]
});