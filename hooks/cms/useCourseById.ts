import { useState, useEffect } from 'react';
import client from '../../config/sanity';

const useCourseDetailsById = (id: string) => {
    const [courseDetails, setCourseDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourseByLink = async () => {
            try {
                const data = await client.fetch(
                    `
                    *[_type == "courses" && _id == $id] {
                    
                        "courseContent": *[_type == "courseContent" && references(^._id)]
              {
                "chapters": chapters[] {
                     title,
                    "lectures": lectures[] {
                       title,
                       videoUrl,
                      duration,
                      "video":video.asset->{
                        url
                      },
                     
                    }
                  }
            },
              
                    "qaPairs": *[_type == "qa" && references(^._id)] [0]
            
            
                      }[0]
        `,

                    { id }
                );

                setCourseDetails(data);
                setLoading(false);
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCourseByLink();
    }, [id]);

    return { courseDetails, loading, error };
};

export default useCourseDetailsById