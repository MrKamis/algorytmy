(() => {
	addEventListener('DOMContentLoaded', () => {
        let block = false;
        let div1 = document.getElementById('div1');
        let div2 = document.getElementById('div2');
        let div3 = document.getElementById('div3');
        let kolejnosc = [div1, div2, div3];
        function prevDiv(){
            if(block){
                return false;
            }
            block = true;
            kolejnosc[1].style.left = '100%';
            kolejnosc[0].style.left = '10%';
            kolejnosc[2].style.display = 'none';
            kolejnosc[2].style.left = '-100%';
            tmp = kolejnosc[1];
            kolejnosc[1] = kolejnosc[0];
            kolejnosc[0] = kolejnosc[2];
            kolejnosc[2] = tmp;
            setTimeout(() => {
                kolejnosc[0].style.display = 'block';
                block = false;
            }, 2000);
        }
        function nextDiv(){
            if(block){
                return false;
            }
            block = true;
            kolejnosc[1].style.left = '-100%';
            kolejnosc[2].style.left = '10%';
            kolejnosc[0].style.display = 'none';
            kolejnosc[0].style.left = '100%';
            tmp = kolejnosc[0];
            kolejnosc[0] = kolejnosc[1];
            kolejnosc[1] = kolejnosc[2];
            kolejnosc[2] = tmp;
            setTimeout(() => {
                kolejnosc[2].style.display = 'block';
                block = false;
            }, 2000);
        }
        document.getElementById('left').addEventListener('click', prevDiv);
        document.getElementById('right').addEventListener('click', nextDiv);
    });
})();