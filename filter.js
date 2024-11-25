function filterSchedule(scheduleType) {
 
    document.querySelectorAll('table[data-schedule]').forEach(table => {
        table.classList.add('hidden');
    });
    
    document.querySelector(`table[data-schedule="${scheduleType}"]`).classList.remove('hidden');

    
    document.querySelectorAll('.schedule-filter li').forEach(li => {
        li.classList.remove('active');
    });
  
    event.target.classList.add('active');
}