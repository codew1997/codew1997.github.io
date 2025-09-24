// Demo JS: minimal interactions (share button)
document.addEventListener('click', function(e){
  if(e.target.matches('.btn')){
    e.target.disabled = true;
    e.target.textContent = 'Done';
    setTimeout(()=>{ e.target.disabled = false; e.target.textContent = e.target.classList.contains('btn-outline') ? 'Save' : 'Share'}, 1200);
  }
});
