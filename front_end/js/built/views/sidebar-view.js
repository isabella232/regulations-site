define("sidebar-view",["jquery","underscore","backbone","regs-dispatch","sidebar-head-view"],function(e,t,n,r,i){var s=n.View.extend({initialize:function(){r.on("definition:render",function(e){this.insertChild(e)},this),r.on("definition:remove",this.clear,this),this.header=new i({el:"#sidebar-subhead"})},render:function(){},insertChild:function(e){this.$el.html(e)},clear:function(){this.$el.html("")}});return s});