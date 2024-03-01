// hooks/useReviewsCourses.js

import { useState, useEffect } from 'react';
import client from '../../config/sanity';

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await client.fetch(`
        *[_type == "courses"] {
          _id,
          title,
					link,
          description,
          duration,
            newPriceDz,
            newPriceEuro,
          oldPrice,
					videoUrl,
            "video":video.asset->{
              url
            },
          "image": image.asset->{
            url
          }
        }
      `);
                setCourses(data || []);
                setLoading(false);
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return { courses, loading, error };
};

export default useCourses;
