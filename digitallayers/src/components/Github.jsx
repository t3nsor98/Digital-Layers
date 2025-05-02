import React, { useState } from "react";

const Github = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const extractRepoInfo = (url) => {
    try {
      const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
      if (!match) throw new Error("Invalid GitHub repo URL.");
      return { owner: match[1], repo: match[2] };
    } catch (err) {
      setError("Invalid GitHub URL format.");
      return null;
    }
  };

  const fetchRepoDetails = async () => {
    setError("");
    setRepoData(null);
    const info = extractRepoInfo(repoUrl);
    if (!info) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/repos/${info.owner}/${info.repo}`
      );
      if (!res.ok) throw new Error("Repository not found or rate-limited.");
      const data = await res.json();
      setRepoData(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">GitHub Repository Overview</h1>
      <input
        type="text"
        placeholder="Paste GitHub repo URL (e.g., https://github.com/user/repo)"
        className="w-full p-3 border rounded-md mb-4"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <button
        onClick={fetchRepoDetails}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Loading..." : "Fetch Overview"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {repoData && (
        <div className="mt-6 border-t pt-4 space-y-2">
          <h2 className="text-xl font-semibold">{repoData.full_name}</h2>
          <p>{repoData.description}</p>
          <p>
            <strong>⭐ Stars:</strong> {repoData.stargazers_count}
          </p>
          <p>
            <strong>🍴 Forks:</strong> {repoData.forks_count}
          </p>
          <p>
            <strong>🐞 Open Issues:</strong> {repoData.open_issues_count}
          </p>
          <p>
            <strong>📚 License:</strong> {repoData.license?.name || "None"}
          </p>
          <p>
            <strong>📝 Language:</strong> {repoData.language}
          </p>
          <p>
            <strong>🕒 Last Updated:</strong>{" "}
            {new Date(repoData.updated_at).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Github;
