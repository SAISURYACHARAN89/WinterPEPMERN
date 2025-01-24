function MissedGoal(){
    return <h1>MISSED</h1>
}

function MadeGoal(){
    return <h1>Goal</h1>
}

function Goal({val}){
    const isGoal = val;
    if(isGoal){
        return <MadeGoal/>
    }
    else{
        return MissedGoal();
    }
}
const Conditionals = {MissedGoal, MadeGoal, Goal}
// const Conditionals = MissedGoal
// Conditionals.MadeGoal = MadeGoal
// Conditionals.Goal = Goal


export {Conditionals};