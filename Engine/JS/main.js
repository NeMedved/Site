document.addEventListener('DOMContentLoaded', () => {
    
        document.getElementById('Ru').addEventListener('click', () => {
            document.getElementById('title').innerHTML = 'Полезные ссылки для связи со мной';
            document.getElementById('menu').innerHTML = '<a href="https://www.instagram.com/nitorior/?hl=ru" target="_blank">Открыть INST</a><a href="https://www.fiverr.com/nitorior?up_rollout=true" target="_blank">Открыть FIVERR</a><a href="https://vk.com/nikitamiheevv" target="_blank">Открыть VK</a>    <a href="https://portfolio.commishes.com/user/NeMedved/" target="_blank">Открыть YUCH</a>';
        })

        document.getElementById('En').addEventListener('click', () => {
            document.getElementById('title').innerHTML = 'Useful links for contacting me';
            document.getElementById('menu').innerHTML = '<a href="https://www.instagram.com/nitorior/?hl=ru" target="_blank">Open INST</a><a href="https://www.fiverr.com/nitorior?up_rollout=true" target="_blank">Open FIVERR</a><a href="https://vk.com/nikitamiheevv" target="_blank">Open VK</a>    <a href="https://portfolio.commishes.com/user/NeMedved/" target="_blank">Open YUCH</a>';
        })

})