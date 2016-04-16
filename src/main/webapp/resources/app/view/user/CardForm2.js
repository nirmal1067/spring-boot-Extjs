Ext.define('AM.view.user.CardForm2' ,
		
		{
	
    extend: 'Ext.panel.Pane',
    alias: 'widget.cardForm2',
    bodyStyle: 'padding: 20px',
    title: 'Account Info',
    border: false,
    items: [{
    xtype: 'textfield',
    fieldLabel: 'Username'
    }, {
    xtype: 'textfield',
    fieldLabel: 'Password',
    inputType: 'password'
    }]
}

);