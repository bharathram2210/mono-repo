import { useState, useEffect } from 'react';
type DataType = { name: string; age: number; city: string };
const useFetch = (url: string) => {
    const [data, setData] = useState<DataType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    // const [refetch, setRefetch] = useState<boolean>(false);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            // const response = await fetch(url);
            // if (!response.ok) {
            //     throw new Error(`An error occurred: ${response.statusText}`);
            // }
            const jsonData = { name: 'John Doe', age: 30, city: 'New York' };
            setData(jsonData);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error, setLoading };
};

export default useFetch;
