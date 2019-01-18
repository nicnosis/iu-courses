{% if page.course == 'g290' %}
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
    states : {
        "default-state": {

            gradients: gradients

        }
    }
});