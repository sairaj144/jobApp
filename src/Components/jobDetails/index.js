// src/JobDetailPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJobDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs/${id}`);
      const data = await response.json();
      setJob(data.results);
    } catch (error) {
      console.error('Error fetching job details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!job) return <p>Job not found</p>;

  return (
    <div className="job-detail">
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
    </div>
  );
};

export default JobDetailPage;
