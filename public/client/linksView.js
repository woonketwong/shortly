Shortly.LinksView = Backbone.View.extend({

  className: 'links',

  initialize: function(){
    this.collection.on('sync', this.addAll, this);
    // this.collection.on('sort', function(){
    //   // this.render();
    //   this.addAll();
    // }, this);
    this.collection.fetch();
  },

  render: function() {
    this.$el.empty();
    this.$el.append('<div class="sort visit">Visit</div><div class="sort createdAt">Created At</div><div class="sort">Sort by:</div>');
    return this;
  },

  events: {
    'click .createdAt': function(){
      console.log('title');
      console.log('this is', this);
      this.collection.sortByField("title");
      this.render();
      this.collection.trigger('sync', this);
    },
    'click .visit': function(){
      console.log('visits');
      console.log('this is', this);
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