Shortly.LinksView = Backbone.View.extend({

  className: 'links',

  initialize: function(){
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch();
  },

  render: function() {
    this.$el.empty();
    this.$el.append('<div class="sort visit">Visit</div><div class="sort lastVisit">Last Visit</div><div class="sort">Sort by:</div>');
    return this;
  },

  events: {
    'click .lastVisit': function(){
      this.collection.sortByField("updated_at");
      this.render();
      this.collection.trigger('sync', this);
    },
    'click .visit': function(){
      this.collection.sortByField("visits");
      this.render();
      this.collection.trigger('sync', this);
    }
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(item){
    var view = new Shortly.LinkView( {model: item} );
    this.$el.append(view.render().el);
  }

});