let generate = document.getElementById('btn');
generate.addEventListener('click', () => {
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    let random_num= Math.floor(Math.random()*(max-min) + +min);
    document.getElementById('output').innerHTML = ` =  ${random_num}`;
});