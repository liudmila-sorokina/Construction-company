import {
  ADD_STUDENTS,
  DELETE_STUDENT,
  ADD_STUDENT,
  ADD_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  ADD_PAYMENTS,
  ADD_PAYMENT
} from "../actions/constants"

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STUDENTS:
      return { ...state, students: action.payload }
    case ADD_STUDENT:
      const updatedStudents = [...state.students]
      updatedStudents.push(action.payload)
      return { ...state, students: updatedStudents }
    case DELETE_STUDENT:
      const newStudentsArr = state.students.filter(x => x._id !== action.payload)
      console.log(action.payload)
      return { ...state, students: newStudentsArr }
    case ADD_COURSES:
      return { ...state, courses: action.payload }
    case ADD_COURSE:
      const updatedCourses = [...state.courses]
      updatedCourses.push(action.payload)
      return { ...state, courses: updatedCourses }
    case DELETE_COURSE:
      const newCoursesArr = state.courses.filter(x => x._id !== action.payload)
      return { ...state, courses: newCoursesArr }
    case ADD_PAYMENTS:
      return { ...state, payments: action.payload }
    case ADD_PAYMENT:
      const updatedPayment = [...state.payments]
      updatedPayment.push(action.payload)
      return { ...state, payments: updatedPayment }
    default:
      return state
  }
}
