import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    role: null,
    id: null,
    name: null,
    teacher_id: null,
    student_id: null,
    batch_no: null,
    department_name: null,
    designation: null,
    faculty_name: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    addRole: (state, action) => {
      state.role = action.payload;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
    addId: (state, action) => {
      state.id = action.payload;
    },
    addStudentId: (state, action) => {
      state.student_id = action.payload;
    },
    addTeacherId: (state, action) => {
      state.teacher_id = action.payload;
    },
    addBatchNo: (state, action) => {
      state.batch_no = action.payload;
    },
    addDepartmentName: (state, action) => {
      state.department_name = action.payload;
    },
    addDesignation: (state, action) => {
      state.designation = action.payload;
    },
    addFacultyName: (state, action) => {
      state.faculty_name = action.payload;
    },

    logOut: (state) => {
      state.user = null;
      state.role = null;
      state.token = null;
    },
  },
});

export const {
  addUser,
  addToken,
  addRole,
  logOut,
  addId,
  addName,
  addTeacherId,
  addStudentId,
  addBatchNo,
  addDepartmentName,
  addDesignation,
  addFacultyName,
} = userSlice.actions;
export default userSlice.reducer;
