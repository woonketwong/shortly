Shortly.Links = Backbone.Collection.extend({
  sort_key: 'visits',

  comparator: function(link, link2){
    var key1 = link.get(this.sort_key);
    var key2 = link2.get(this.sort_key);
    if(key1 > key2){
      return -1;
    }else if(key1 < key2){
      return 1;
    }else{
      return 0;
    }
  },

  sortByField: function(fieldName){
    this.sort_key = fieldName;
    this.sort();
  },

  model: Shortly.Link,

  url: '/links'
});