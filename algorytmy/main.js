(() => {
	addEventListener('DOMContentLoaded', () => {
        let artykuly = [
            {
                title: 'Spis treści',
                content: `<ol style="line-height: 30px; margin-left: 30px;">
                    <li>Czy dana liczba jest liczbą pierwszą</li>
                    <li>Czy dana liczba jest liczbą doskonałą</li>
                    <li>Rozkładanie na czynniki pierwiesze</li>
                    <li>Iteracyjna i rekurencyjna realizacja algorytmu Euklidesa</li>
                    <li>Iteracyjne i rekurencyjne obliczanie wartości liczb Fibonacciego</li>
                    <li>Wydawanie reszty metodą zachłanną</li>
                    <li>Reprezentacja liczby w dowolnym systemie pozycyjnym</li>
                </ol>`
            },
            {
                title: 'Czy dana liczba jest liczbą pierwszą',
                content: `<h3>Definicja: </h3>
                Liczba pierwsza to liczba większa od 1 mająca tylko 2 dzielniki: samą siebie i 1.
                <div class="code">
                    <pre>
                        int main(){
                            int liczba;
                            cin >> liczba;
                            bool tmp = true;
                            for(int x = 2; x < liczba; x++){
                                if((liczba % x) == 0){
                                    tmp = false;
                                    break;
                                }
                            }
                            if(tmp){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    </pre>
                </div>`
            },
            {
                title: 'Czy dana liczba jest liczbą doskonałą',
                content: ''
            },
            {
                title: 'Rozkładanie na czynniki pierwiesze',
                content: ''
            },
            {
                title: 'Iteracyjna i rekurencyjna realizacja algorytmu Euklidesa',
                content: ''
            },
            {
                title: 'Iteracyjne i rekurencyjne obliczanie wartości liczb Fibonacciego',
                content: ''
            },
            {
                title: 'Wydawanie reszty metodą zachłanną',
                content: ''
            },
            {
                title: 'Reprezentacja liczby w dowolnym systemie pozycyjnym',
                content: ''
            }
        ];
        let i = 1;
        let block = false;
        let div1 = document.getElementById('div1');
        let div2 = document.getElementById('div2');
        let div3 = document.getElementById('div3');
        let kolejnosc = [div1, div2, div3];
        function start(){
            document.title = artykuly[i].title;
            div2.innerHTML = artykuly[i].content;
            color();
        }
        function color(){
            for(let x = 0; x < document.getElementsByClassName('code').length; x++){
                document.getElementsByClassName('code')[x].innerHTML = document.getElementsByClassName('code')[0].innerHTML.replace(/int|bool|return|cin|cout|string|char|if|else|for|while|switch|case|break|continue|case/g, res => {
                    return '<span class="colored">' + res + '</span>'
                });
                
            }
        }
        function prevDiv(){
            if(block){
                return false;
            }
            if(i == 0){
                i = 7;
                kolejnosc[0].innerHTML = artykuly[i].content;
                document.title = artykuly[i].title;
            }else{
                kolejnosc[0].innerHTML = artykuly[--i].content;
                document.title = artykuly[i].title;
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
            color();
        }
        function nextDiv(){
            if(block){
                return false;
            }
            if(i == 7){
                i = 0;
                kolejnosc[2].innerHTML = artykuly[i].content;
                document.title = artykuly[i].title;
            }else{
                kolejnosc[2].innerHTML = artykuly[++i].content;
                document.title = artykuly[i].title;
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
            color();
        }
        start();
        document.getElementById('left').addEventListener('click', prevDiv);
        document.getElementById('right').addEventListener('click', nextDiv);
    });
})();