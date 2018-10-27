#include<iostream>
#include<cstdlib>
#include<cmath>

using namespace std;

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
        cout << "Liczba jest lczba pierwsza!";
        return true;
    }else{
        cout << "Liczba nie jest liczba pierwsza!";
        return false;
    }
}
