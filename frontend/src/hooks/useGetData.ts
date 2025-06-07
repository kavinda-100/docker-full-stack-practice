import axios from "axios"
import { useEffect, useState } from "react";

type ResponseData = {
    message: string;
}

export const useGetData = (url: string) => {
    const [data, setData] = useState<ResponseData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ResponseData>(url);
                setData(response.data);
            } catch (error) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}