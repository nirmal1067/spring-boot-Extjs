Ext.define('AM.view.user.CardMain' ,
		
		{
	requires: ['AM.view.user.CardForm1','AM.view.user.CardForm2','AM.view.user.CardForm3'],
	extend: 'Ext.panel.Panel',
    alias: 'widget.cardMain',
	title: 'Create User Wizard',
	layout: 'card',
	deferredRender: true,
    items: [
    {
    xtype: 'cardForm1',
    
    },
    {
    xtype: 'cardForm2',
    
    }, 
    {
    xtype: 'cardForm3',
   
    }
    
    ],
    
    bbar: ['->', {
    	xtype: 'button',
    	text: 'Previous',
    	
    	listeners: {
            click: function(btn){
            	var layout = cardPanel.getLayout();
            	if (layout.getPrev()) {
            	layout.prev();
            	}
            	},
           	scope:this
    }
    	
    	}, {
    	xtype: 'button',
    	text: 'Next',
    	
    	 listeners: {
             click: function(btn){
             	var layout = cardPanel.getLayout();
            	if (layout.getNext()) {
            	layout.next();
            	}
            	},
            	scope:this
     }
    	}]
}

);