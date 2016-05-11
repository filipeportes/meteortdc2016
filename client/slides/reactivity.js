Template.reactivity.onCreated(function () {
    this.state = new ReactiveDict();
});

Template.reactivity.helpers({
    tasks() {
        const instance = Template.instance();
        if (instance.state.get('hideCompleted')) {
            // If hide completed is checked, filter tasks
            return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
        }

        // Otherwise, return all of the tasks
        return Tasks.find({}, {sort: {createdAt: -1}});
    },
    incompleteCount() {
        return Tasks.find({checked: {$ne: true}}).count();
    }
});

Template.reactivity.events({
    'submit .new-task'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const text = target.text.value;

        // Insert a task into the collection
        Tasks.insert({
            text,
            createdAt: new Date(), // current time
        });

        // Clear form
        target.text.value = '';
    },
    'click .hide-completed'(event, instance){
        console.log('teste');
        instance.state.set('hideCompleted', event.target.checked);
    },
});

Template.task.events({
    'click .toggle-checked'(){
        // Set the checked property to the opposite of its current value
        Tasks.update(this._id, {$set: {checked: !this.checked}});
    },
    'click .delete'(){
        Tasks.remove(this._id);
    }
});
