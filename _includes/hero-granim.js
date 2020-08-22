{% if page.course == 'j463' %}
let gradients = [['#ff9966', '#ff5e62'], ['#ff385c', '#ffb35b']];
// let gradients = [["#FFFD73", "#FF5959"], ["#40B5FF", "#3682B3"]];
// let gradients = [["#FFFD73", "#FF5959"], ["#40B5FF", "#3682B3"]];
{% else %}
let gradients = [
    ['#00F260', '#0575E6'],
    ['#1d9fe6', '#caf24a']
];
{% endif %}


var granimInstance = new Granim({
    element: '#granim',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    image : {
        {% if page.course == 'j463' %}
        source: 'img/spiral.jpg',
        blendingMode: 'multiply',
        {% else if page.course == 'j363' %}
        source: 'img/web.png',
        blendingMode: 'hue',
        {% endif %}
    },
    states : {
        "default-state": {
            gradients: gradients
        }
    },
    transitionSpeed: 500
});