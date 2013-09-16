define("reg-view",["jquery","underscore","backbone","jquery-scrollstop","dispatch","definition-view","reg-model","section-footer-view","regs-router"],function(e,t,n,r,i,s,o,u,a){var f=n.View.extend({el:"#content-wrapper",events:{"click .definition":"termLinkHandler","click .inline-interp-header":"expandInterp","click .definition.active":"openDefinitionLinkHandler"},initialize:function(){i.on("definition:remove",this.closeDefinition,this),i.on("breakaway:open",this.hideContent,this),i.on("breakaway:close",this.showContent,this),i.set("section",this.options.id),e(window).on("scrollstop",t.bind(this.checkActiveSection,this)),this.activeSection=this.options.id||"",this.$activeSection="",this.$sections={},this.updateWayfinding(),a.navigate("regulation/"+this.options.id+"/"+i.getVersion()),i.set("sectionNav",new u({el:this.$el.find(".section-nav")})),i.trigger("regSection:open:after",this.options.id)},checkActiveSection:function(){var n=this.$contentContainer.length-1;for(var r=0;r<=n;r++)if(this.$sections[r].offset().top+this.$contentHeader.height()>=e(window).scrollTop())if(t.isEmpty(this.activeSection)||this.activeSection!==this.$sections[r].id){this.activeSection=this.$sections[r][0].id,this.$activeSection=this.$sections[r][0],i.trigger("activeSection:change",this.activeSection);return}return this},updateWayfinding:function(){var t,n;this.$contentHeader=this.$contentHeader||e("header.reg-header"),this.$contentContainer=this.$el.find(".level-1 li[id], .reg-section, .appendix-section, .supplement-section"),n=this.$contentContainer.length;for(t=0;t<n;t++)this.$sections[t]=e(this.$contentContainer[t])},closeDefinition:function(){this.clearActiveTerms()},openDefinitionLinkHandler:function(t){i.trigger("ga-event:definition",{action:"clicked key term to close definition",context:e(t.target).data("definition")})},toggleDefinition:function(e){return this.setActiveTerm(e),this},termLinkHandler:function(t){t.preventDefault();var n=e(t.target),r=n.attr("data-definition");return n.data("active")?(i.remove("definition"),this.clearActiveTerms()):i.getViewId("definition")===r?this.toggleDefinition(n):(i.remove("definition"),this.openDefinition(r,n)),this},openDefinition:function(e,t){var n=new s({id:e,$anchor:t});return i.set("definition",n),i.trigger("definition:open"),i.trigger("ga-event:definition",{action:"clicked key term to open definition",context:e}),this.setActiveTerm(t),n},expandInterp:function(t){t.stopPropagation();var n=e(t.currentTarget),r=n.parent(),i=n.find(".expand-button"),s=n.find(".expand-text");return r.toggleClass("open"),n.next(".hidden").slideToggle(),i.toggleClass("open"),s.html(r.hasClass("open")?"Hide":"Show"),this},changeFocus:function(t){e(t).focus()},clearActiveTerms:function(){this.$el.find(".active.definition").removeClass("active").removeData("active")},setActiveTerm:function(e){this.clearActiveTerms(),e.addClass("active").data("active",1)},remove:function(){return e(window).off("scrollstop"),i.remove("sectionNav"),this.$el.remove(),this.stopListening(),this},hideContent:function(){this.$el.fadeOut(1e3)},showContent:function(){this.$el.fadeIn()}});return f});