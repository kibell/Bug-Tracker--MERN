export default bug 


// defining the layout of what this bug will have data wise, and making it into a model
//A model represents the data that the user can interact with
function bug(bug){
    if(bug != undefined){
        this._id = bug._id;
        this.name = bug.name;
        this.details = bugs.details;
        this.steps = bugs.steps;
        this.version = bug.version;
        this.priority = bug.priority;
        this.assigned = bug.assigned;
        this.creator = bug.creator;
        this.time = bug.time;
    }

}