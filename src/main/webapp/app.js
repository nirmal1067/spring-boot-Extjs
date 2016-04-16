Ext.application({
    requires: ['Ext.container.Viewport','AM.view.AppViewPort','AM.view.user.LoginForm'],
    name: 'AM',

    appFolder: 'resources/app',
  //  requires: ['AM.view.user.LoginForm'],
    controllers: [
                  'Users'
              ],

              launch: function() {
            	  
            	  Ext.widget('login-form', {
                      width : 300,
                      height: 250,
                      renderTo: 'output'
                    });
            	  
            	  
//  Ext.create('AM.view.user.LoginForm', {
//                      
//                  });
            	  
//                  Ext.create('AM.view.AppViewPort', {
//                      
//                  });
                  
//                  Ext.create('Ext.container.Viewport', 
//                		  {
//                	  layout: 'border',
//                	  items: [{
//                	  region: 'north',
//                	  margins: 5,
//                	  height: 100,
//                	  collapsible: true,
//                	  split: true,
//                	  titleCollapse: true,
//                	  xtype: 'container'
//                	  }, {
//                	  title: 'West',
//                	  region: 'west',
//                	  margins: '0 5 0 5',
//                	  flex: .3
//                	  }, {
//                	  title: 'Center',
//                	  region: 'center'
//                	  }, {
//                	  title: 'East',
//                	  region: 'east',
//                	  margins: '0 5 0 5',
//                	  collapsible: true,
//                	  split: true,
//                	  titleCollapse: true,
//                	  width: 200
//                	  }, {
//                	  title: 'South',
//                	  region: 'south',
//                	  split: true,
//                	  margins: '0 5 5 5',
//                	  flex: .3
//                	  }]
//                	  }
//                  
//                  )
              }
});