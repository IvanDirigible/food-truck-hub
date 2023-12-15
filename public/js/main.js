function renderTemplate() {
    fetch('templates/login-template.hbs')
        .then(response => response.text())
        .then(templateSource => {
            var template = Handlebars.compile(templateSource);
            var data = {}; // You can add data if needed
            var html = template(data);
            document.getElementById('login-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching or rendering template:', error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    renderTemplate();
});