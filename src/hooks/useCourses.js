import { useEffect, useState } from "react"

// custom hook to fetch data

const useCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("/courses.JSON")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return ([courses])
}

export default useCourses;