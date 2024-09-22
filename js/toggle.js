document.getElementById('donate-btn').addEventListener('click',function(){
    document.getElementById('donate').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donate-btn').classList.remove('btn-primary-color');
    document.getElementById('history-btn').classList.remove('btn-primary-color');

    document.getElementById('donate').classList.remove('hidden');
    document.getElementById('donate-btn').classList.add('btn-primary-color');
});

document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('donate').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donate-btn').classList.remove('btn-primary-color');
    document.getElementById('history-btn').classList.remove('btn-primary-color');

    document.getElementById('history').classList.remove('hidden');
    document.getElementById('history-btn').classList.add('btn-primary-color');
});