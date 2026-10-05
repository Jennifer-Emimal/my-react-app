import Course from './Course';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';

function CourseList() {
    const [courses,error,dummy]=useFetch('http://localhost:3000/courses');
    function Delete(id) {
        const newCourse = courses.filter((course) => course.id != id)
        setCourses(newCourse)
    }

    if (!courses) {
        return (
            <>
            {!error&&<p>Loading</p>}
                {error &&<p>{error}</p>}
            </>
        )
    }

    //courses.sort((x, y) => x.Price - y.Price)

    //const vcourses=courses.filter((course)=>course.Price>=200)


    const coursesList = courses.map(
        (course, index) =>
            <Course key={index} name={course.Name}
                img={course.img}
                price={course.Price}
                deleteList={Delete}
                id={course.id}
                show={true} />
    )
    return (
        <>
            {coursesList}
            <button onClick={() => { setDummy(false) }}>Dummy Button</button>
        </>
    );
}
export default CourseList;
//npx json-server --watch data/DummyData.json --port 3000 --static ./Data
//npm install react-router-dom