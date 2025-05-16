import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const JoinGroup = () => {
  const [groupCode, setGroupCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/groups/join", { code: groupCode });
      navigate("/student");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid group code");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">Join a Group</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Group Code</label>
          <input
            type="text"
            value={groupCode}
            onChange={(e) => setGroupCode(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter code provided by teacher"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Join Group
        </button>
      </form>
    </div>
  );
};

export default JoinGroup;