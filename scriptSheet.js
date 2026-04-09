function spawnButton(){
        const input = document.getElementById('inputbox1');
        const btn = document.getElementById('button4');
        if(input.value.trim().length >7){
            btn.style.display='inline';
        } else{
            btn.style.display = 'none';
        }
        
    }