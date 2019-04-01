const Joi = require('joi');
const express = require("express");
const app = new express();
const port = process.env.PORT || 3000;
const courses = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
];
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello world !!");
});

app.get("/api/course", (req, res) => {
    res.send(courses);
});

app.get("/api/course/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) { return res.status(404).send("The course with the given id wasn't found"); }
    res.send(course);
});

app.post("/api/course", (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.put("/api/course/:id", (req, res) => {
    const course = courses.find(x => x.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send(`Not found object ${req.params.id}`);
    }
    const { error } = validateCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    course.name = req.body.name;
    res.send(course);

});


app.delete("/api/course/:id", (req, res) => {
    const course = courses.find(x => x.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send(`Not found object ${req.params.id}`);

    }
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
}

app.listen(port, () => {
    console.log(`app listen at port ${port}`);
});
