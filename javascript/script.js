console.log('hi');

// if user adds the note to localStorage
showList();
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    let addTi=document.getElementById("addTitle");
    var notesObj = []
    if(notes==null){
      notesObj=[];
      console.log('null')
    }
    else{
      notesObj=JSON.parse(notes);
    }  
    if(addTi.value=='')
    {
      console.log(addTitle.value)
      alert("Plases enter a valid task");
      return;
    }
    else{
      let myObj = {
        title: addTitle.value,
        text: addTxt.value
      }
        notesObj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        addTitle.value = "";
    }
    //   console.log(notesObj);
      showList();
})

// function to show elements from local storage
function showList(){
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
         notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        <div class="NoteCard my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">${index+1}) ${element.title}</h5>
        <p class="card-text"> ${element.text}</p>
        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Item                                                                            
        </button>
        </div>
      </div>
        `;
        
    });


    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0)
    {
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to show! Use "Add Items" section above to add To-Do-Items.`;
    }
}


// Function to delete a note
function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showList();
}

    let search = document.getElementById('searchTxt');
    search.addEventListener("input", function(){
    
        let inputVal = search.value.toLowerCase();
        // console.log('Input event fired!', inputVal);
        let noteCards = document.getElementsByClassName('NoteCard');
        Array.from(noteCards).forEach(function(element){
            let cardTxt = element.getElementsByTagName("h5")[0].innerText;
            if(cardTxt.toLowerCase().includes(inputVal)){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
            // console.log(cardTxt);
        })
    })
    



