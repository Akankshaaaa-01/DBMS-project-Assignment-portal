import axios from "axios";

// Create axios instance with base URL
const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Add request interceptor to include auth token in all requests
API.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.token) {
        config.headers["Authorization"] = `Bearer ${parsedUser.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API service functions
const AuthService = {
  login: (username, password) => {
    return API.post("/login", { username, password });
  },
  logout: () => {
    localStorage.removeItem("user");
  },
};

const GroupService = {
  getTeacherGroups: (teacherId) => {
    return API.get(`/teacher-groups/${teacherId}`);
  },
  getStudentGroups: (studentId) => {
    return API.get(`/student-groups/${studentId}`);
  },
  createGroup: (groupData) => {
    return API.post("/groups", groupData);
  },
  getAvailableGroups: () => {
    return API.get("/available-groups");
  },
  joinGroup: (studentId, groupCode) => {
    return API.post("/join-group", { studentId, groupCode });
  },
  getGroupDetails: (groupId) => {
    return API.get(`/groups/${groupId}`);
  },
};

const AssignmentService = {
  getTeacherAssignments: (teacherId) => {
    return API.get(`/teacher-assignments/${teacherId}`);
  },
  getStudentAssignments: (studentId) => {
    return API.get(`/student-assignments/${studentId}`);
  },
  createAssignment: (assignmentData) => {
    return API.post("/assignments", assignmentData);
  },
  getAssignmentDetails: (assignmentId) => {
    return API.get(`/assignments/${assignmentId}`);
  },
  getAssignmentSubmissions: (assignmentId) => {
    return API.get(`/assignment-submissions/${assignmentId}`);
  },
};

const SubmissionService = {
  submitAssignment: (formData) => {
    return API.post("/submissions", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  getSubmission: (submissionId) => {
    return API.get(`/submissions/${submissionId}`);
  },
  downloadSubmission: (submissionId) => {
    return API.get(`/submissions/download/${submissionId}`, {
      responseType: "blob",
    });
  },
};

export { API, AuthService, GroupService, AssignmentService, SubmissionService };
export default API;
