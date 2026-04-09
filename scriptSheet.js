function spawnButton(){
        const input = document.getElementById('inputbox1');
        const btn = document.getElementById('button1');
        if(input.value.trim().length >4){
            btn.style.display='inline';
        } else{
            btn.style.display = 'none';
        }
        
    }
    