 Ext.define('AM.store.MenuStore', {
    extend  : 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            { text: "Nodes", leaf: true },
            { text: "Node Management", expanded: true, children: [
                { text: "book Node", leaf: true },
                { text: "Release Node", leaf: true}
            ] },
            { text: "Comments", leaf: true }
        ]
    }
  });