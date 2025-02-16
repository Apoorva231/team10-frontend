const express = require("express");
const router = express.Router();
var localVars = {
    title: "CourseFlow",
    description : "Your Virtual Academic Assistant."
}

router.get('/',(req,res) =>
{
    res.render('index',{localVars,currentRoute:'/'});
})
router.get('/dashboard', (req,res) =>{
    res.render('dashboard',{localVars, currentRoute:'/dashboard'});
});
router.get('/history',(req,res)=>{
    res.render('history',{localVars,currentRoute:'/history' });
});
router.get('/courses', (req,res)=>{
    res.render('courses',{localVars,currentRoute:'/courses'});
});

module.exports = router;