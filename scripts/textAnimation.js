document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('text-animation');
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';

    textArray.forEach((item, index) => {
        setTimeout(() => element.innerHTML += item, 75 * index);
    });
});
