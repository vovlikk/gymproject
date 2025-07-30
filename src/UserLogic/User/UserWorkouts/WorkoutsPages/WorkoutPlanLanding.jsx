import WorkoutHeader from "./WorkoutHeader";
import WorkoutHomePlanSection from '../UserWorkoutComponents/WorkoutPlanComponent/WorkoutHomePlanSection'
import WorkoutInfoPlanSection from "../UserWorkoutComponents/WorkoutPlanComponent/WorkoutPlanInfoSection";



function WorkoutPlanLanding(){
    return(
        <>
            <WorkoutHeader />
            <WorkoutHomePlanSection />
            <WorkoutInfoPlanSection />
        </>
    )
}

export default WorkoutPlanLanding;