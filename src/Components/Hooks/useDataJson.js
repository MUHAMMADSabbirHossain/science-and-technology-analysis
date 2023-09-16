import { useEffect, useState } from "react";

const useDataJson = () => {
    const [dataJson, setDataJson] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDataJson(data));

    }, []);
    // console.log(dataJson);
    return [dataJson, setDataJson];
};

export default useDataJson;