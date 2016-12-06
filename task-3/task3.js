function showTree() {
	// Input tree
	var newick = '((human, chimp),mouse)';
	var treeObj = tnt.tree.parse_newick(newick);
	
	// Tree visualisation configuration
	var tree = tnt.tree()
	    .data(treeObj)
	    .layout (tnt.tree.layout.vertical()
	  	      .width(300)
						.scale(false)
	    )
	    .node_display (tnt.tree.node_display.circle()
	        .size(5)
	  	      .fill(function (node) {
	            if (node.is_leaf()) {
	                return "blue";
	            }
  	          return "green";
		        }))
	    
	    .label (tnt.tree.label.text()
	        .height(30)
	        .text (function (node) {
	            return node.property("name");
	        })
	    );
	
	// Tree rendering
	tree (document.getElementById("result"));
}
