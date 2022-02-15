import React, {useState} from "react";
import SearchBar from "./SearchBar";
import WorkoutForm from "./WorkoutForm";
import CardContainer from "./CardContainer";
import Filter from "./Filter";


function Home({woArray, setWoArray, myWoArray, setMyWoArray,}) {
  const [selected, setSelected] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  


  const filteredWoArray = woArray.filter((workout) => {
    if (selected === "All") {
      return true;
    } else if (workout.area === selected) {
      return workout;
    }
  });

  const searchArray = filteredWoArray.filter((wo) => {
    if (
      wo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wo.area.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return wo;
    }
  });

  const difficultyArray = searchArray.sort(function (a, b) {
    if (isChecked) {
      return a.difficulty - b.difficulty;
    } else {
      return searchArray;
    }
  });

  function onAddWorkout(wo) {
    woArray.filter((workout) => {
      if (workout.id === wo.id) {
        setMyWoArray([...myWoArray, workout]);
      }
    });
  }

  function onFormSubmit(newWorkout) {
    setWoArray([newWorkout, ...woArray]);
  }

  return (
    <div className="home">

      <Filter selected={selected} setSelected={setSelected} />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      {isChecked ? (
        <CardContainer woArray={difficultyArray} onAddWorkout={onAddWorkout} />
      ) : (
        <CardContainer woArray={searchArray} onAddWorkout={onAddWorkout} />
      )}
      <WorkoutForm onFormSubmit={onFormSubmit} />
    </div>
  );
}

export default Home;
