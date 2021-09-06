import '../style/style.scss';

const component = ()=>{
    const el = document.querySelector('.test');
    console.log(el);
    el.innerText = 'hello world';
}

component();