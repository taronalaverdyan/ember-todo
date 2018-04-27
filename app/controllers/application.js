import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({
  test: '',
  lists: [],
  activeButton: 'all',

  filteredList: computed('activeButton', 'lists.length', 'lists.@each.todo', function() {
    const activeButton = this.get('activeButton');
    console.log(activeButton);
    if (activeButton === 'completed') {
      return this.get('lists').filterBy('todo', true);
    } else if (activeButton === 'active') {
      return this.get('lists').filterBy('todo', false)
    }

    return this.get('lists');
  }),


  actions: {
    add(e) {
      if (e.keyCode == 13) {
        this.get('lists').pushObject({description: this.get('test'), todo: false});
        this.set('test', '') ;
      }
      // console.log(this.get('lists')[0].description);
    },

    delete(list) {
      // console.log('hallo');
      this.get('lists').removeObject(list);
    },

    completed(list) {
      if (Ember.get(list, 'todo') == false) {
        Ember.set(list, 'todo', true);
      }
      else {
            Ember.set(list, 'todo', false);
      }
    },

    setActiveButton(filter) {
      this.set('activeButton', filter);
    }

  }


});
