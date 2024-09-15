// src/JobPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchJobs = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${pageNumber}`);
      const data = await response.json();
      setJobs((prevJobs) => [...prevJobs, ...data.results]);
      setHasMore(data.jobs.length > 0);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  const loadMore = () => {
    if (loading || !hasMore) return;
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="job-page">
      <h1>Job Listings</h1>
      <div className="job-list">
        {jobs.length === 0 && <p>No jobs available</p>}
        {jobs.map((job) => (
          <Link to={`/job/${job.id}`} key={job.id} className="job-card">
            <h2>{job.title}</h2>
            {job.primary_details && (
              <>
                <p>
                  <strong>Place: </strong> {job.primary_details.Place}
                </p>
                <p>
                  <strong>Salary: </strong> {job.primary_details.Salary}
                </p>
                <p>
                  <strong>Experience: </strong> {job.primary_details.Experience}
                </p>
                <p>
                  <strong>Qualification: </strong> {job.primary_details.Qualification}
                </p>
              </>
            )}
            {!job.primary_details && (
              <p>
                <em>No additional details available for this job.</em>
              </p>
            )}
          </Link>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {hasMore && !loading && (
        <button onClick={loadMore} className="load-more">
          Load More
        </button>
      )}
    </div>
  );
};

export default JobPage;
