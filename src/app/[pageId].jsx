import { useParams } from 'next/navigation';
import React from 'react';

const PageId = () => {
    const {PageId} = useParams()
    console.log(PageId)
    return (
        <div>
            
        </div>
    );
};

export default PageId;