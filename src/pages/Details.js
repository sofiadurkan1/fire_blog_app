import React from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../helpers/functions';


const Details = () => {
  const { blogsWithId, isLoading } = useFetch();

    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <h1>Details</h1>
            
        </div>
    )
}

export default Details
