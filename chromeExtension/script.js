 let myLeads = []
 
 const inputEl = document.getElementById("input-el")
 const inputBtn = document.getElementById("input-btn")
 const ulEl = document.getElementById("ul-el")
 const deleteEl = document.getElementById("delete-btn")
 
 const leadsFromLocalStorage = JSON.parse(localStorage.getItem("user-data"))
 
 const saveBtn = document.getElementById("save-btn")
 
 if(leadsFromLocalStorage){
   
   myLeads = leadsFromLocalStorage
   render(myLeads)
 }

 
 saveBtn.addEventListener('click', function(){
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    
     myLeads.push(per[0].url)
     localStorage.setItem("myLeads", JSON.stringify(myLeads))
     render(myLeads)
    
  }) 
  
 })
 
 
function render(leads){
  
let listItems = ""
  
for( let i = 0; i < leads.length; i++){
 listItems += 
 `<li>
  <a target='_blank' href='${leads[i]}'> 
  ${leads[i]}
  </a> 
  </li>`
}

ulEl.innerHTML = listItems

}
 
 
deleteEl.addEventListener("dblclick", function(){
  
  localStorage.clear()
  myLeads = []
  render(myLeads)
  
})

 
inputBtn.addEventListener("click",function(){
  
  myLeads.push(inputEl.value)
  inputEl.value = " "
  localStorage.setItem("user-data",JSON.stringify(myLeads))
  render(myLeads)
  
})


