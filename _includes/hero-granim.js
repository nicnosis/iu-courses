{% if page.course == 'g290' or page.course == 'pro' %}
let gradients = [
    ['#ff9966', '#ff5e62'],
    ['#ff385c', '#ffb35b']
];
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
        {% if page.course == 'g290' or page.course == 'pro' %}
        source: 'img/halls2.png',
        {% else if page.course == 'j363' %}
        source: 'img/web.png',
        {% endif %}
        blendingMode: 'hue',
    },
    states : {
        "default-state": {
            gradients: gradients
        }
    },
    transitionSpeed: 2000
});