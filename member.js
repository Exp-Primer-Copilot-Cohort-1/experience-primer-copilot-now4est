function skillsMember() {
    var skills = [
        {
            name: "HTML",
            type: "Frontend",
            image: "images/skills/html.png"
        },
        {
            name: "CSS",
            type: "Frontend",
            image: "images/skills/css.png"
        },
        {
            name: "JavaScript",
            type: "Frontend",
            image: "images/skills/js.png"
        },
        {
            name: "Bootstrap",
            type: "Frontend",
            image: "images/skills/bootstrap.png"
        },
        {
            name: "React",
            type: "Frontend",
            image: "images/skills/react.png"
        },
        {
            name: "Redux",
            type: "Frontend",
            image: "images/skills/redux.png"
        },
        {
            name: "Angular",
            type: "Frontend",
            image: "images/skills/angular.png"
        },
        {
            name: "Vue",
            type: "Frontend",
            image: "images/skills/vue.png"
        },
        {
            name: "Sass",
            type: "Frontend",
            image: "images/skills/sass.png"
        },
        {
            name: "NodeJS",
            type: "Backend",
            image: "images/skills/nodejs.png"
        },
        {
            name: "Express",
            type: "Backend",
            image: "images/skills/express.png"
        },
        {
            name: "MongoDB",
            type: "Backend",
            image: "images/skills/mongodb.png"
        },
        {
            name: "MySQL",
            type: "Backend",
            image: "images/skills/mysql.png"
        },
        {
            name: "PHP",
            type: "Backend",
            image: "images/skills/php.png"
        },
        {
            name: "Laravel",
            type: "Backend",
            image: "images/skills/laravel.png"
        },
        {
            name: "Java",
            type: "Backend",
            image: "images/skills/java.png"
        },
        {
            name: "C#",
            type: "Backend",
            image: "images/skills/csharp.png"
        },
        {
            name: "Python",
            type: "Backend",
            image: "images/skills/python.png"
        }
    ];
    var skillsHTML = "";
    for (var i = 0; i < skills.length; i++) {
        skillsHTML += "<div class=\"col-lg-3 col-md-4 col-sm-6 col-6\">\n            <div class=\"skill-item\">\n                <img src=\"" + skills[i].image + "\" alt=\"" + skills[i].name + "\">\n                <div class=\"skill-name\">" + skills[i].name + "</div>\n                <div class=\"skill-type\">" + skills[i].type + "</div>\n            </div>\n        </div>";
    }   
    document.getElementById("skills").innerHTML = skillsHTML;
}
