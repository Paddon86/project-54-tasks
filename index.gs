function generateTasks(objSlug) {
  const currentYear = new Date().getFullYear();
  const objectiveNumber = 999;    
  const titles = [
    "Draft ICP Brief",
    "Research Market",
    "Develop Strategy",
    "Execute Plan",
    "Review Results"
  ];
  
  let tasks = [];
  
  for (let i = 0; i < 5; i++) {
    
    let dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + i * 2);
    
    
    let yyyy = dueDate.getFullYear();
    let mm = ('0' + (dueDate.getMonth() + 1)).slice(-2);
    let dd = ('0' + dueDate.getDate()).slice(-2);
    let formattedDate = `${yyyy}-${mm}-${dd}`;
    
    
    let taskId = `OBJ-${currentYear}-${objectiveNumber}-T0${i + 1}`;
    
    
    let task = {
      taskId: taskId,
      title: titles[i],
      dueDate: formattedDate
    };
    
    tasks.push(task);
  }
  
  return tasks;  generateTasks
function testGenerateTasks() {
  let result = generateTasks("Acquire-High-Paying-Clients");
  Logger.log(JSON.stringify(result));
}
