Shortly.Links = Backbone.Collection.extend({
  sort_key: 'visits',

  comparator: function(link){
    // debugger;
    if(this.sort_key === 'visits'){
      return -link.get(this.sort_key);
    }
    return link.get(this.sort_key);
  },

  sortByField: function(fieldName){
    this.sort_key = fieldName;
    this.sort();
  },

  model: Shortly.Link,

  url: '/links'
});