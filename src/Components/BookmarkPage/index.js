import { useState, useEffect } from 'react';
import localforage from 'localforage';
import './index.css'; 

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const storedBookmarks = await localforage.getItem('bookmarkedJobs') || [];
        setBookmarks(storedBookmarks);
      } catch (err) {
        setError('Failed to load bookmarks.');
      } finally {
        setLoading(false);
      }
    };

    loadBookmarks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bookmarks-container">
      {bookmarks.length === 0 ? (
        <div>No bookmarks yet.</div>
      ) : (
        <div className="bookmarks-list">
          {bookmarks.map((job) => (
            <div key={job.id} className="bookmark-card">
              <h2 className="bookmark-title">{job.title}</h2>
              <p className="bookmark-location">{job.location}</p>
              <p className="bookmark-salary">{job.salary}</p>
              <p className="bookmark-phone">{job.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
