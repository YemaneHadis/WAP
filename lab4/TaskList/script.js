   
   let availiableTasks  = localStorage.getItem("availiableTasks");
   
   window.onload = () => { 
    document.getElementById("tasklist").value = availiableTasks;
   }
    
    function addTask(){      
        let taskinput =  document.getElementById("taskinput").value+"\n";
       
        availiableTasks = availiableTasks+ taskinput;
    
        document.getElementById("tasklist").value = availiableTasks;
        document.getElementById("taskinput").value= "";
        localStorage.setItem("availiableTasks", availiableTasks);     
    }
    function clearTask(){
        localStorage.setItem("availiableTasks","");
        document.getElementById("tasklist").value = "";
    }
    const addTaskButton = document.getElementById("addTaskButton");
    const clearTaskButton = document.getElementById("clearTaskButton");

    addTaskButton.addEventListener("click", addTask);
    clearTaskButton.addEventListener("click", clearTask);

    

