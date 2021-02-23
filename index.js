
//12. В поле типу <textarea> вводиться текст. При натисканні на кнопку має
// виконатись функція. З допомогою методу replace необхідно видалити всі
// CSS коментарі. Для реалізації завдання використати шаблон.

let input1=document.getElementById('input1');
let button1=document.getElementById('button1');
let regex=/(^|\n)\s*\/\*.*?\*\/\s*/

button1.onclick=(ev)=>{
    func12();
    ev.preventDefault();
}
function func12() {
    let newValue =input1.value.replace(regex, '');
    input1.value=newValue;
}

//16. В текстове поле вводиться рядок тексту типу 1a a2a a3a a4a a5a aba aca
// При натисканні на кнопку має виконатись функція. З допомогою методу
// match об’єкту String необхідно знайти всі слова, в яких по краях стоять
// літери  а між ними одна цифра. Вивести ці слова у вигляді стовпчика
// де кожне слово з нового рядка). Для реалізації завдання використати шаблон

let input2=document.getElementById('input2');
let button2=document.getElementById('button2');
let result2=document.getElementById('result2');
let regex2=/[a]{1}\d{1}[a]{1}/g

button2.onclick=(ev)=>{
    func16();
    ev.preventDefault();
}
function func16() {
    let results =input2.value.match(regex2);
    for(let el of results){
        let div=document.createElement('div');
        div.innerText=el;
        result2.appendChild(div);
    }
}

//20.В текстове поле вводиться рядок тексту типу 'aa aba abba abbba abbbba
//  При натисканні на кнопку має виконатись функція. З допомогою
// методу replace необхідно замінити всі пробіли на символ '!' Для реалізації
// завдання використати шаблон.

let input3=document.getElementById('input3');
let button3=document.getElementById('button3');
let regex3=/\s/g

button3.onclick=(ev)=>{
    func20();
    ev.preventDefault();
}
function func20() {
    let newValue =input3.value.replace(regex3, '!');
    input3.value=newValue;
}

//21.В текстове поле вводиться рядок тексту типу aaaa aaa aaa При натисканні
// на кнопку має виконатись функція. З допомогою методу replace
// необхідно замінити перше в рядку aaaa на символ '!'. Для реалізації
// завдання використати шаблон.

let input4=document.getElementById('input4');
let button4=document.getElementById('button4');
let regex4=/aaa/

button4.onclick=(ev)=>{
    func21();
    ev.preventDefault();
}
function func21() {
    let newValue =input4.value.replace(regex4, '!');
    input4.value=newValue;
}


//32.В текстове поле вводиться рядок тексту. При натисканні на кнопку має
// виконатись функція. З допомогою методу test об’єкту RegExp функція
// визначає, чи введений рядок є шістнадцятковим числом (починається на
// 0X і містить цифри та літери від A-F).Для реалізації завдання
// використати шаблон.

let input5=document.getElementById('input5');
let button5=document.getElementById('button5');
let regex5=/0[xX][0-9a-fA-F]+/g

button5.onclick=(ev)=>{
    func32();
    ev.preventDefault();
}
function func32() {
    let res = regex5.test(input5.value);
    if(res){
        alert('Введено правильне  шістнадцяткове число')
    }else{
        alert('Введено неправильне шістнадцяткове число')
    }}
