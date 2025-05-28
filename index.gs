/**
 * Generates an array of 5 task objects based on the given slug.
 * @param {string} objSlug - A string slug (e.g. "Acquire-High-Paying-Clients").
 * @returns {Array} Array of task objects.
 */
function generateTasks(objSlug) {
  const currentYear = new Date().getFullYear();
  const objectiveNumber = 999; // stubbed constant as per instructions
  const tasks = [];
  const titles = [
    "Draft ICP Brief",
    "Conduct Market Research",
    "Develop Marketing Strategy",
    "Execute Campaign",
    "Analyze Results"
  ];

  for (let i = 0; i < 5; i++) {
    const taskId = `OBJ-${currentYear}-${objectiveNumber}-T0${i + 1}`;
    const title = titles[i];
    
    // Calculate due date = today + (i * 2) days
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + i * 2);
    const dueDateFormatted = dueDate.toISOString().split('T')[0]; // YYYY-MM-DD format

    tasks.push({
      taskId: taskId,
      title: title,
      dueDate: dueDateFormatted
    });  
  }

  return tasks;
}
